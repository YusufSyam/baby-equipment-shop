export function toTitleCase(str?: string) {
  return str?.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function generateWhatsappTemplate(
  buyerName: string,
  invoiceCode: string,
  itemName: string,
  price: number,
  quantity: number,
  totalPrice: number
) {
  return `Saya ingin melakukan pembelian dengan detail sebagai berikut:
  - Nama Pembeli: ${buyerName}
  - Kode Invoice: ${invoiceCode}
  - Nama Barang: ${itemName}
  - Harga per Satuan: ${price}
  - Kuantitas: ${quantity}
  - Total Harga: ${totalPrice}`
  ;
}
