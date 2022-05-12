import { database } from '../mongoDB.js';

export async function inputProduct(req, res) {
    const product = req.body;

    try {

        const inputProduct = await database.collection('products').insertOne(product);
        if (!inputProduct) {

            return res.status(400).send("Não foi possível inserir o produto na loja")
        }

        return res.status(200).send("Produto adicionado à loja com sucesso!")
    } catch (e) {
        return res.send(e)
    }

} 