const { response } = require("express");
const express =  require("express");
const dbConnect = require("./mongodb");
const mongoDb = require('mongodb');
const app = express();
app.use(express.json());




//                                     //   <<<<<<<<<<<<<<<<<<<< get >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/', async(req,resp)=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
});
//                                     // <<<<<<<<<<<<<<<<<<<<<<<<< post >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.post('/',async (req,resp)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)
});
//                                    //    <<<<<<<<<<<<<<<<<<< put >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// app.put('/',async (req,resp)=>{
//     console.log(req.body)
//    resp.send({result:"update"})
   
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.params.name},
//         { $set:req.body}
//         )
   
//     // resp.send({ status:"update"})
// });


//                                      //  <<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete >>>>>>>>>>>>>>>>>>>>>>>

// app.delete(("/:id",async(req,resp)=>{
//     console.log(req.params.id)
//     const data = await dbConnect();
//     const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
//     resp.send(result)
// }))

app.listen(27017)