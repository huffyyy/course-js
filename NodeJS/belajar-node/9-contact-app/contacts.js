const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

const simpanContact = (nama, noHp, email) => {
  const contact = { nama, noHp, email };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("contact sudah terdaftar, gunakan nama lain")
    );
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("email tidak valid!"));
      return false;
    }
  }

  // cek no hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("nomor hp tidak valid!"));
    return false;
  }
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

  console.log(chalk.green.inverse.bold("Terima kasih sudah memasukkan data."));
};

module.exports = { simpanContact };
