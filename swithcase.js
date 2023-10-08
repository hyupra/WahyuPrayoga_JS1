let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Minggu";
        break;
    case 2:
        namaHari = "Senin";
        break;
    case 3:
        namaHari = "Selasa";
        break;
    case 4:
        namaHari = "Rabu";
        break;
    case 5:
        namaHari = "Kamis";
        break;
    case 6:
        namaHari = "Jumat";
        break;
    case 7:
        namaHari = "Sabtu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah " + namaHari);
