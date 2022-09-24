
const dotenv = require('dotenv');
dotenv.config();
//Routing system
const express = require('express');
//middle ware man
const nunjucks = require('nunjucks');
const app = express();
//reads in post data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
//Prebuilt SQL Functions
//const con = require('./connect.js');
//const start= require('./runsql.js')
//turn req.body form data into readable and extractable information
//tell nunjucks where to find njk/html files
nunjucks.configure('./public/views', {
	autoescape: true,
	express: app
});

app.get('/',(req,res) => {
	res.render('home.html',	data = {
		layout:'layout.html',
		css: 'home.css'
	})
})

//Getting Post Data

app.post('/submit',(req,res) =>{
	let data = {
			layout: 'layout.html',
			username : req.body.username,
	}
  console.log(req.body.login);
  console.log(req.body.createAccount);
app.post('/setColor',(req,res)=>{
  let data = {
    layout: 'layout.html',
    color: req.body.color,
  }
  res.render('profile.html',data);

  
})


	res.render('profile.html',data)
})


app.listen(port,() => {
})
