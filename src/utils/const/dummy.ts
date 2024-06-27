import { ICatalogCard } from "../../pages/home/Home-CatalogCard.component";
import dummy1 from "../../assets/images/dummy1.png";
import dummy2 from "../../assets/images/dummy2.jpeg";
import dummy3 from "../../assets/images/dummy3.jpeg";
import dummy4 from "../../assets/images/dummy4.png";
import dummy5 from "../../assets/images/dummy5.jpg";
import dummy6 from "../../assets/images/dummy6.jpg";
import dummy7 from "../../assets/images/dummy7.jpg";



export const dummyCatalogData: ICatalogCard[] = [
  {
    id:"1", 
    itemName: 'Baju Bayi Lengan Panjang',
    price: 75000,
    image: dummy1,
    isAvailable: true,
    category: 'pakaian',
    soldCount: 150,
    description: "tes123"
  },
  {
    id:"2", 
    itemName: 'Makanan Bayi Organik',
    price: 55000,
    image: dummy2,
    isAvailable: true,
    category: 'makanan & minuman',
    soldCount: 200,
    description: "tes123"
  },
  {
    id:"3", 
    itemName: 'Alat Sterilisasi Botol',
    price: 300000,
    image: dummy3,
    isAvailable: false,
    category: 'alat bayi',
    soldCount: 75,
    description: "tes123"
  },
  {
    id:"4", 
    itemName: 'Topi Bayi',
    price: 25000,
    image: dummy4,
    isAvailable: true,
    category: 'pakaian',
    soldCount: 180,
    description: "tes123"
  },
  {
    id:"5", 
    itemName: 'Susu Formula Bayi',
    price: 120000,
    image: dummy5,
    isAvailable: false,
    category: 'makanan & minuman',
    soldCount: 220,
    description: "tes123"
  },
  {
    id:"6", 
    itemName: 'Gendongan Bayi',
    price: 600000,
    image: dummy6,
    isAvailable: true,
    category: 'alat bayi',
    soldCount: 130,
    description: "tes123"
  },
  {
    id:"7", 
    itemName: 'Celana Bayi Pendek',
    price: 45000,
    image: dummy7,
    isAvailable: true,
    category: 'pakaian',
    soldCount: 160,
    description: "tes123"
  },
  {
    id:"8", 
    itemName: 'Biskuit Bayi',
    price: 30000,
    image: dummy3,
    isAvailable: true,
    category: 'makanan & minuman',
    soldCount: 140,
    description: "tes123"
  },
  {
    id:"9", 
    itemName: 'Tempat Penyimpanan Susu',
    price: 180000,
    image: dummy1,
    isAvailable: false,
    category: 'alat bayi',
    soldCount: 90,
    description: "tes123"
  }
];