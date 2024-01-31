const readline = require('readline');

const dataDiri = {
    nama: "Alvyano",
    umur: 22,
    pekerjaan: "Developer"
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function updateUser() {
    console.log("Objek Saat Ini:");
    console.log(dataDiri);

    rl.question("Masukkan nama baru: ", (nama) => {
        rl.question("Masukkan pekerjaan baru: ", (pekerjaan) => {
            dataDiri.nama = nama;
            dataDiri.pekerjaan = pekerjaan;
            console.log("\nObjek Setelah Perubahan:");
            console.log(dataDiri);
            rl.close();
        });
    });
}

updateUser();