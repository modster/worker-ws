/**
 * @module signReq
 * @description Contains the function to sign a request.
 * @requires module:signRest
 * @returns { URLSearchParams } urlParams
 */
import signRest from "./signRest.js";

async function signReq(urlParams, secret) {

  const params = [];
  for await (const [key, value] of urlParams) {
    params.push(key, value);
  }
  params.push('timestamp', Date.now());
  const signature = signRest(params, secret);
  params.push('signature', signature);
  return params;
}
export default signReq;
