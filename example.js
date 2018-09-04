const lib = require('./lib');
const configuration = lib.Configuration;
const controller = lib.EmailController;
let apiKey = '304b54cbda55828c0a34070ed7b626d5';
let body = new lib.EmailBody();


body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].recipient = 'vikramsahu36@gmail.com';
body.personalizations[0].recipientCc = [];


body.from = new lib.From();
body.from.fromEmail = 'pepi_nodesdk@pepipost.com';
body.from.fromName = 'Nodejs SDK';
body.subject = 'Pepi- Nodejs';
body.content = 'this is pepipost email';

body.settings = new lib.Settings();
body.settings.footer = 0;
body.settings.clicktrack = 1;
body.settings.opentrack = 1;
body.settings.unsubscribe = 1;

const promise = controller.createSendEmail(apiKey, body);

promise.then((response) => {

    // this block will be executed on successful endpoint call
    console.log(response);

    // `response` will be of type 'SendEmailResponse'

}, (err) => {

    // this block will be executed on endpoint call failure
 console.log(response);
    // `err` is an 'object' containing more information about the error

});
