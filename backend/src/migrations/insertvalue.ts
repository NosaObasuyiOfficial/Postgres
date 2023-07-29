import {pool} from '../config/db'

const value_insert_Query = `
INSERT INTO info (firstname, lastname, username, email, phone_number, password) VALUES ('Nosa', 'Obasuyi', 'Nosaboy', 'nosamudiana@gmail.com', '08108505829', 'JesusIloveYou')
`

const insert_value = async() => {
    await pool.query(value_insert_Query).then(() => {
        console.log('Values has been inserted')
    })
}
insert_value()