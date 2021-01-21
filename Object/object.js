//Object
let nama = {
    //Isi dari Sebuat Object
    namaDepan : "yayang",
    namaBelakang : "setiyawan"
};
console.log(nama)

let nama1 = {
    namaDepan:"yayang",
    namaBelakang: "setiyawan"
};
console.log(nama1.namaDepan);
console.log(nama1.namaBelakang);

let person ={
    nama:"YayangSetiyawan", umur:20
}
console.log("nama saya = " + person.nama + "\numur saya = " + person.umur);

//manipulasi value di dalam object
let obj = nama1["namaDepan1"]="setiyawan121221"
let obj1 = nama1.namaBelakang = "yayang setiyawan"
console.log(obj)
console.log(obj1)
//akhir  manipulasi value di dalam object

//memilih salah satu object
let object = {nama: person.nama}
console.log(object);