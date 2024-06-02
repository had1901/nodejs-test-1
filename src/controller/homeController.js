const connection = require('../config/database')

const getHomePage = (req, res) => {
    res.render('home.ejs')

}
const getAboutPage = (req, res) => {
    
    return res.render('contact.ejs')
} 

const postCreatePage = (req, res) => {
    console.log('request=', req.body)
    let { email, name, city } = req.body
    // Using placeholders
    connection.query(
        `INSERT INTO Users (email, name, city) 
            VALUES (?, ?, ?)`, 
            [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('ok')
            return res.render('create.ejs')

        }
    );
} 

module.exports = {
    getHomePage,
    getAboutPage,
    postCreatePage,
}
