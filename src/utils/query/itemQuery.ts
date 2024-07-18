import { IAddNewCatalogItemInterfaces } from "../../components/AddNewCatalogModal.component";
import { BASE_URL, getTokenAuthorizationHeader } from "../const/api";

const endpoint = `${BASE_URL}/items`;

export async function qfAddItem(values : IAddNewCatalogItemInterfaces) {

  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      name: values?.itemName,
      stock: values?.isAvailable? 100 : 0,
      price: values?.price,
      category: values?.category
    })
  });

  const data = await response.json()
  console.log("INI RESPONSE", data);

  return data;
}


export async function qfFetchAllItems() {
  const response = await fetch(`${endpoint}`);
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}