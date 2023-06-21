
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
		console.log(secret);
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
					console.log(url.search);
					const res = await signRest(url.search, secret);
					url.searchParams.append('signature', res);
					// it into a ByteString, and then a Base64-encoded string.
					// let base64Mac = btoa(String.fromCharCode(...new Uint8Array(mac)));
					// must convert "+" to "-" as urls en1code "+" as " "
					// base64Mac = base64Mac.replaceAll("+", "-");
					// url.searchParams.set("mac", base64Mac);
					// url.searchParams.set("expiry", expiry);
					return new Response(url.toString());
				default:
					return new Response('Not found', { status: 404 });
			}
		} catch (err) {
			/** @type {Error} */ let e = err;
			return new Response(e.toString());
		}
	},
};
