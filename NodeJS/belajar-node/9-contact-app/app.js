const yargs = require("yargs");
const { simpanContact } = require("./contacts");

yargs.command({
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
});

yargs.parse();
