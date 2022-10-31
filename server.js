const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const http = require('http');
const { urlencoded } = require('body-parser');
//const { api } = require('./config');
//const environment = require('./src/environments/environment.ts');
// const Heroku = require('heroku-client');
// const { response } = require('express');
// const heroku = new Heroku({ token: process.env.API_TOKEN });

//let api = 'http://smovtekllc-web.herokuapp.com/'

const PORT = process.env.PORT || 3000;

app.use(cors());

var corsOptions = {
  origin: 'https://smovtekllc-web.herokuapp.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(express.urlencoded({
   extended: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.all('/*', function (req, res, next) {
   //Enable Cors
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control_Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
   res.header("Access-Control-Headers", "Origin, X-Requested-With, Content-Type, x-client-key, x-client-token, x-client-secret, Authorization, Accept");
      next();
});

// heroku.request({
//    method: 'GET',
//    path: 'https://api.heroku.com/apps/smovtekllc-web/config-vars',
//    headers: {
//       "Accept": "application/vnd.heroku+json; version=7.6",
//       "Authorization": "Bearer "+process.env.API_TOKEN
//    },
//       parseJSON: true
// }).then(response => {
//    API_KEY = response.API_KEY;
// });

// app.get('/heroku-env', function(req, res){
//    res.json(TOKEN);
// });

// app.post('/ping', function (req, res) {
//    res.send(req.body)
// })
// app.post('/exec', (req, res) => {
//    let transporter = nodemailer.createTransport({
//    host: 'smtp.gmail.com',
//    port: 465,
//    secure: true,
//    auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASS,
//    },
// });
// let mailOptions = {
//    Fullname: req.body.Fullname, // sender address
//    email: req.body.email, // list of receivers
//    Serviceneeded: req.body.Serviceneeded, // Subject line
//    clientType: req.body.clientType, // plain text body
//    message: req.body.message,
//    // html: '<b>NodeJS Email Tutorial</b>' // html body
// };
// transporter.sendMail(mailOptions, (error, info) => {
//    if (error) {
//        return console.log(error);
//    }
//    transporter.verify().then(console.log).catch(console.error);
//    // console.log('Message %s sent: %s', info.messageId, info.response);
//    //     res.render('index');
//    });
// });

app.route('/api/contact/exec', urlencoded).post((req, res) => {
   console.log(req.body);
   //console.log(req.body.Fullname, req.body.Email, req.body.Message);
   res.send(req.body)

   let mailOptions, smtpTrans;
   smtpTrans = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls: {
         ciphers: 'SSLv3'
      },
      auth: {
         user: 'info@smovtek.com',
         pass: 'DevOps@231'
      }
   });
   mailOptions = {
      from: req.body.Fullname,
      to: 'info@smovtek.com',
      subject: "New message from Smovtek Web Contact Form",
      text: `${req.body.Fullname} <${req.body.Email}> \n ${req.body.Message}`,
   };
   smtpTrans.sendMail(mailOptions);

});

app.route('/api/hire/exec', urlencoded).post((req, res) => {
   console.log(req.body);
   //console.log(req.body.Fullname, req.body.Email, req.body.Message);
   res.send(req.body)

   let mailOptions, smtpTrans;
   smtpTrans = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls: {
         ciphers: 'SSLv3'
      },
      auth: {
         user: 'info@smovtek.com',
         pass: 'DevOps@231'
      }
   });
   mailOptions = {
      from: req.body.Fullname,
      to: 'info@smovtek.com',
      subject: "Hire Request",
      text: `${req.body.Fullname} <${req.body.Email}> ${req.body.Serviceneeded} \n ${req.body.clientType} \n \n ${req.body.Message}`,
   };
   smtpTrans.sendMail(mailOptions);

});


app.route('/api/hireresponse').get((req, res) => {
  res.render('/hireresponse')
});

app.route('/api/contactresposne').get((req, res) => {
   //console.log(req.body.Fullname, req.body.email, req.body.message);
  res.render('/contactresposne')
});

// app.get('*', function(req, res) {
//    res.render('index.html');
// });

app.use(express.static(path.join(__dirname, '/dist/smovwebplatform')));

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '/dist/smovwebplatform/index.html'));
});

// app.get('/*', (req, res) => {
//    res.sendFile(path.join(__dirname, '../Backend/dist/smovwebplatform/index.html'));
// });



app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
