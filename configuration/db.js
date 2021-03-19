const {MongoClient} = require("mongodb");

const _uri = 
"mongodb+srv://bestelot:123Abc@esss.e4bm3.mongodb.net/sample_mflix?retryWrites=true&w=majority"

const dbCon = (coll,cb)=>{
    MongoClient.connect(_uri)
    .then(async(client)=>{
        const db = client.db("sample_mflix").collection(coll);
    await cb(db);
    client.close();
    })

}


module.exports = dbCon;