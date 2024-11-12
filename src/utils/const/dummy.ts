// import dummy1 from "../../assets/images/dummy1.png";
// import { default as dummy2, default as dummy8 } from "../../assets/images/dummy2.jpeg";
// import { default as dummy3, default as dummy9 } from "../../assets/images/dummy3.jpeg";
// import dummy4 from "../../assets/images/dummy4.png";
// import dummy5 from "../../assets/images/dummy5.jpg";
// import dummy6 from "../../assets/images/dummy6.jpg";
// import dummy7 from "../../assets/images/dummy7.jpg";
// import { IActivityTableRow, IOrder } from "../../pages/admin-page/AdminPage.page";
// import { ICatalogCard } from "../../pages/home/Home-CatalogCard.component";

// export const dummyCatalogData: ICatalogCard[] = [
//   { id: "1", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Baju Bayi Lengan Panjang', price: 75000, image: dummy1, isAvailable: true, category: 'CLOTHES', soldCount: 150 },
//   { id: "2", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Makanan Bayi Organik', price: 55000, image: dummy2, isAvailable: true, category: 'ACCESSORIES', soldCount: 200 },
//   { id: "3", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Alat Sterilisasi Botol', price: 300000, image: dummy3, isAvailable: false, category: 'OTHER', soldCount: 75 },
//   { id: "4", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Topi Bayi', price: 25000, image: dummy4, isAvailable: true, category: 'CLOTHES', soldCount: 180 },
//   { id: "5", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Susu Formula Bayi', price: 120000, image: dummy5, isAvailable: false, category: 'ACCESSORIES', soldCount: 220 },
//   { id: "6", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Gendongan Bayi', price: 200000, image: dummy6, isAvailable: true, category: 'OTHER', soldCount: 130 },
//   { id: "7", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Celana Bayi Pendek', price: 45000, image: dummy7, isAvailable: true, category: 'CLOTHES', soldCount: 160 },
//   { id: "8", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Biskuit Bayi', price: 30000, image: dummy8, isAvailable: true, category: 'ACCESSORIES', soldCount: 140 },
//   { id: "9", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Tempat Penyimpanan Susu', price: 180000, image: dummy9, isAvailable: false, category: 'OTHER', soldCount: 90 },
//   { id: "10", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Kaos Kaki Bayi', price: 15000, image: dummy1, isAvailable: true, category: 'CLOTHES', soldCount: 170 },
//   { id: "11", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Mainan Gigit Bayi', price: 40000, image: dummy2, isAvailable: true, category: 'OTHER', soldCount: 100 },
//   { id: "12", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Piyama Bayi', price: 85000, image: dummy3, isAvailable: false, category: 'CLOTHES', soldCount: 190 },
//   { id: "13", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Makanan Puree', price: 65000, image: dummy4, isAvailable: true, category: 'ACCESSORIES', soldCount: 210 },
//   { id: "14", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Termos Susu Bayi', price: 110000, image: dummy5, isAvailable: true, category: 'OTHER', soldCount: 85 },
//   { id: "15", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sweater Bayi', price: 95000, image: dummy6, isAvailable: true, category: 'CLOTHES', soldCount: 145 },
//   { id: "16", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Jus Buah Bayi', price: 50000, image: dummy7, isAvailable: false, category: 'ACCESSORIES', soldCount: 115 },
//   { id: "17", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Bantal Bayi', price: 30000, image: dummy8, isAvailable: true, category: 'OTHER', soldCount: 60 },
//   { id: "18", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sarung Tangan Bayi', price: 20000, image: dummy9, isAvailable: true, category: 'CLOTHES', soldCount: 130 },
//   { id: "19", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sup Bayi', price: 70000, image: dummy1, isAvailable: true, category: 'ACCESSORIES', soldCount: 95 },
//   { id: "20", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Botol Susu', price: 45000, image: dummy2, isAvailable: false, category: 'OTHER', soldCount: 140 },
//   { id: "21", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Setelan Bayi', price: 60000, image: dummy3, isAvailable: true, category: 'CLOTHES', soldCount: 165 },
//   { id: "22", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Bubur Bayi', price: 55000, image: dummy4, isAvailable: true, category: 'ACCESSORIES', soldCount: 180 },
//   { id: "23", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Penghangat Botol Susu', price: 120000, image: dummy5, isAvailable: true, category: 'OTHER', soldCount: 75 },
//   { id: "24", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Celana Panjang Bayi', price: 50000, image: dummy6, isAvailable: false, category: 'CLOTHES', soldCount: 155 },
//   { id: "25", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Makanan Camilan Bayi', price: 35000, image: dummy7, isAvailable: true, category: 'ACCESSORIES', soldCount: 125 },
//   { id: "26", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Pembersih Botol', price: 65000, image: dummy8, isAvailable: true, category: 'OTHER', soldCount: 90 },
//   { id: "27", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Jaket Bayi', price: 85000, image: dummy9, isAvailable: true, category: 'CLOTHES', soldCount: 140 },
//   { id: "28", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sereal Bayi', price: 50000, image: dummy1, isAvailable: false, category: 'ACCESSORIES', soldCount: 105 },
//   { id: "29", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Alas Kaki Bayi', price: 30000, image: dummy2, isAvailable: true, category: 'OTHER', soldCount: 95 },
//   { id: "30", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Baju Bayi Pendek', price: 65000, image: dummy3, isAvailable: true, category: 'CLOTHES', soldCount: 160 },
//   { id: "31", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Makanan Instan Bayi', price: 70000, image: dummy4, isAvailable: true, category: 'ACCESSORIES', soldCount: 185 },
//   { id: "32", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Tatakan Botol', price: 100000, image: dummy5, isAvailable: false, category: 'OTHER', soldCount: 50 },
//   { id: "33", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Romper Bayi', price: 90000, image: dummy6, isAvailable: true, category: 'CLOTHES', soldCount: 135 },
//   { id: "34", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Biskuit Gandum Bayi', price: 30000, image: dummy7, isAvailable: true, category: 'ACCESSORIES', soldCount: 145 },
//   { id: "35", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Tempat Tidur Bayi', price: 250000, image: dummy8, isAvailable: true, category: 'OTHER', soldCount: 70 },
//   { id: "36", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Kaos Bayi', price: 50000, image: dummy9, isAvailable: true, category: 'CLOTHES', soldCount: 175 },
//   { id: "37", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Jus Sayur Bayi', price: 45000, image: dummy1, isAvailable: false, category: 'ACCESSORIES', soldCount: 110 },
//   { id: "38", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Pengaman Pintu', price: 75000, image: dummy2, isAvailable: true, category: 'OTHER', soldCount: 65 },
//   { id: "39", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Setelan Baju Tidur Bayi', price: 80000, image: dummy3, isAvailable: true, category: 'CLOTHES', soldCount: 195 },
//   { id: "40", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Snack Bayi', price: 50000, image: dummy4, isAvailable: true, category: 'ACCESSORIES', soldCount: 150 },
//   { id: "41", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Tempat Mainan', price: 90000, image: dummy5, isAvailable: true, category: 'OTHER', soldCount: 85 },
//   { id: "42", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Topi Bayi', price: 25000, image: dummy6, isAvailable: true, category: 'CLOTHES', soldCount: 180 },
//   { id: "43", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Bubur Organik Bayi', price: 60000, image: dummy7, isAvailable: true, category: 'ACCESSORIES', soldCount: 175 },
//   { id: "44", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Paket Steril Botol', price: 110000, image: dummy8, isAvailable: true, category: 'OTHER', soldCount: 75 },
//   { id: "45", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sweater Bayi', price: 95000, image: dummy9, isAvailable: true, category: 'CLOTHES', soldCount: 145 },
//   { id: "46", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Puding Bayi', price: 35000, image: dummy1, isAvailable: false, category: 'ACCESSORIES', soldCount: 90 },
//   { id: "47", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Tempat Makan Bayi', price: 80000, image: dummy2, isAvailable: true, category: 'OTHER', soldCount: 70 },
//   { id: "48", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Romper Bayi', price: 75000, image: dummy3, isAvailable: true, category: 'CLOTHES', soldCount: 190 },
//   { id: "49", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Sereal Buah Bayi', price: 50000, image: dummy4, isAvailable: true, category: 'ACCESSORIES', soldCount: 125 },
//   { id: "50", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa, incidunt praesentium quasi voluptatem dicta eos! Cumque sequi delectus qui?", itemName: 'Botol Susu Anti Kolik', price: 120000, image: dummy5, isAvailable: true, category: 'OTHER', soldCount: 90 }
// ];

