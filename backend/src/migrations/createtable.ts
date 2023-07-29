import {pool} from '../config/db'

const table_created_Query = `
    CREATE TABLE info (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(225),
        lastname VARCHAR(225),
        username VARCHAR(225),
        email VARCHAR(225),
        phone_number VARCHAR(225),
        password VARCHAR(225)
    )
`

const table_create = async () => {
    try{
        await pool.query(table_created_Query).then(()=> {
            console.log('Your table has been created')
        })
    }catch(error){
        console.error('ERROR', error)
    }


}
table_create()

const table2_created_Query = `
    CREATE TABLE info (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(225),
        lastname VARCHAR(225),
        username VARCHAR(225),
        email VARCHAR(225),
        phone_number VARCHAR(225),
        password VARCHAR(225)
    )
`

const table2_create = async () => {
    try{
        await pool.query(table2_created_Query).then(()=> {
            console.log('Your second table has been created')
        })
    }catch(error){
        console.error('ERROR', error)
    }


}
table_create()