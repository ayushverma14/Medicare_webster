const exp=require('express');
const app=exp();
const ejs=require('ejs');
const bp=require('body-parser');
const mongoose=require('mongoose');
const { MongoParseError } = require('mongodb');
app.set('view engine','ejs');
app.use(bp.urlencoded({extended:true}));
app.use(exp.static("public"));
mongoose.connect("mongodb+srv://Av_1411:papa123@cluster0.ksxek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const register=new mongoose.Schema(
    {
        Name:
        {
            type:String,
            required:true,
        },
        password:
        {
            type:String,
            required:true,


        },
        Designation:
        {
            type:String,
            required:true,
        },
        Mobile:{
            type:Number,
            required:true,},

        Slots :{
            _6_9:Number,
            _9_12:Number,

        }

    }
);
const mod=new mongoose.model("Details",register);
app.get('/',function(req,res)
{
    res.sendFile(__dirname+'/2nd_Page.html');

})
app.get('/search',function(req,res)
{
    res.render('index',{nam:name});
});
varname=[];
app.post('/Doctors.html',function(req,res)
{

var name=req.body.search;
console.log(name);
mod.find({"Designation":name},function(err,doc)
{
    if(err)
    throw err;
    else
    {
        
  
    res.render('index',{nam:doc});
    }
}
)

})

app.post('/resume.ejs',function(req,res)
{
var name=req.body.bb;
console.log(req.body.bb);
mod.find({"Name":name},(err,docs)=>
{
    if(err)
    throw err;
    else
    {
        console.log(docs.length);
        var ph=docs[0].Mobile;
        console.log(ph);
        res.render('resume',{name:name,addresss:"344",Qualification:docs[0].Designation,Phone:""+docs[0].Mobile});
    }
});
    
})
app.listen('3000',function(req,res)
{
    console.log('started on server 3000');
});