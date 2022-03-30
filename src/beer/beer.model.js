import { MongoClient } from 'mongodb'

const uri =`mongodb+srv://albahd:${process.env.DB_PW}@cluster0.klj5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Create a new MongoClient
const client = new MongoClient(uri);
const DB_NAME = 'project_final';
const COLLECTION_NAME = 'beer';



export const createBeer = async (beer) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const beersCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
       return await beersCol.insertOne(beer);// paso 9 
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const retrieveBeers = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const beersCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
    
        // a partir de aqui ya puedo hacer operaciones con la collection
        const beers = await beersCol.find({}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        console.log(beers)
        return beers;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};


