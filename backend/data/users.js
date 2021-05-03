import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Steve Rogers',
		email: 'steve@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Captain America',
		email: 'cap@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
