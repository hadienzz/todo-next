const { MongoClient } = require("mongodb");

const clientPromise = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI).connect()

export default clientPromise