
const testUrl = new URL('https://testnet.binance.vision/api/v3/order');

const testParams = [
    [symbol, 'BTCUSDT'],
    [side, 'BUY'],
    [type, 'LIMIT'],
    [timeInForce, 'GTC'],
    [quantity, 0.01],
    [price, 10000.00],
    [timestamp, new Date().getTime()],
];

for (const [key, value] of testParams.entries()) {
    console.log(`${key}: ${value}`);
    params.append(key, value);
}

const testSignature = signRest(params, secret);
testParams.append('signature', testSignature);

const test = fetch(testUrl, {
    method: 'POST',
    headers: new Headers([["context-type", "application/json"], ["X-MBX-APIKEY", apiKey]]),
    body: params,
})
    .then((res) => res.json())
    .then((data) => {
        console.log("done:", data.body);
        return data;
    })
    .catch((err) => console.log(err))
    // .finally( () => {
        // console.log(test.);
        // return new Response( null , {
            // headers: {
                // 'content-type': 'application/json',
            // },
        // });
    // });

	// return new Request( url, {
		// headers: {
			// 'content-type': 'application/json',
            // 'X-MBX-APIKEY': apiKey,
        // },
        // body: params.toString(),
		// },
	// });
