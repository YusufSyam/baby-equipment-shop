import { format } from "date-fns";

const dayName = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu"
];

// Date ke yyyy-mm-dd
export function formatDateDetection(inputDate: Date) {
  const date = new Date(inputDate); // Membuat objek Date dari input tanggal
  const day = String(date.getDate()).padStart(2, "0"); // Mendapatkan tanggal (dd)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mendapatkan bulan (MM)
  const year = date.getFullYear(); // Mendapatkan tahun (YYYY)

  return `${year}-${month}-${day}`;
}

// yyyy-mm-dd ke Date
export function parseDateDetection(dateString: String) {
  const dateList = dateString?.split("-");
  const year = parseInt(dateList?.[0]);
  const month = parseInt(dateList?.[1]) - 1;
  const day = parseInt(dateList?.[2]);

  return new Date(year, month, day);
}

// Date ke 12 September 2001
export function formatDateNormal(inputDate: Date | null) {
  if(inputDate==null){
    return ''
  }

  return inputDate.toLocaleDateString("id", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// Date ke Rabu, 12 September 2001
export function formatDateNormalWithDayName(inputDate: Date) {
  return `${dayName[inputDate.getDay()]}, ${inputDate.toLocaleDateString("id", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  })}`;
}

// Date ke string dd mmm

export function formatDateToDDMMM(inputDate: Date) {
  const formattedDate = format(inputDate, "dd MMM");

  return formattedDate;
}

// Hitung jarak waktu
export function calculateTimeGap(detectionDateString: string, detectionTime: number): string {
  const detectionDate= new Date(detectionDateString)

   const totalDetik = Math.floor(detectionTime);
   const jam = Math.floor(totalDetik / 3600) % 24;
   const menit = Math.floor((totalDetik % 3600) / 60);

   const detectionDateTime = new Date(detectionDate.getFullYear(), detectionDate.getMonth(), detectionDate.getDate(), jam, menit);

   const selisihWaktu = new Date().getTime() - detectionDateTime.getTime();

   const selisihMenit = Math.floor(selisihWaktu / (1000 * 60));

    if (selisihMenit < 60) {
        return `${selisihMenit} menit`;
    } else if (selisihMenit < 24 * 60) {
        const selisihJam = Math.floor(selisihMenit / 60);
        return `${selisihJam} jam`;
    } else {
        const selisihHari = Math.floor(selisihMenit / (60 * 24));
        return `${selisihHari} hari`;
    }
}