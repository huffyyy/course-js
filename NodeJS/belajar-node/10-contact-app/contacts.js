const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, noHp, email) => {
  const contact = { nama, noHp, email };
  const contacts = loadContact();

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

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar kontak : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.noHp);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (nama) => {
  const contact = loadContact();
  const newContacts = contact.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );
  if (contact.length === newContacts.length) {
    console.log(chalk.red.bold.inverse(`${nama} tidak ditemukan`));
    return false;
  }
  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts, null, 2));

  console.log(chalk.green.inverse.bold(`${nama} sudah berhasil dihapus`));
};
module.exports = { simpanContact, listContact, detailContact, deleteContact };
