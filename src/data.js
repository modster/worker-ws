/**
 * @param { SubtleCrypto<uuidv4> } orderid // crypto.uuidv4(),
 * @param { String } symbol, // string repesenting trading pair
 * @param { String } side, // BUY, SELL
 * @param { String } type, // LIMIT, MARKET, STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, TAKE_PROFIT_LIMIT, LIMIT_MAKER
 * @param { Number } price, // price of the order
 * @param { Number } quantity, //quantity of the order
 * @param { Date } timestamp, // new Date().getTime(),
 * @param { String } apiKey, process.env.apiKey,
 * @param { SubtleCrypto<Sign> } signature, // HmacSha256(signature, secretKey)
 * @param { String } timeInForce, // GTC, IOC, FOK, GTX
 * @param { Number } recvWindow, // max 60000
 * @param { String } strategyId, //strategy id
 * @param { Number } quoteOrderQty, //quote order qty
 * @param { String } strategyType, //strategy type
 * @param { Number } stopPrice, //stop price
 * @param { Number } trailingDelta, //trailing delta
 * @param { Number } icebergQty, //iceberg qty
 * @param { String } newOrderRespType, //ACK, RESULT, FULL
 * @param { String } selfTradePreventionMod, //decreaseOnly, closePosition, noSelfTrade
 * @param { String } newClientOrderId, //new client order id
 */


// function data

const data = {
    symbol: "BTCUSDT",
    side: "BUY",
    type: "LIMIT",
    price: 10000.00,
    quantity: 0.01,
};

export default data;    
    
    
    
    
    // constructor() {
        // orderId = crypto.randomUUID();
        // method = post ?? "POST";
        // params = {
            // symbol: "BTCUSDT",
            // side: "BUY",
            // type: "LIMIT",
            // timeInForce: "GTC",
            // quantity: 0.01,
            // price: 10000.00,
            // newClientOrderId: orderId,
            // stopPrice: 0.0,
            // icebergQty: 0.0,
            // newOrderRespType: "ACK",
            // recvWindow: 60000,
            // timestamp: new Date().getTime(),
        // };
        // apiKey = process.env.TESTNET_APIKEY;
        // secret = process.env.TESTNET_SECRET;
        // signature = HmacSha256(signature, secretKey);
        // url = "https://testnet.binance.vision/api/v3/order/test";
    // }
// }
        // timestamp = new Date().getTime();
// 
    // symbol: "BTCUSDT",
    // side: "BUY",
    // type: "LIMIT",
    // price: 10000.00,
    // quantity: 0.01,
// 