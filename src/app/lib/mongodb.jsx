const uri = process.env.PUBLIC_NEXT_MONGODB_URI
const option = {}

let client
let clientPromise

if (!process.env.PUBLIC_NEXT_MONGODB_URI) {
    throw new Error('Failed to add MongoDB URI')
}