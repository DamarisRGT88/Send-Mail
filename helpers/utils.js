const nodeMailer = require('nodemailer');


const sendMail = (to, subject, message, emailContact, callback) => {
    const transporter = nodeMailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
    });

    const opciones = {
        from: process.env.EMAIL_USER,
        subject,
        to,
        text: message
    };

    const opcionesRes = {
        from: emailContact,
        subject,
        to,
        text: message
    };




    transporter.sendMail(opciones, callback);
    transporter.sendMail(opcionesRes, callback);

}

module.exports = {
    sendMail
}