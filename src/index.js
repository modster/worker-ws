
import template from './template';
// import { Buffer } from 'node:buffer';

import websocketHandler from './websocketHandler';
import signRest from './signRest';

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
          url.searchParams.append('timestamp', timestamp);
          const res = await signRest(url.search, secret);
          url.searchParams.append('signature', res);
          return new Response(url.toString());
        default:
          return new Response('Not found', { status: 404 });

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
        // return new Response(params);
      }
    } catch (err) {
			/** @type {Error} */ let e = err;
      return new Response(e.toString());
    }
  },
};
