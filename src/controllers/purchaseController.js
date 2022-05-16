import { ObjectId } from 'mongodb';
import { database } from '../mongoDB.js';

export async function purchaseController(req, res) {

    const purchase = req.body
    
    const userPurchase = {
        userId : new ObjectId(purchase[1].userId),
        items: purchase[0],
        addres: purchase[1]
    }

    try {

        const postPurchase = await database.collection('purchases').insertOne({ userPurchase });
        const deleteFromCart = await database.collection('cart').deleteMany({userId: userPurchase.userId} )
        
        return res.status(200).send("Compra efetuada com sucesso")

    } catch (e) {
       return res.send(e)
    }

} 