
import * as dotenv from 'dotenv'
import express from 'express'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import{fileURLToPath} from 'url'
import {dirname} from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
nunjucks.configure('./public/views', {
	autoescape: true,
	express: app
});
var data
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
			vice : req.body.vice,
			age: req.body.age,
	}


	res.render('submit.html',data)
})


app.listen(port,() => {
})
