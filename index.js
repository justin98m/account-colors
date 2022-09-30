
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const nunjucks = require('nunjucks');
const app = express();
app.use(cookieParser());
//reads in post data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
//Prebuilt SQL Functions
//const con = require('./connect.js');
//const start= require('./runsql.js')
//tell nunjucks where to find njk/html files
nunjucks.configure('./public/views', {
	autoescape: true,
	express: app
});

const oneHour = 1000 * 60 * 60;
app.use(sessions({
	//used to hash? the session
	secret: process.env.SECRET,
	saveUninitialized: true,
	cookie: {maxAge: oneHour},
	resave: false
}))

let session;

app.get('/',(req,res) => {
	session = req.session;
	//redirect to profile is user id is defined
	res.render('home.html',	data = {
		layout:'layout.html',
		css: 'home.css'
	})
})
app.get('/profile',(req,res) => {
	//ask db for userid data
	console.log('Profile Signin');
	res.redirect('/');
	//render page with userid data
});
app.post('/submit',(req,res) =>{
	let data = {
			layout: 'layout.html',
			username : req.body.username,
			password : req.body.password,
			//1 val will be set the, other will be undefined
			submitType : req.body.login || req.body.createAccount
	}
	if(data.submitType === 'createAccount'){
		console.log('createAccount')
		//check if username already exist
			//if so go back to home indicating such
			//if not create the user in db with default attributes
			//create session with user id from db
			//redirect to profile
	} else if(data.submitType === 'login'){
		//check if credentials are valid
			//if not go back to home page and tell user
			//if valid
				//get user id
				//add to session
			//redirect to profile
		res.redirect('/profile');
	} else{
		//error
		//tell user there was an unknown error 
	}

})
app.post('/setColor',(req,res)=>{
  let data = {
    layout: 'layout.html',
    color: req.body.color,
  }
  res.render('profile.html',data);
})


app.listen(port,() => {
})
