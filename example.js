//if you are using SDK require will be changed to require('./lib').
const lib = require('pepipost');
const configuration = lib.Configuration;
const controller = lib.EmailController;
const Attribute = lib.Attribute;
const Xheaders = lib.Xheaders;
let apiKey = '304b54cbda55828c0a340XXXXXb626d5';
let body = new lib.EmailBody();

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].recipient = 'toemail@gmail.com';
body.personalizations[0].recipientCc = 'ccemails@gmail.in';
body.personalizations[0].recipientBcc = 'dxteammail@pepipost.com';
body.personalizations[0].xApiheaderCc = '123';
body.personalizations[0].xApiheader = '12';
body.personalizations[0].attributes = new Attribute({
name: 'Jon Doe 1',
id: '123543',
grad:'BE'
});;
body.personalizations[0].xheaders = new Xheaders({
		'x-name': 'John 2',
		'x-id': '75896',
		'x-grad':'BE(comp)'
		});;
body.personalizations[0].attachments = [];

body.personalizations[0].attachments[0] = new lib.Attachments();
body.personalizations[0].attachments[0].fileContent = 'SGVsbG8gRm9sa3MsIFRoaXMgaXMgUGVwaXBvc3QncyBub2RlSlMgU0RL'; //base64encoded value to be passed here
body.personalizations[0].attachments[0].fileName = 'filename.txt';
//body.personalizations[0].recipientCc = ['CC emailid to be sent'];


body.tags = 'tagsTransnodejs';
body.from = new lib.From();
body.from.fromEmail = 'info@registerdomain.com';
body.from.fromName = 'Nodejs Pepi';
body.subject = 'Pepipost SDK For Node JS';
body.ampcontent = '<!doctype html><html ⚡4email><head>  <meta charset="utf-8">  <script async src="https://cdn.ampproject.org/v0.js"></script>  <style amp4email-boilerplate>body{visibility:hidden}</style></head><body>  Hello, AMP4EMAIL world.</body></html>';
body.content = 'Hello Folks, This is Pepipost\'s nodeJS SDK. this is [% id %] and [% grad %] Regards [% name %]';
body.settings = new lib.Settings();

body.settings.footer = 1;
body.settings.clicktrack = 1;
body.settings.opentrack = 1;
body.settings.unsubscribe = 1;
//body.settings.bcc = 'bcc email id to be passed';
//body.replyToId = 'replyto id to be passed here';
BASE_URI = "";
const promise = controller.createSendEmail(apiKey, body, BASE_URI);

promise.then((response) => {
		console.log(response);
		}, (err) => {
		console.log(response);
		});
