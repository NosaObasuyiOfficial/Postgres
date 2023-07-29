import {pool} from '../config/db'

const display_table_query = `
SELECT * FROM info
`

const display_table = async() => {
    pool.query(display_table_query).then((result:any)=> {
        console.log(result.rows[0])
    })
}
display_table()