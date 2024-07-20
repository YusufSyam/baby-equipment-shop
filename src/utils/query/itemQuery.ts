import { IAddNewCatalogItemInterfaces } from "../../components/AddNewCatalogModal.component";
import { BASE_URL, getTokenAuthorizationHeader } from "../const/api";

const endpoint = `${BASE_URL}/items`;

export interface IPostNewItem{
  name: string;
  stock: number;
  price:number;
  description: string;
  thumbnail?: string;
  category: string;
}

export async function qfAddItem(values : IPostNewItem) {

  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      ...getTokenAuthorizationHeader()
    },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(values)
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


export async function qfFetchItemsById(id:string) {
  const response = await fetch(`${endpoint}/${id}`);
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}



export async function qfDeleteItem(itemId: string) {
  const response = await fetch(`${endpoint}/${itemId}`, {
    method: "DELETE",
    headers: {
      ...getTokenAuthorizationHeader()
    }
  });

  const data = await response.json();

  return data;
}

export interface IEditItem {
  itemId: string;
  values: IPostNewItem;
}

export async function qfEditItem({ itemId, values }: IEditItem) {
  const response = await fetch(`${endpoint}/${itemId}`, {
    method: "PUT",
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