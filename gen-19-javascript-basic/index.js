function luasPersegi(sisi) {
    return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function luasLingkaran(jariJari) {
    return Math.PI * Math.pow(jariJari, 2);
}

// Contoh penggunaan untuk setiap fungsi
var sisiPersegi = 5;
var panjangPersegiPanjang = 8;
var lebarPersegiPanjang = 6;
var alasSegitiga = 10;
var tinggiSegitiga = 7;
var jariJariLingkaran = 4;

console.log("Luas Persegi: " + luasPersegi(sisiPersegi));
console.log("Luas Persegi Panjang: " + luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log("Luas Segitiga: " + luasSegitiga(alasSegitiga, tinggiSegitiga));
console.log("Luas Lingkaran: " + luasLingkaran(jariJariLingkaran));