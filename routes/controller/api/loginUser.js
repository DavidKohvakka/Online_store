const User = require('../../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    
    console.log(req.body.username)
    const user = await User.find({username: req.body.username});
    if (user[0] == null) {
        return res.status(400).render('pages/login', {message: 'Cannot find user'})
    }
    console.log(user)
    try{
        console.log(user[0].password)
        if(await bcrypt.compare(req.body.password, user[0].password)){
            res.send('Succes')
        } else {
            res.send("Not allowed")
        }
        console.log("end")

        
    }
    catch{
        res.status(500).send("Something gone wrong")
    }

}