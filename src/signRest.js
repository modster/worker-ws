/**
 * 
 * @param {URL} params 
 * @returns 
 */
export default async function signRest(params, secret) {
  const dataToEncode = params.toString();
  const encoder = new TextEncoder();
  // const secret = TESTNET_SECRET;
  const secretKeyData = encoder.encode(secret);
  const apiSecret = await crypto.subtle.importKey(
    "raw",
    secretKeyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const mac = await crypto.subtle.sign(
    "HMAC",
    apiSecret,
    encoder.encode(dataToEncode)
  );
  const hex = Array.from(new Uint8Array(mac))
  .map(b => b.toString(16).padStart(2, '0'))
  .join('');
  console.log(hex);
  return hex;
} 
 //      // `mac` is an ArrayBuffer, so you need to make a few changes to get
      // it into a ByteString, and then a Base64-encoded string.
      // let base64Mac = btoa(String.fromCharCode(...new Uint8Array(mac)));
      // must convert "+" to "-" as urls encode "+" as " "
      // base64Mac = base64Mac.replaceAll("+", "-");
      // url.searchParams.set("mac", base64Mac);
      // url.searchParams.set("expiry", expiry);

      // return new Response(url);
    // }

    // const url = new URL(request.url);
    // const prefix = "/generate/";
    // if (url.pathname.startsWith(prefix)) {
      // Replace the "/generate/" path prefix with "/verify/", which we
      // use in the first example to recognize authenticated paths.
      // url.pathname = `/verify/${url.pathname.slice(prefix.length)}`;
      // return await generateSignedUrl(url);
    // } else {
      // return fetch(request);
    // }
  // },
// };