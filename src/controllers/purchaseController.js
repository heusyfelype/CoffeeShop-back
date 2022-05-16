import { database } from '../mongoDB.js';

export async function purchaseController(req, res) {

    const purchase = req.body

    try {

        const postPurchase = await database.collection('purchases').insertOnde(purchase);
        
        return res.status(200).send("Compra efetuada com sucesso")

    } catch (e) {
       return res.send(e)
    }

} 