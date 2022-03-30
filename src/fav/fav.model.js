import { MongoClient } from 'mongodb'






const uri =`mongodb+srv://albahd:${process.env.DB_PW}@cluster0.klj5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const client = new MongoClient(uri);
const DB_NAME = 'project_final';
const COLLECTION_NAME = 'fav';


export const createFav = async (fav) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const FavsCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
       return await FavsCol.insertOne(fav);// paso 9 
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const retrieveFav = async (email) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const FavsCol = db.collection(COLLECTION_NAME); // paso 
        const opt = {
            projection: { _id:0 }
        }
    
        // a partir de aqui ya puedo hacer operaciones con la collection
        const Favs = await FavsCol.find({email}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        console.log(Favs)
        return Favs;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};



export const deleteFav = async (title) => {
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const favs = db.collection(COLLECTION_NAME);
        const query = { title };
    
        return await favs.deleteOne(query);
    } catch (err) {
        console.error(err);
    } finally {
       return"delete"
    }
}
