//Steps: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

const {MongoClient} = require('mongodb');
const dotenv = require('dotenv')
dotenv.config()

const client = new MongoClient(process.env.CONNECTIONSTRING)


async function main(){
    await client.connect()
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
}



main()