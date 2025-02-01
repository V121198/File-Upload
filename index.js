const express=  require("express")
const ejs= require("ejs")
const path=require("path")
const multer= require("multer")


const app= express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Normal way of uploading the files, if want more control over file storage, use diskstorage
// const upload= multer({dest: "../File Upload/Uploads"})

// const file= upload.single("profileImage")


app.set("view engine","ejs")
app.set("views",path.resolve("../File Upload/View"))

app.get("/", (req, res)=>{
res.render("view")
})

app.post("/", (req, res)=>{
    const data= req.file;
    console.log(data)
    res.json(data)
})

app.listen(8080, ()=>{
    console.log("Server started at post 8080")
})