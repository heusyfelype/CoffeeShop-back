import { ObjectId } from 'mongodb';
import { database } from '../mongoDB.js';

export async function allProductsInCartController(req, res) {
    const userId = req.headers.userid;
    console.log(userId)
    try{
        const allProductsInChart = await database.collection('cart').find({userId: userId}).toArray();
        return res.send(allProductsInChart)

    }catch (e){
        return res.send(e)
    }

}