const express=require('express');
const app=express();
const PORT=3001;
app.use(express.json());

app.post("/api/ime",(req,res)=>
{
    const ime=req.body.ime;
    res.json({odgovor:`Dobro jutro, ${ime}`});
});

app.listen(PORT, ()=>
{
    console.log(`server slusa na portu ${PORT}`);
});