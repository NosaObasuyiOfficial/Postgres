import {pool} from '../config/db'

const drop_table_query = `DROP TABLE information`

const dropped_table = async()=> {
    await pool.query(drop_table_query).then(() => {
        console.log('Your table has been dropped')
    })

}
dropped_table()