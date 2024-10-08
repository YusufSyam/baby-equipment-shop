import { BASE_URL, getTokenAuthorizationHeader } from "../const/api";

const endpoint = `${BASE_URL}/carts`;

export interface IPostNewCart {
  itemId: string;
  quantity: number;
}

export async function qfAddCart(values: IPostNewCart) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(values)
  });

  const data = await response.json();
  console.log("INI RESPONSE", data);

  return data;
}

export async function qfFetchBuyerCarts() {
  const response = await fetch(`${BASE_URL}/buyers/carts`, {
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function qfFetchSellerCarts() {
  const response = await fetch(`${BASE_URL}/sellers/carts`, {
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function qfFetchSellerOrders() {
  const response = await fetch(`${BASE_URL}/sellers/orders`, {
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function qfFetchBuyerOrders() {
  const response = await fetch(`${BASE_URL}/buyers/orders`, {
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function qfDeleteCart(cartId:string) {
  const response = await fetch(`${endpoint}/${cartId}`, {
    method: "DELETE",
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

export async function qfUpdateCartStatus(cartId:string) {
  const response = await fetch(`${endpoint}/${cartId}`, {
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
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}
