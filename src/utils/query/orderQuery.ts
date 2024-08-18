import { BASE_URL, getTokenAuthorizationHeader } from "../const/api";

const endpoint = `${BASE_URL}/orders`;

export async function qfPostOrder(cartIdList: string[]) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      carts: cartIdList
    })
  });

  const data = await response.json();
  console.log("INI RESPONSE", data);

  return data;
}

export async function qfCompleteOrder(orderId:string) {
  const response = await fetch(`${endpoint}/${orderId}`, {
    method: "PUT",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      isValid:true
    })
  });

  const data = await response.json();
  console.log("INI RESPONSE", data);

  return data;
}

export async function qfCancelOrder(orderId:string) {
  const response = await fetch(`${endpoint}/${orderId}`, {
    method: "PUT",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      isValid:false
    })
  });

  const data = await response.json();
  console.log("INI RESPONSE", data);

  return data;
}