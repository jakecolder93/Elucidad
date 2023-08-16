//Steps: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

const {MongoClient} = require('mongodb');
const dotenv = require('dotenv')
dotenv.config()

async function main(){
    const client = new MongoClient(process.env.CONNECTIONSTRING)

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//Test function to test we are successfully connected to cluster with dummy data
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);