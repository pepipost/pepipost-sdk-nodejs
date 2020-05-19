'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SendController;

configuration.apiKey = '96c909c6dajkner32cef747979ea8477';

let body = new lib.Send();
body.replyTo = 'reply-to-id@mydomain.name';

body.from = new lib.From();
body.from.email = 'hello@your-registered-domain-with-pepipost';
body.from.name = 'pepipost';
body.subject = 'Pepipost test mail through Nodejs SDK';
body.templateId = 123;

body.content = [];
body.content[0] = new lib.Content();
body.content[0].type = lib.TypeEnum.HTML;
body.content[0].value = '<html><body>Hello [%NAME%], Email testing is successful. <br> Hope you enjoyed this integration. <br></html>';

body.content[1] = new lib.Content();
body.content[1].type = lib.TypeEnum.AMP;
body.content[1].value = '<!doctype html><html ⚡4email><head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script></head><body>Hello, world. This is amp mail 1. </body></html>';


body.attachments = [];
body.attachments[0] = new lib.Attachments();
body.attachments[0].content = 'SGVsbG8sIHRoaXMgZmlsZSBpcyBhbiBpbmZvcm1hdGlvbmFsIGZpbGU6OiBTZW5kaW5nIGVtYWlscyB0byB0aGUgaW5ib3ggaXMgd2hhdCB3ZSBkbywgYnV0IHRoYXTigJlzIG5vdCB0aGUgb25seSByZWFzb24gd2h5IGRldmVsb3BlcnMgYW5kIGVudGVycHJpc2VzIGxvdmUgdXMuIFdlIGFyZSB0aGUgb25seSBFU1AgdGhhdCBkb2VzbuKAmXQgY2hhcmdlIGZvciBlbWFpbHMgb3BlbmVkLg==';
body.attachments[0].name = 'glob-attach-file.txt';

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].attributes = JSON.parse('{"NAME":"User"}');
body.personalizations[0].headers = JSON.parse('{"heaserkey":"value12"}');

body.personalizations[0].attachments = [];
body.personalizations[0].attachments[0] = new lib.Attachments();
body.personalizations[0].attachments[0].content = 'SGVsbG8sIHRoaXMgZmlsZSBpcyBhbiBpbmZvcm1hdGlvbmFsIGZpbGU6OiBTZW5kaW5nIGVtYWlscyB0byB0aGUgaW5ib3ggaXMgd2hhdCB3ZSBkbywgYnV0IHRoYXTigJlzIG5vdCB0aGUgb25seSByZWFzb24gd2h5IGRldmVsb3BlcnMgYW5kIGVudGVycHJpc2VzIGxvdmUgdXMuIFdlIGFyZSB0aGUgb25seSBFU1AgdGhhdCBkb2VzbuKAmXQgY2hhcmdlIGZvciBlbWFpbHMgb3BlbmVkLg==';
body.personalizations[0].attachments[0].name = 'personalized-file.txt';


body.personalizations[0].to = [];
body.personalizations[0].to[0] = new lib.EmailStruct();
body.personalizations[0].to[0].name = 'to-address';
body.personalizations[0].to[0].email = 'to-address@mydomain.name';

body.personalizations[0].cc = [];
body.personalizations[0].cc[0] = new lib.EmailStruct();
body.personalizations[0].cc[0].name = 'to-cc-name';
body.personalizations[0].cc[0].email = 'to-cc-address@mydomain.name';


body.personalizations[0].bcc = [];
body.personalizations[0].bcc[0] = new lib.EmailStruct();
body.personalizations[0].bcc[0].name = 'to-bcc-name';
body.personalizations[0].bcc[0].email = 'to-bcc-address@mydomain.name';

body.personalizations[0].tokenTo = 'token-to';
body.personalizations[0].tokenCc = 'token-cc';
body.personalizations[0].tokenBcc = 'token-bcc';

body.settings = new lib.Settings();
body.settings.footer = true;
body.settings.clickTrack = true;
body.settings.openTrack = true;
body.settings.unsubscribeTrack = true;
body.tags = ['campaign'];

body.lintPayload = true;
body.schedule = 0;

body.bcc = [];
body.bcc[0] = new lib.EmailStruct();
body.bcc[0].name = 'glob-bcc-name';
body.bcc[0].email = 'glob-bcc-address@mydomain.name';

const promise = controller.createGenerateTheMailSendRequest(body);

promise.then((response) => {
  // this block will be executed on successful endpoint call
  // `response` will be of type 'array'
  console.log(response)
}, (err) => {
  // this block will be executed on endpoint call failure
  // `err` is an 'object' containing more information about the error
});
