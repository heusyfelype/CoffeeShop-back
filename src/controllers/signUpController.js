import bcrypt from 'bcrypt';
import { database } from '../mongoDB.js';

export async function signUpController(req, res) {
    const user = req.body;

    try {

        const findUser = await database.collection('users').findOne({ email: user.email });
        if (findUser) {

            return res.status(422).send("Email já em uso")
        }

        user.password = bcrypt.hashSync(user.password, 10)
        delete user.confirm_password
        await database.collection('users').insertOne(user);

        return res.sendStatus(200)

    } catch (e) {
       return res.send(e)
    }

} 