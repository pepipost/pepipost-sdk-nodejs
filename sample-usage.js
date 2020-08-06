'use strict';

const lib = require('./lib');
const configuration = lib.Configuration;
const controller = lib.MailSendController;

configuration.apiKey = '4D51B3ECA2D4ED3A67E4E043B3F1A4D1';
let body = new lib.Send();

body.from = new lib.From();

body.from.email = 'hello@your-registered-domain-with-pepipost';
body.from.name = 'Pepipost';
body.subject = 'Pepipost Test Mail from SDK';

body.content = [];
let type = lib.TypeEnum.HTML;
let value = '<html><body>Hello, Welcome to Pepipost Family.<br>My name is [% name %].<br>my love is sending [% love %]</body> <br></html>';
body.content[0] = new lib.Content({type: type,value: value});

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].attributes = JSON.parse('{"name":"Pepi","love":"Email"}');

body.personalizations[0].to = [];
body.personalizations[0].to[0] = new lib.EmailStruct();
body.personalizations[0].to[0].name = 'to-address';
body.personalizations[0].to[0].email = 'to-address@mydomain.name';

body.personalizations[0].cc = [];
body.personalizations[0].cc[0] = new lib.EmailStruct();
body.personalizations[0].cc[0].name = 'to-cc-name';
body.personalizations[0].cc[0].email = 'to-bcc-name';

body.personalizations[0].bcc = [];
body.personalizations[0].bcc[0] = new lib.EmailStruct();
body.personalizations[0].bcc[0].name = 'to-bcc-name';
body.personalizations[0].bcc[0].email = 'to-bcc-name@mydomain.name';

body.settings = new lib.Settings();
body.settings.footer = true;
body.settings.clickTrack = true;
body.settings.openTrack = true;
body.settings.unsubscribeTrack = true;

const promise = controller.createGeneratethemailsendrequest(body);

promise.then((response) => {

    // this block will be executed on successful endpoint call

    // `response` will be of type 'object'

}, (err) => {

    // this block will be executed on endpoint call failure

    // `err` is an 'object' containing more information about the error

});
