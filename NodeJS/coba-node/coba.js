// sycnchronus

// const getUserSync = (id) => {
//   // let nama = "";
//   // if (id === 1) {
//   //   nama = "Husnul";
//   // } else {
//   //   nama = "Fikri";
//   // }
//   // return { id, nama };
//   const nama = id === 1 ? "Husnul" : "Fikri";
//   return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World";
// console.log(halo);

// asynchronous

const getUser = (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Husnul" : "Fikri";
    cb({ id, nama });
  }, time);
};

const userSatu = getUser(1, (hasil) => {
  console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = "hello world";
console.log("selesai");
