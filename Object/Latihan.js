var mhs = {
    nama : 'Yayang Setiyawan',
    umur : 20,
    ips : [3.00,2.50,3.20],
    alamat : {
        jalan : 'Projosumarto',
        kota : 'Tegal',
        provinsi : 'JawaTengah'
    }
}
console.log(mhs);


// var mahasiswa = {
//     nama : 'Yayang Setiyawan',
//     umur : 20,
//     jurusan : 'teknik Informatika',
//     alamat :'Projosumarto',
// }

function buatObjectMahsiswa(nama,umur,nim,alamat) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.nim = nim;
    mhs.alamat = alamat

    return mhs
}

var mahasiswa1 = buatObjectMahsiswa('yayangsetiyawan',20,18090045,'tegal');
console.log(mahasiswa1);

function Mahasisawa(nama,alamat,nim,jurusan){
    this.nama = nama,
    this.alamat =alamat,
    this.nim = nim,
    this.jurusan= jurusan
}
var mhs1 = new Mahasisawa('yayang','mindaka','18090045','Teknik Informatika')
console.log(mhs1);