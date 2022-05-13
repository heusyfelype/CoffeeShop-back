import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { database } from '../mongoDB.js';

export async function userLogin(req, res) {

    const { email, password } = req.body;

    try {

        const user = await database.collection('users').findOne({ email });

        if (!user) {

            console.log(user);
            return res.status(404).send('User not found!');

        }

        if (bcrypt.compareSync(password, user.password)) {

            const token = v4();
            await database.collection('sessions').insertOne({

                token: token,
                userId: user._id

            });

            const userValidation = {token, userId: user._id};

            return res.send(userValidation);

        }

        res.sendStatus(401);
    } catch (e) {
        return res.send(e)
    }

}