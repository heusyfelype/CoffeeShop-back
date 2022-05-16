import { ObjectId } from 'mongodb';
import { database } from '../mongoDB.js';

export async function findOneProductController(req, res) {
    const productID = req.headers.product_id;

    try {

        const findProduct = await database.collection('products').findOne({_id: new ObjectId(productID)});
        if (!findProduct) {

            return res.status(422).send("Não foi possível encontrar o produto na loja")
        }

        return res.status(200).send(findProduct);

    } catch (e) {
        return res.send(e)
    }

} 