// export const dummyActivityData: IActivityTableRow[]= [
//   { itemName: 'Baju Bayi Lengan Panjang', itemId: '1', buyerName: 'John Doe', buyerId: 'B001', status: 'completed', buyingTime: new Date('2023-01-16T10:00:00'),itemPrice: 15000, itemQuantity: 1, itemTotalPrice: 15000, buyerWANumber: "6287715883436", invoice: "923891320" },
//   { itemName: 'Makanan Bayi Organik', itemId: '2', buyerName: 'Jane Smith', buyerId: 'B002', status: 'pending', buyingTime: new Date('2023-01-16T12:30:00'),itemPrice: 45000, itemQuantity: 3, itemTotalPrice: 135000, buyerWANumber: "62887435199578" },
//   { itemName: 'Alat Sterilisasi Botol', itemId: '3', buyerName: 'Alice Johnson', buyerId: 'B003', status: 'shipped', buyingTime: new Date('2023-01-16T09:15:00') },
//   { itemName: 'Topi Bayi', itemId: '4', buyerName: 'Michael Brown', buyerId: 'B004', status: 'completed', buyingTime: new Date('2023-01-16T14:45:00') },
//   { itemName: 'Susu Formula Bayi', itemId: '5', buyerName: 'Emily Davis', buyerId: 'B005', status: 'cancelled', buyingTime: new Date('2023-01-16T11:20:00') },
//   { itemName: 'Gendongan Bayi', itemId: '6', buyerName: 'David Wilson', buyerId: 'B006', status: 'pending', buyingTime: new Date('2023-01-20T16:30:00') },
//   { itemName: 'Celana Bayi Pendek', itemId: '7', buyerName: 'Chris Martinez', buyerId: 'B007', status: 'completed', buyingTime: new Date('2023-01-20T13:10:00') },
//   { itemName: 'Biskuit Bayi', itemId: '8', buyerName: 'Sarah Anderson', buyerId: 'B008', status: 'shipped', buyingTime: new Date('2023-01-20T08:40:00') },
//   { itemName: 'Tempat Penyimpanan Susu', itemId: '9', buyerName: 'James Thomas', buyerId: 'B009', status: 'completed', buyingTime: new Date('2023-01-20T15:50:00') },
//   { itemName: 'Kaos Kaki Bayi', itemId: '10', buyerName: 'Patricia White', buyerId: 'B010', status: 'pending', buyingTime: new Date('2023-01-20T10:25:00') },
//   { itemName: 'Mainan Gigit Bayi', itemId: '11', buyerName: 'Robert Harris', buyerId: 'B011', status: 'completed', buyingTime: new Date('2023-01-20T12:50:00') },
//   { itemName: 'Piyama Bayi', itemId: '12', buyerName: 'Linda Clark', buyerId: 'B012', status: 'cancelled', buyingTime: new Date('2023-01-20T11:05:00') },
//   { itemName: 'Makanan Puree', itemId: '13', buyerName: 'Daniel Lewis', buyerId: 'B013', status: 'shipped', buyingTime: new Date('2023-01-20T14:30:00') },
//   { itemName: 'Termos Susu Bayi', itemId: '14', buyerName: 'Karen Walker', buyerId: 'B014', status: 'completed', buyingTime: new Date('2023-01-20T09:00:00') },
//   { itemName: 'Sweater Bayi', itemId: '15', buyerName: 'Mark Allen', buyerId: 'B015', status: 'pending', buyingTime: new Date('2023-01-20T13:45:00') },
//   { itemName: 'Jus Buah Bayi', itemId: '16', buyerName: 'Nancy Young', buyerId: 'B016', status: 'completed', buyingTime: new Date('2023-01-30T16:20:00') },
//   { itemName: 'Bantal Bayi', itemId: '17', buyerName: 'Paul King', buyerId: 'B017', status: 'shipped', buyingTime: new Date('2023-01-31T08:30:00') },
//   { itemName: 'Sarung Tangan Bayi', itemId: '18', buyerName: 'Elizabeth Wright', buyerId: 'B018', status: 'completed', buyingTime: new Date('2023-02-01T11:10:00') },
//   { itemName: 'Sup Bayi', itemId: '19', buyerName: 'Steven Scott', buyerId: 'B019', status: 'pending', buyingTime: new Date('2023-02-01T15:00:00') },
//   { itemName: 'Botol Susu', itemId: '20', buyerName: 'Barbara Adams', buyerId: 'B020', status: 'completed', buyingTime: new Date('2023-02-01T10:40:00') },
//   { itemName: 'Setelan Bayi', itemId: '21', buyerName: 'Kevin Baker', buyerId: 'B021', status: 'cancelled', buyingTime: new Date('2023-02-01T12:15:00') },
//   { itemName: 'Bubur Bayi', itemId: '22', buyerName: 'Jennifer Gonzalez', buyerId: 'B022', status: 'shipped', buyingTime: new Date('2023-02-01T09:30:00') },
//   { itemName: 'Penghangat Botol Susu', itemId: '23', buyerName: 'Jason Nelson', buyerId: 'B023', status: 'completed', buyingTime: new Date('2023-02-01T14:55:00') },
//   { itemName: 'Celana Panjang Bayi', itemId: '24', buyerName: 'Susan Hill', buyerId: 'B024', status: 'pending', buyingTime: new Date('2023-02-01T11:20:00') },
//   { itemName: 'Makanan Camilan Bayi', itemId: '25', buyerName: 'David Green', buyerId: 'B025', status: 'completed', buyingTime: new Date('2023-02-01T13:00:00') },
//   { itemName: 'Pembersih Botol', itemId: '26', buyerName: 'Sarah Campbell', buyerId: 'B026', status: 'cancelled', buyingTime: new Date('2023-02-01T10:45:00') },
//   { itemName: 'Jaket Bayi', itemId: '27', buyerName: 'Brian Mitchell', buyerId: 'B027', status: 'shipped', buyingTime: new Date('2023-02-01T15:30:00') },
//   { itemName: 'Sereal Bayi', itemId: '28', buyerName: 'Dorothy Carter', buyerId: 'B028', status: 'completed', buyingTime: new Date('2023-02-01T08:50:00') },
//   { itemName: 'Alas Kaki Bayi', itemId: '29', buyerName: 'Kenneth Roberts', buyerId: 'B029', status: 'pending', buyingTime: new Date('2023-02-01T12:05:00') },
//   { itemName: 'Baju Bayi Pendek', itemId: '30', buyerName: 'Donna Phillips', buyerId: 'B030', status: 'completed', buyingTime: new Date('2023-02-01T11:10:00') },
//   { itemName: 'Makanan Instan Bayi', itemId: '31', buyerName: 'Joseph Evans', buyerId: 'B031', status: 'shipped', buyingTime: new Date('2023-02-01T13:40:00') },
//   { itemName: 'Tatakan Botol', itemId: '32', buyerName: 'Michelle Turner', buyerId: 'B032', status: 'completed', buyingTime: new Date('2023-02-01T16:25:00') },
//   { itemName: 'Romper Bayi', itemId: '33', buyerName: 'James Parker', buyerId: 'B033', status: 'pending', buyingTime: new Date('2023-02-01T09:20:00') },
//   { itemName: 'Biskuit Gandum Bayi', itemId: '34', buyerName: 'Mary Collins', buyerId: 'B034', status: 'completed', buyingTime: new Date('2023-02-01T14:10:00') },
//   { itemName: 'Tempat Tidur Bayi', itemId: '35', buyerName: 'Charles Edwards', buyerId: 'B035', status: 'cancelled', buyingTime: new Date('2023-02-01T11:30:00') },
//   { itemName: 'Selimut Bayi', itemId: '36', buyerName: 'Patricia Stewart', buyerId: 'B036', status: 'shipped', buyingTime: new Date('2023-02-01T15:00:00') },
//   { itemName: 'Susu Bubuk Bayi', itemId: '37', buyerName: 'Christopher Morris', buyerId: 'B037', status: 'completed', buyingTime: new Date('2023-02-01T12:25:00') },
//   { itemName: 'Mainan Edukasi Bayi', itemId: '38', buyerName: 'Linda Bell', buyerId: 'B038', status: 'pending', buyingTime: new Date('2023-02-01T10:40:00') },
//   { itemName: 'Setelan Baju Tidur Bayi', itemId: '39', buyerName: 'Paul Bennett', buyerId: 'B039', status: 'completed', buyingTime: new Date('2023-02-01T11:50:00') },
//   { itemName: 'Snack Bayi', itemId: '40', buyerName: 'Barbara Ward', buyerId: 'B040', status: 'shipped', buyingTime: new Date('2023-02-01T13:20:00') },
//   { itemName: 'Tempat Mainan', itemId: '41', buyerName: 'Mark Rogers', buyerId: 'B041', status: 'completed', buyingTime: new Date('2023-02-01T08:30:00') },
//   { itemName: 'Topi Bayi', itemId: '42', buyerName: 'Nancy Murphy', buyerId: 'B042', status: 'pending', buyingTime: new Date('2023-02-01T09:15:00') },
//   { itemName: 'Bubur Organik Bayi', itemId: '43', buyerName: 'Kenneth Cook', buyerId: 'B043', status: 'completed', buyingTime: new Date('2023-02-01T14:50:00') },
//   { itemName: 'Paket Steril Botol', itemId: '44', buyerName: 'Elizabeth Bailey', buyerId: 'B044', status: 'cancelled', buyingTime: new Date('2023-02-01T12:05:00') },
//   { itemName: 'Sweater Bayi', itemId: '45', buyerName: 'Michael Rivera', buyerId: 'B045', status: 'completed', buyingTime: new Date('2023-02-01T15:30:00') },
//   { itemName: 'Puding Bayi', itemId: '46', buyerName: 'David Cooper', buyerId: 'B046', status: 'shipped', buyingTime: new Date('2023-03-01T10:00:00') },
//   { itemName: 'Tempat Makan Bayi', itemId: '47', buyerName: 'Jennifer Richardson', buyerId: 'B047', status: 'completed', buyingTime: new Date('2023-03-02T12:30:00') },
//   { itemName: 'Romper Bayi', itemId: '48', buyerName: 'James Cox', buyerId: 'B048', status: 'pending', buyingTime: new Date('2023-03-03T09:15:00') },
//   { itemName: 'Sereal Buah Bayi', itemId: '49', buyerName: 'Sarah Howard', buyerId: 'B049', status: 'completed', buyingTime: new Date('2023-03-04T14:45:00') },
//   { itemName: 'Botol Susu Anti Kolik', itemId: '50', buyerName: 'Daniel Ward', buyerId: 'B050', status: 'cancelled', buyingTime: new Date('2023-03-05T11:20:00') }
// ];


