const dbConnect = require("./mongodb");
const insert =async ()=>{
    const db = await dbConnect();
    const result = await db.insert(
       [
            {name:'Narzo A50',brand:'Redmi',price:250,category:'mobile'},
            {name:'Narzo S30',brand:'Redmi',price:250,category:'mobile'},
            {name:'A50s',brand:'Vivo',price:250,category:'mobile'},
        ]
    );
  if(result.acknowledged){
    console.log("data inserted")
  }
}
insert();