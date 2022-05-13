import { database } from '../mongoDB.js';

export async function sendProductsController(req, res) {

    try {

        const findProductsCategory = await database.collection('products').find({category : req.headers.category}).toArray();
        if (findProductsCategory.length === 0) {

            return res.status(422).send("Categoria inexistente")
        }

        return res.status(200).send(findProductsCategory)

    } catch (e) {
       return res.send(e)
    }

} 