const express=require('express');
const app=express();
const PORT=3001;
app.use(express.json());

const studenti=[
    {id:1, ime:"Ana"},
    {id:2,ime:"marko"},
    {id:3,ime:"Pero"}
];

app.get("/studenti",(req,res)=>
{
    res.json(studenti);
});

app.get("/studenti/:id",(req,res)=>
{
    const id=parseInt(req.params.id);
    const student=studenti.find(s=>s.id===id);
    if(student){
        res.json(student);
    }
    else{
        res.status(404).json({greska:"student nije pronadjen"});
    }
}
);

app.listen(PORT, ()=>
{
    console.log(`server radi na portu ${PORT}`);
});