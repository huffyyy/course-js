const yargs = require("yargs");
const {
  simpanContact,
  listContact,
  detailContac,
  deleteContact,
} = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "menambahkan contact baru",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "nomor handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.noHP, argv.email);
    },
  })
  .command({
    command: "list",
    describe: "menampilkan semua nama & no hp contact",
    handler() {
      listContact();
    },
  })
  .demandCommand();

//menampilkan detail sebuah contact
yargs
  .command({
    command: "detail",
    describe: "menampilkan detail sebuah contact berdasarkan nama",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      detailContact(argv.nama);
    },
  })
  .demandCommand();

// menghapus contact berdasarkan nama
yargs
  .command({
    command: "delete",
    describe: "menghapus  sebuah contact berdasarkan nama",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      deleteContact(argv.nama);
    },
  })
  .demandCommand();
yargs.parse();
