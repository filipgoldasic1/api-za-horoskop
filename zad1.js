const express=require('express');
const app=express();
const PORT=3000;

app.get("/api/pozdrav",(req,res)=>
{
    res.json({poruka:"hello world"});

});
app.listen(PORT, ()=>
{
    console.log(`server slusa na portu ${PORT}`);
}
);