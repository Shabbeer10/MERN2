const express =  require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("this is your get request response")
})

app.listen(8000, (req, res)=>{
    console.log(`Server is running on http://localhost:8000`);
});