// export const dummySellerCarts : IOrder[] = [
//   {
//     orderId: "AAAA",
//     orderStatus: "INPROCESS",
//     totalPrice: 9000,
//     cartList: [
//       {
//         buyerName: "buyer6",
//         cartId: "071ab0aa-a8e8-47f4-b617-cafd34e63ed3",
//         item: {
//           category: "CLOTHES",
//           id: "f33827e5-113f-4cf6-8b55-114725d57a58",
//           name: "SAMUSL",
//           price: 9990,
//           thumbnail: "media\\1721558812890.png"
//         },
//         status: "UNPAID",
//         quantity: 1
//       },
//       {
//         buyerName: "buyer6",
//         cartId: "a0e77214-c14f-4344-af1f-2b4271a55635",
//         item: {
//           category: "CLOTHES",
//           id: "a1a0421f-7d84-41e2-bede-f06d83659649",
//           name: "Ikhsan",
//           price: 50000,
//           thumbnail: "media\\1721490809635.jpeg"
//         },
//         status: "INPROCESS",
//         quantity: 2
//       },
//       {
//         buyerName: "buyer6",
//         cartId: "d9786c91-9812-49d1-bbaf-8f90e0f4968a",
//         item: {
//           category: "CLOTHES",
//           id: "750bbfc0-24e5-4819-95ae-c9514b31ea53",
//           name: "asd",
//           price: 1000,
//           thumbnail: "media\\1721469856530.png"
//         },
//         status: "INPROCESS",
//         quantity: 1
//       },
//       {
//         buyerName: "buyer6",
//         cartId: "dc21d7af-4913-415d-97dc-13b89b097c3f",
//         item: {
//           category: "ACCESSORIES",
//           id: "1ba09aaa-cabf-48c5-8b4a-67ab0116d164",
//           name: "ikhsan",
//           price: 120000,
//           thumbnail: ""
//         },
//         status: "INPROCESS",
//         quantity: 2
//       }
//     ]
//   },
//   {
//     orderId: "BBBB",
//     orderStatus: "COMPLETED",
//     totalPrice: 9000,
//     cartList: [
//       {
//         buyerName: "ucup",
//         cartId: "a0e77214-c14f-4344-af1f-2b4271a55635",
//         item: {
//           category: "CLOTHES",
//           id: "a1a0421f-7d84-41e2-bede-f06d83659649",
//           name: "Ikhsan",
//           price: 50000,
//           thumbnail: "media\\1721490809635.jpeg"
//         },
//         status: "COMPLETED",
//         quantity: 2
//       },
//       {
//         buyerName: "ucup",
//         cartId: "d9786c91-9812-49d1-bbaf-8f90e0f4968a",
//         item: {
//           category: "CLOTHES",
//           id: "750bbfc0-24e5-4819-95ae-c9514b31ea53",
//           name: "asd",
//           price: 1000,
//           thumbnail: "media\\1721469856530.png"
//         },
//         status: "COMPLETED",
//         quantity: 1
//       },
//       {
//         buyerName: "ucup",
//         cartId: "dc21d7af-4913-415d-97dc-13b89b097c3f",
//         item: {
//           category: "ACCESSORIES",
//           id: "1ba09aaa-cabf-48c5-8b4a-67ab0116d164",
//           name: "ikhsan",
//           price: 120000,
//           thumbnail: ""
//         },
//         status: "COMPLETED",
//         quantity: 2
//       }
//     ]
//   },
// ];
