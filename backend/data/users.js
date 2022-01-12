import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Tehaunui',
    email: 'admin@eshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ali',
    email: 'ali@swen.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
