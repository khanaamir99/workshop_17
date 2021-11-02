// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FIRST API GET POST PUT DELETE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const dbConnect = require("./mongodb")
const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();

//  <<<<<<<<<<<<<<<<<<<<<<<<<     END  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<using mongoose>>>>>>>>>>>>>>>>>>>>>

// const mongoose = require("mongoose");


//   mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductsSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String,
//   });
//   const main = async () => {
//   const Product = mongoose.model("products", ProductsSchema);
//   let data = new Product({
//     name: "Note 10",
//     price: 700,
//     brand: "mi",
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// const updateInDB = async () => {
//   const Product = mongoose.model("products", ProductsSchema);
//   let data = await Product.updateOne(
//     { name: "mongo" },
//     {
//       $set: { price: 989, name: "mi5a" },
//     }
//   );
//   console.log(data);
// };

// const deleteInDB = async() =>{
//   const Product = mongoose.model("products", ProductsSchema);
//   let data = await Product.deleteOne({name:'m30'});
//   console.log(data);

// }
// const findInDB = async () =>{
//   const Product = mongoose.model("products", ProductsSchema);
//   let data = await Product.find({name: "m30"})
//   console.log(data);

// }
// findInDB();

                      // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





//   <<<<<<<<<<<<<<<<<<<find >>>>>>>>>>>>>>>>>>>>>>>
//   let data = await collection.find({name:"m30"}).toArray();
//   console.log(data);

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data)

//     })
// })

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");

// }

//  const http= require('http');
// const data = require("./data");
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();

// }).listen(5000);

// console.log("hlo");

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
