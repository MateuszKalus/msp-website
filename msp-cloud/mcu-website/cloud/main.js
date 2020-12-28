require("dotenv").config();

const sgMail = require('@sendgrid/mail')

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", (request) => {

sgMail.setApiKey("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")
const msg = {
  to: 'sohorr@gmail.com', // Change to your recipient
  from: 'sohorr@gmail.com', // Change to your verified sender
  subject: `Nowa wiadomość od ${request.params.name}.`,
  text: 'Turn on html',
  html: `<p><strong>Imię: </strong> ${request.params.name} </p>`+
        `<p><strong>Email nadawcy: </strong> ${request.params.email} </p>`+
        `<p><strong>Kierunek, którego dotyczy wiadomość: </strong> ${request.params.kierunek} </p>`+
        `<p><strong>Wiadomość: </strong> ${request.params.message} </p>`

}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

	return `Done.`;
});
