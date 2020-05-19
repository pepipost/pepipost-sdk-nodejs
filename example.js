'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SendController;


configuration.apiKey = '96c909c6dajkner32cef747979ea8477';
let body = new lib.Send();

body.from = new lib.From();
body.from.email = 'hello@your-registered-domain-with-pepipost';
body.from.name = 'Pepipost';
body.subject = 'Pepipost Test Email thorugh Nodejs SDK';

body.content = [];
body.content[0] = new lib.Content();
body.content[0].type = lib.TypeEnum.HTML;
body.content[0].value = '<html><body>Hello [%NAME%], Email testing is successful. <br> Hope you enjoyed this integration. <br></html>';

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].attributes = JSON.parse('{"NAME":"User"}');

body.personalizations[0].to = [];
body.personalizations[0].to[0] = new lib.EmailStruct();
body.personalizations[0].to[0].name = 'to-name';
body.personalizations[0].to[0].email = 'to@mydomain.name';

body.personalizations[0].cc = [];
body.personalizations[0].cc[0] = new lib.EmailStruct();
body.personalizations[0].cc[0].name = 'to-cc';
body.personalizations[0].cc[0].email = 'to-cc-address@mydomain.name';

body.personalizations[0].bcc = [];
body.personalizations[0].bcc[0] = new lib.EmailStruct();
body.personalizations[0].bcc[0].name = 'to-bcc';
body.personalizations[0].bcc[0].email = 'to-bcc-address@mydomain.name';

body.settings = new lib.Settings();
body.settings.footer = true;
body.settings.clickTrack = true;
body.settings.openTrack = true;
body.settings.unsubscribeTrack = true;

body.bcc = [];
body.bcc[0] = new lib.EmailStruct();
body.bcc[0].name = 'glob-bcc';
body.bcc[0].email = 'glob-bcc@mydomain.name';

const promise = controller.createGenerateTheMailSendRequest(body);

promise.then((response) => {
  console.log(response)
}, (err) => {
  // this block will be executed on endpoint call failure
  console.log(err)
  // `err` is an 'object' containing more information about the error
});
