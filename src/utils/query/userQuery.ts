import { ILoginInput } from "../../pages/login-page/Login.page";
import { BASE_URL } from "../const/api";

const endpoint = `${BASE_URL}/users`;

export async function qfRegister(values: ILoginInput) {
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
      role: "BUYER"
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
