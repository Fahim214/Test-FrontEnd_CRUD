import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "adi",
    email: "adi@gmail.com",
    password: bcrypt.hashSync("adi123", 10),
    isAdmin: false,
  },
  {
    name: "bayu",
    email: "bayu@gmail.com",
    password: bcrypt.hashSync("bayu123", 10),
    isAdmin: false,
  },
  {
    name: "fahmi",
    email: "fahmi@gmail.com",
    password: bcrypt.hashSync("fahmi", 10),
    isAdmin: false,
  },
];

export default users;
