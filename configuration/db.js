const {MongoClient} = require("mongodb");

const _uri = 
"mongodb+srv://bestelot:123Abc@esss.e4bm3.mongodb.net/loginDatabase?retryWrites=true&w=majority"

const dbCon = (coll,cb)=>{
    MongoClient.connect(_uri)
    .then(async(client)=>{
        const db = client.db("loginDatabase").collection(coll);
    await cb(db);
    client.close();
    })
    .catch();
}

dbCon("movies", async(db)=>{
    const movie = await db.findOne();
    console.log(movie);
})

module.exports = dbCon;