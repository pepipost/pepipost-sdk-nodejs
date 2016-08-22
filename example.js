var pepipostapiv10lib = require('pepipostapiv10lib');

var Email = pepipostapiv10lib.EmailController;


var data = {
    "api_key": "yoursecretapikey",
    "email_details": {
        "fromname": "yourfromname",
        "subject": "this is test email subject",
        "from": "from@example.com",
        "content": "<p> hi, this is a test email sent via Pepipost JSON API.</p>"
    },
    "recipients": [
        "recipient@example.com"
    ]
};

Email.send(data,callback_mail_sent);

function callback_mail_sent(err_msg,parsed,context){
    if(parsed.errorcode==0){
        console.log("mail sent successfully.\n");
    }
    else{
        console.log("Email sent Failed.\n");
        console.log("errormessage("+parsed.errormessage+")\n");
        console.log("errorcode("+parsed.errorcode+")\n");
    }    
}


