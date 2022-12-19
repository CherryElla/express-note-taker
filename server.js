const express = require("express")
const fs = require("fs")
const path = require("path")
const notes = require("./Develop/db/db.json")
const port = 3001

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))


// Get requests
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "Develop", "public", "notes.html"))
})

app.get("/api/notes", (req, res) => {
    return res.json(notes)
})

app.get("*",(req,res) => {
    let indexPath = path.join(__dirname, "Develop", "public", "index.html")
    let reqPath = path.join(__dirname, "Develop", "public", req.path)
    if (fs.existsSync(reqPath)) {
        res.sendFile(reqPath)
    } else {
        res.sendFile(indexPath)
    }
})

// POST requests

app.post("/api/notes", (req, res) => {
    console.info(`${req.method} request received to add a note`)
})




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})