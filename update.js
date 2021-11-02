const dbConnect = require("./mongodb");

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateData(
        { name: "Narzo A50" }, {
            $set: { name: "pro" }
        }
    );
    console.log(result)
}
updateData();