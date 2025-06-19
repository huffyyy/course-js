// Core Module
// File System
const fs = require("node:fs");
// console.log(fs);

// menuliskan string ke file(synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "hello world secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file(asynchronous)
// fs.writeFile("data/test.txt", "hello world secara asynchronous", (e) => {
//   console.log(e);
// });

// Membaca isi file(synchronous)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// mebaca isi file (asynchronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("masukan no HP anda : ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync(`data/contacts.json`, `utf-8`);
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("terimakasih sudah memasukan data");

    rl.close();
  });
});
