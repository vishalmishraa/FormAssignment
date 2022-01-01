const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 8888;


app.use(express.static('public'));
app.use(express.json());





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index,html');
});


app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'rform98@gmail.com',
            pass: '12345@qwert'
        }
    })

    const mailOptions = {
        form: req.body.Emial,
        to: 'rform98@gmail.com',
        subject: `Message from ${ req.body.Name } for registration.`,
        text: `User ID : ${ req.body.userid } 
            Email : ${ req.body.Email }
            Name : ${ req.body.Name }
            Address : ${ req.body.Address }
            Country : ${ req.body.Country }
            Zip Code : ${ req.body.ZipCode }
            Gender : ${ req.body.Gender }
            Language : ${ req.body.Language },
            `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("Something went wrong!!");
        } else {
            console.log("email Sent" + info.response);
            res.sned("From submited");
        }
    })



})




app.listen(PORT, () => {
    console.log(`Its running on ${ PORT }`);
})