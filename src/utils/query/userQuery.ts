import { BASE_URL, getTokenAuthorizationHeader } from "../const/api";

const endpoint = `${BASE_URL}/users`;

export interface IRegisterInput {
  username: string;
  password: string;
  phoneNumber: string
}

export async function qfRegister(values: IRegisterInput) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      // ...getTokenAuthorizationHeader()
      // Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json"
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      username: values.username,
      password: values.password,
      role: "BUYER",
      phoneNumber: values.phoneNumber
    })
  });
  if (response.ok) {
    const data = await response.json();
    console.log("LLLLLLLLLLLLLLLLLL", data);
    localStorage.setItem("accessToken", data?.data?.accessToken);
    return data.accessToken;
  } else {
    throw new Error("Login failed");
  }
}

export async function qfFetchUserCredentials() {
  const response = await fetch(`${endpoint}`, {
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
