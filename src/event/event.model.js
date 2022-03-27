import { MongoClient } from 'mongodb'
const uri ='mongodb+srv://albahd:70584909w@cluster0.klj5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const client = new MongoClient(uri);
const DB_NAME = 'project_final';
const COLLECTION_NAME = 'event';


export const createEvent = async (event) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const EventsCol = db.collection(COLLECTION_NAME); // paso 8
        // 
       return await EventsCol.insertOne(event);// paso 9 
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const retrieveEvent = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DB_NAME); // paso 7
        const EventsCol = db.collection(COLLECTION_NAME); // 
        const opt = {
            projection: { _id:0 }
        }
    
        
        const Events = await EventsCol.find({}, opt).toArray(); 
        console.log(Events)
        return Events;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close();
    }
};
