const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


app.use(cors());


app.use(bodyParser.json());
app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());

app.all('/*', function (req, res, next) {
   //Enable Cors
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control_Allow-Methods", "GET, HEAD, OPTION, POST, PUT");
   res.header("Access-Control-Headers", "Origin, X-Requested-With, Content-Type, x-client-key, x-client-token, x-client-secret, Authorization, Accept");
      next();
});

// app.post('/ping', function (req, res) {
//    res.send(req.body)
// })

app.post('/exec', (req, res) => {
   console.log(req.body);
   console.log(req.body.Fullname, req.body.email, req.body.message);
   res.send(req.body)
});

app.get('/hirerespone', function (req, res) {
   console.log(req.body.Fullname, req.body.email, req.body.message);
   res.status('Hiring Request Received')
})

// app.get('*', function(req, res) {
//    res.render('index.html');
// });

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   auth: {
      user: 'testemailserver15@gmail.com',
      pass: 'smovtek@231',
   },
});
transporter.verify().then(console.log).catch(console.error);

app.use(express.static(path.join(__dirname, '/dist/smovwebplatform')));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '/dist/smovwebplatform/index.html'));
});

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../Backend/dist/smovwebplatform/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
   console.log('Backend Connected to Port 3000'); //Listening on port 8080
});