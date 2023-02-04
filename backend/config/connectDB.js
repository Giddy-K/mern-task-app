const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        mongoose.set('strictQuery',true);
        const connect = await mongoose.connect(process.env.MONGO_URI)
    
        console.log(`MongoDB Connected`)
    }catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;

//Alternative option to connect to the server

// const startServer = async () => {
//     try {
//       await connectDB();
//       app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//       });
  
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   startServer();