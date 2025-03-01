const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    console.log('MongoDB connected')
}

export default connectDB