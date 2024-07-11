export function ParseFileBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(reader.result?.toString().split(";")[1].replace("base64,", "")!);
    reader.onerror = (error) => reject(error);
  });
}

export function WhatsappMessageOpenInNewTab(
  phoneNumber?: string,
  message?: string
) {
  const encodedMessage = encodeURIComponent(message || "");
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber||""}&text=${encodedMessage}`;
  window.open(url, "_blank");
}
