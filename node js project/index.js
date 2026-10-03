const express = require("express");

const app = express();
app.get("/hello" , (req , res) => {
    res.send("HELLO");
} )

app.get("/hi" ,  (req , res) =>{
    res.send("hiiiiiiiii")
} )


app.listen(3000 , () => {
    console.log("I am listening to post 3000");
} )


// post
app.post("/test"  , (req , res) => {
    res.send("hello TEST.......")
})

// put
app.put( "/put" , (req , res) => {
    res.send("hello put........")
})

// delete
app.delete( "/delete" , (req , res) => {
    res.send("hello delete.........")
})


// node index.js
// npx nodemon index.js