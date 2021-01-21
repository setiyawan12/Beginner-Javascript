var mhs = ['yayang',
        'setiyawn',
        'arif',
        'dwi',
        'purnomo']
var angka = [1,2,3,4,5,6,7,8,9]
var alamat = ['mindaka','tangkil','tarub']
var umur = [20]

console.log(mhs);

for (var  i = 0 ; i<mhs.length; i++){
console.log(mhs[i]);
}
//menambah isi array
mhs.push('arif')
// panjang array
console.log(mhs.length);
//mengabungkan semua isi array menjadi string
console.log(mhs.join());
//membalikan isi array
console.log(mhs.reverse());
// mengurutkan sesua abjad
console.log(mhs.sort());
//angka
console.log(angka.sort());
console.log(angka.reverse());

//splice(indexAwal , Mau di hapus berapa , elementbaru1 ,elemenbaru2, ......)
let splice = ['yayang','felix','faqih','alif']
splice.splice(2, 0,'ade','padil');
console.log(splice);
// console.log(slice.join('-'));

// slice nilai awal sampai nilai akhir di tentukan
let slice = ['yayang','felix','faqih','alif']
let slice1 = slice.slice(2,4)
console.log(slice1);