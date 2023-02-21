const express = require('express');
const { sendMail } = require('../helpers/utils');
const router = express.Router();


router.post('/send', (req, res) => {
  const asunto = `Portfolio App: ${req.body.asunto}`
  const mensaje = `
  Hola Dámaris, desde tu APP PORFOLIO te han enviado una notificación de contacto:
  nombre:${req.body.nombre} quiere contactar contigo,\n  
  mensaje:${req.body.mensaje}\n  
  email:${req.body.email}\n
  `

  let email = process.env.EMAIL_USER;
  sendMail(email, asunto, mensaje, (error, resultado) => {
    if (error) res.json(error);
    res.json({ 'success': 'Su mensaje ha sido enviado' })
  });

});





// try {
//   const { emailContact } = req.params;
//   const { textContact } = req.params;
//   const { nameContact } = req.params;
//   // const { subjectContact } = req.params;

//   const subject1 = `PortfolioAPP notificación de contacto: ${subjectContact} de  ${nameContact}`;
//   const text1 = `${nameContact} quiere contactar contigo`;
//   const notification1 = `<h2>Hola Dámaris</h2><p>Te han enviado desde tu web(App Portfolio) una notificacion de contacto.</p><p>Persona de contacto: ${nameContact}</p><p>Notificacion:</p><p>${textContact}</p><p>Metodo de Contacto: ${emailContact}</p>`;

//   const subject2 = `Notificación recibida del portfolio de  Dámaris Raboso`
//   const text2 = `Respuesta automática de contacto`;
//   const notification2 = `Hola ${nameContact}. Esto es una respuesta automática, en breve me pondré en contacto con usted, muchas gracias y un saludo.`
//   const mail = sendEmail(subject1, text1, notification1, emailContact);
//   sendEmail(subject2, text2, notification2, emailContact)

//   res.json(mail);

// } catch (error) {
//   res.json(error);
// }
// })


module.exports = router;
