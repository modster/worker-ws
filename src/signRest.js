/**
* @function signRest
* @description Signs request params with HMAC SHA256
* @param { URLSearchParams } params 
* @returns { String } hex
*/

async function signRest(params, secret) {
  const secretKeyData = new TextEncoder().encode(secret);
  const newSecret = await crypto.subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const enc = new TextEncoder();
  // const dataToEncode = params.toString();
  const mac = await crypto.subtle.sign(
    "HMAC",
    newSecret,
    enc.encode(params.toString())
  )

  const hex = Array.from(new Uint8Array(mac))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return hex;
}

export default signRest;