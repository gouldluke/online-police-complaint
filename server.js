var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');
    nodemailer = require('nodemailer');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    }
});

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
	      compile: compile
    }
));
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res) {
    res.render('index');
})

app.post('/email', function (req, res) {
    let mailOptions = {
        from: '"Euclid Police Complaint Test" <test@euclidpolicecomplaint.com>', // sender address
        to: 'taylorfloy.hoffman@gmail.com', // list of receivers
        subject: 'Look I got Email Working!!!', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    // res.send('send me an email plz');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
