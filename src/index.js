
import template from './template';
// import { Buffer } from 'node:buffer';
import websocketHandler from './websocketHandler';
import signRest from './signRest';
import signReq from './signReq';


let count = 0;

export default {
  /**
   * @param {Request} req
   */
  async fetch(req, env) {
    const secret = env.TESTNET_SECRET;
    try {
      const url = new URL(req.url);
      const timestamp = Date.now();
      switch (url.pathname) {

        case '/':
          return template();

        case '/ws':
          return await websocketHandler(req);

        case '/sign':
          const obj = {};
          const searchParams = new URLSearchParams(url.searchParams.entries());
          searchParams.sort();

          for (const p of searchParams) {
            obj[p[0]] = p[1];//value;
            // console.log(JSON.stringify(obj));
          }

          obj['timestamp'] = timestamp;
          // console.log(JSON.stringify(obj));

          const signature = await signRest(obj, secret);
          obj['signature'] = signature;
          console.log(JSON.stringify(obj));

          return new Response(JSON.stringify(obj));

            // 'symbol': entries.get(symbol),
            // 'side': entries.get(side),
            // 'type': entries.get(type),
            // 'quantity': entries.get(quantity),
            // 'price': entries.get(price),
            // 'recvWindow': entries.get(recvWindow),
            // "timestamp": entries.get(timestamp),
          // };

          // return await signReq(JSON.stringify(obj), secret)
              //  .then((res) => {
              // return new Response(res);
            // })
            // .catch((err) => {
              // return new Response(JSON.stringify(err));
            // });
        // 
        // signReq(entries, secret)
        // .then((res) => {
        // return new Response(JSON.stringify(res));
        // })
        // .catch((err) => {
        // return new Response(JSON.stringify(err));
        // });
        // 






        case '/test':
          const urlParams = url.searchParams.entries();
          const params = [];
          for await (const [key, value] of urlParams) {
            params.push(`${key}: ${value}`);
          }
          params.push(`timestamp: ${timestamp}`);
          signRest(params, secret)
            .then((res) => {
              params.push(`signature: ${res}`);
            })
            .catch((err) => {
              params.push(`signature: ${err}`);
            });
          return new Response(JSON.stringify(params))

        default:
          return new Response('Not found', { status: 404 });

      }
    } catch (err) {
			/** @type {Error} */ let e = err;
      return new Response(e.toString());
    }
  },
};
