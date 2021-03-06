import express from 'express'

const app = express()


app.set("view engine", "pug")
app.set("views", __dirname + "/views")
console.log("hello")
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"))

const handleListen = () => console.log(`Listening on http://localhost:4300`)
app.listen(4300)
