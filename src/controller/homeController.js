const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById ,removeUserById} = require('../service/CRUD_Service')



const getHomePage = async (req, res) => {
    let result = await getAllUsers()
    return res.render('home.ejs', { listUsers: result })
}

const postCreatePage = (req, res) => {
    return res.render('create.ejs')
} 

const postUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('update.ejs', { userEdit : user })
} 

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`, 
        [email, name, city],
    )
    await res.send('Created successfully')

} 

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body
    const info = { id, email,  name, city }
    await updateUserById(info)
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit : user })
}

const postRemoveUser = async (req, res) => {
    const id = req.body.id
    await removeUserById(id)
    res.redirect('/')
}





module.exports = {
    getHomePage,
    postCreatePage,
    postUpdatePage,
    postUpdateUser,
    postCreateUser,
    postDeleteUser,
    postRemoveUser
}
