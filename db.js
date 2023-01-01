const mongoose=require('mongoose')
const mongoURL='mongodb://localhost:27017/firstdb'

const connectToMong=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("conncted to mongo")
    })
}

module.exports =connectToMong;