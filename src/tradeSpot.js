/**
 * @function tradeSpot
 * @param {*} params 
 * @param {*} apiKey 
 * @param {*} method 
 * @param {*} url 
 * @returns 
 * @todo add custom logger, document
 */

async function tradeSpot( params, apiKey, method, url ) {	

	const method = method || "POST";

	const resp = fetch(url, {
		method: method,
		headers: new Headers([["context-type", "application/json"], ["X-MBX-APIKEY", apiKey]]),
		body: params,
	})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
		.finally(() => console.log("done"));	 // <---- custom logger?

	return new resp;
}

export default tradeSpot;
