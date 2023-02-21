const nodeMailer = require('nodemailer');


// const sendEmail = (to, subject, message,  callback) => {
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: process.env.MAIL_USER,
//             pass: process.env.MAIL_PASS,
//         },
//     });
//     const mailDate = {
//         from: process.env.MAIL_USER,
//         subject,
//         to,
//         text: message,
//         // html: notification
//     };
//     // const mailDate2 = {
//     //     from: emailContact,
//     //     to,
//     //     subject,
//     //     text: message,
//     //     html: notification
//     // }
//     transporter.sendEmail(mailDate, callback);
//     // transporter.sendEmail(mailDate2, callback)

// }

// module.exports = {
//     sendEmail
// }

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