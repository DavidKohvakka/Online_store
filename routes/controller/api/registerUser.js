const User = require('../../../model/user');
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    console.log(req.body.username)
    const user = await User.find({username: req.body.username});
    console.log(user)
    if (user[0]?.username) {
        console.log("exist")
        return res.status(401).render('pages/register', {message: "Username alredy exist"})
    }
    else {
        try{
            console.log("ksdfjöalkjs")
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log(hashedPassword)
            const user = new User({username: req.body.username, password: hashedPassword });
            user.save();
            res.status(201).render('pages/login')
        }
        catch{
            res.status(500).send("Something gone wrong")
        }
    }
}