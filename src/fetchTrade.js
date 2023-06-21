/**
 * orderid, //crypto.uuidv4(),
 * symbol, // string repesenting trading pair
 * side, // BUY, SELL
 * type, // LIMIT, MARKET, STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, TAKE_PROFIT_LIMIT, LIMIT_MAKER
 * price, // price of the order
 * quantity, //quantity of the order
 * timestamp, // new Date().getTime(),
 * apiKey, process.env.apiKey,
 * signature, // HmacSha256(signature, secretKey)
 * timeInForce, // GTC, IOC, FOK, GTX
 * recvWindow, // max 60000
 * strategyId, //strategy id
 * quoteOrderQty, //quote order qty
 * strategyType, //strategy type
 * stopPrice, //stop price
 * trailingDelta, //trailing delta
 * icebergQty, //iceberg qty
 * newOrderRespType, //ACK, RESULT, FULL
 * selfTradePreventionMod, //decreaseOnly, closePosition, noSelfTrade
 * newClientOrderId, //new client order id
 * url, // 'https://testnet.binance.vision/api/v3/order/', 'https://api.binance.com/api/v3/order/test';
 */
// async function fetchTrade(req) {
// 
	// const { symbol, side, type, price, quantity } = req;
	// console.log("req.body:", req.body);
//-----------------------------------------------
	const orderid = crypto.uuidv4();
	const symbol = "BTCUSDT";
	const side = "BUY";
	const type = "LIMIT";
	const price = 10000.00;
	const quantity = 0.01;
//-----------------------------------------------	
	const timestamp = new Date().getTime();
	const apiKey = process.env.apiKey;
	const secretKey = process.env.secretKey;

	const params = new URLSearchParams(`symbol=${symbol}&side=${side}&type=${type}&price=${price}&quantity=${quantity}&timestamp=${new Date().getTime()}`);
	console.log("params: ", params);
	
	const signature = crypto.createHmac('sha256', secretKey).update(params).digest('hex');
	console.log("signature : ", signature);
	
	// const resp = fetch('https://testnet.binance.vision/api/v3/order/', {
		// method: 'POST',
		// headers: new Headers(`"context-type": "application/json", "X-MBX-APIKEY", "${process.env.apiKey}"`),
		// body: `${ params } & signature=${ signature }`,
	// })
		// .then(response => response.json())
		// .then(data => console.log(data))
		// .catch(error => console.log(error))
		// 
	// return new Response(resp);
// }
