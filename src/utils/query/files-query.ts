import { BASE_URL } from "../const/api";

const endpoint = `${BASE_URL}/files`;

export async function qfUploadFile(thumbnail:File) {
  const accessToken = localStorage?.getItem("accessToken");

  const formData = new FormData();
  formData.append("file", thumbnail);

  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // 'Content-Type': 'multipart/form-data',
    },
    mode: "cors",
    credentials: "same-origin",
    body: formData
  });
  
  const data = await response.json();

  return data;
}

export async function qfGetFile(fileName:string) {
  const response = await fetch(`${BASE_URL}/uploaded-file/${fileName}`);
  console.log(response, "response");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}