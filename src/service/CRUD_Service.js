
const connection = require('../config/database')


const getAllUsers = async () => {
    let [result, fields] = await connection.query('select * from Users')
    return result
}
const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`select * from Users where id = ?`, [userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}
const updateUserById = async (info) => {
    await connection.query(`
            UPDATE Users SET email= ?, name= ?, city= ? WHERE id = ?`, 
            [info.email, info.name, info.city, info.id])
}

const removeUserById = async (id) => {
    await connection.query(`delete from Users where id = ?`, [id],)
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    removeUserById
}