const User = require("../models/usermodel");
const register = async(req, res) => {

    const { username, email, dob, role, location, password } = req.body;
    try {

        const userPresent = await User.findOne({ email })
        if (userPresent) {
            res.send({ messege: "User is already" });
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            username,
            email,
            dob,
            role,
            location,
            password: hashPassword
        })

        const saveUser = await newUser.save()

        res.send("done ", saveUser);


    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async(req, res) => {

    const { username, password } = req.body;
    try {

        const userPresent = await User.findOne({ username })
        if (!userPresent) {
            res.send({ messege: "User not registered yet." });
        }
        const validPassword = await bcrypt.compare(password, userPresent.password);
        if (!validPassword) {
            res.send("password is  ")
        }
        const token = jwt.sign({ userId: userPresent._id, email: userPresent.email }, )



    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register
}