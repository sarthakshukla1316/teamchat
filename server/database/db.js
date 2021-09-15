import mongoose from 'mongoose';



const Connection = async ( username, password) => {
    const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.5azv2.mongodb.net:27017,chatapp-shard-00-01.5azv2.mongodb.net:27017,chatapp-shard-00-02.5azv2.mongodb.net:27017/WHATSAPP?ssl=true&replicaSet=atlas-l9nta7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error while connecting database', error);
    }
    
}


export default Connection;