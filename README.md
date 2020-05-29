![pepipostlogo](https://pepipost.com/wp-content/uploads/2017/07/P_LOGO.png)

[![npm](https://img.shields.io/npm/v/pepipost.svg)](https://www.npmjs.com/package/pepipost)
[![NpmLicense](https://img.shields.io/npm/l/pepipost.svg)](https://www.npmjs.com/package/pepipost)
[![npm](https://img.shields.io/npm/dt/pepipost.svg)](https://www.npmjs.com/package/pepipost)
[![Open Source Helpers](https://www.codetriage.com/pepipost/pepipost-sdk-nodejs/badges/users.svg)](https://www.codetriage.com/pepipost/pepipost-sdk-nodejs)
[![Twitter Follow](https://img.shields.io/twitter/follow/pepi_post.svg?style=social&label=Follow)](https://twitter.com/pepi_post)



# Official nodejs library of Pepipost

This SDK contains methods for easily interacting with the Pepipost Email Sending API to send emails in a few seconds.

We are trying to make our libraries community driven and we need your help in building the right things the right way you. Your opinion is very much valued so please share comments, create [issues](https://github.com/pepipost/pepipost-sdk-nodejs/issues) and [pull requests](https://github.com/pepipost/pepipost-sdk-nodejs/pulls).

We welcome any sort of contribution to this library.

The latest 2.6.0 version of this library provides is fully compatible with the latest Pepipost v2.0 API.

# Table of Contents

 * [Installation](#installation)
 * [Quick Start](#quick-start)
 * [Usage](#usage)
 * [Announcements](#announcements)
 * [Roadmap](#roadmap)
 * [About](#about)
 * [License](#license)

<a name="installation"></a>
# Installation

  This library relies on [Node Package Manager](https://www.npmjs.com/)(NPM) which will help in resolving dependencies. Hope you have latest NPM installed, if not please go ahead and follow the instruction to update NPM from [here](https://docs.npmjs.com/cli/update)
  
## Prerequisites

   * npm (by default installed when node is installed).
   * node 
   * [Pepipost library](https://www.npmjs.com/package/pepipost) 
   * A free account on [Pepipost](https://pepipost.com/). If you don't have a one, [click here](https://app.pepipost.com/index.php/signup/registeruser) to sign-up and get 30,000 emails free every month.
   
<a name="quick-start"></a>
# Quick Start

1. To check if node and npm have been successfully installed, write the following commands in command prompt:

   * `node --version`
   * `npm -version`

   ![Version Check](https://i.imgur.com/1JeFUFS.png)


2. Since npm is installed, you can directly clone the pepipost reposistory using below command:
   
    ```bash
    git clone https://github.com/pepipost/pepipost-sdk-nodejs.git pepi-nodejs
    ```
  
    ![img1](https://i.imgur.com/ytN9cqC.png)
  
    
    ```bash
    cd pepi-nodejs
    npm install 
    ```
    
    ![img2](https://i.imgur.com/pILQrq6.png)
    

     Once your package is installed, you will see `node_modules` folder.

3. The following section explains how to use the library in a new project:

   1. Open Project Folder

      Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

      Click on `File` and select `Open Folder`.

       Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

       ![Open Project](https://i.imgur.com/7G5JwfX.png)
       

   2. Creating a Test File

      Now right click on the folder name. Select the `New File` option to create a new test file.
      
      Save it as `test.js`. Now import the Pepipost NodeJS library using the following lines of code:

      ```js
      var lib = require('./lib');
      ```
      
      Save changes.

      ![Create new file](https://i.imgur.com/WUDBJrQ.png)


   3. Copy and paste the code from [SampleUsage](#Usage) in example.js file
   
      Get your API key and Sending Domain from your Pepipost account. 
  
      * **apikey** will be available under Login to Pepipost -> Settings -> Integration  
      * **Sending Domain** will be available under Login to Pepiost -> Settings -> Sending Domains 

```
  *Note :: Domains showing with Active status on Sending Domain dashboard are only allowed to send any sort of emails.* In case there are no Sending Domain added under your account, then first add the domain, get the DNS (SPF/DKIM) settings done and get it reviewed by our compliance team for approval. Once the domain is approved, it will be in ACTIVE status and will be ready to send any sort of emails. 
```

   4. Running the test file

      To run the `test.js` file, open up the command prompt and navigate to the path where the SDK folder resides. Type the following command to run the file:

```
      node test.js
```
  
```json
{
   "data": {
   	"message_id": "e8820eeb0ee94807f1ce88652b1dd627"
   },
   "message": "OK",
   "status": "success"
}
```


<a name="usage"></a>
# Usage

```javascript
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.MailSendController;

configuration.apiKey = '4D51B3ECA2D4ED3A67E4E043B3F1A4D1';

let body = new lib.Send();

body.from = new lib.From();
body.from.email = 'hello@your-registered-domain-with-pepipost';
body.from.name = 'Pepipost';
body.subject = 'Pepipost Test Mail from SDK';

body.content = [];
body.content[0] = new lib.Content();
body.content[0].type = lib.TypeEnum.HTML;
body.content[0].value = '<html><body>Hello, Welcome to Pepipost Family.<br>My name is [% name %].<br>my love is sending [% love %]</body> <br></html>';

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].attributes = JSON.parse('{"name":"Pepi","love":"Email"}');

body.personalizations[0].attachments = [];
body.personalizations[0].attachments[0] = new lib.Attachments();
body.personalizations[0].attachments[0].content = 'SGVsbG8sIHRoaXMgZmlsZSBpcyBhbiBpbmZvcm1hdGlvbmFsIGZpbGU6OiBTZW5kaW5nIGVtYWlscyB0byB0aGUgaW5ib3ggaXMgd2hhdCB3ZSBkbywgYnV0IHRoYXTigJlzIG5vdCB0aGUgb25seSByZWFzb24gd2h5IGRldmVsb3BlcnMgYW5kIGVudGVycHJpc2VzIGxvdmUgdXMuIFdlIGFyZSB0aGUgb25seSBFU1AgdGhhdCBkb2VzbuKAmXQgY2hhcmdlIGZvciBlbWFpbHMgb3BlbmVkLg==';
body.personalizations[0].attachments[0].name = 'personalized-file.txt';

body.personalizations[0].to = [];
body.personalizations[0].to[0] = new lib.EmailStruct();
body.personalizations[0].to[0].name = 'to-address';
body.personalizations[0].to[0].email = 'to-address@mydomain.name';

body.tags = ['campaign'];

const promise = controller.createGeneratethemailsendrequest(body);

promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});
```

<a name="announcements"></a>
# Announcements

v5.0.0 has been released! Please see the [release notes](https://github.com/pepipost/pepipost-sdk-nodejs/releases/tag/2.6.0) for details.

All updates to this library are documented in our [releases](https://github.com/pepipost/pepipost-sdk-nodejs/releases). For any queries, feel free to reach out us at dx@pepipost.com

<a name="roadmap"></a>
## Roadmap

If you are interested in the future direction of this project, please take a look at our open [issues](https://github.com/pepipost/pepipost-sdk-nodejs/issues) and [pull requests](https://github.com/pepipost/pepipost-sdk-nodejs/pulls). We would love to hear your feedback.

<a name="about"></a>
## About
pepipost-nodejs-sdk library is guided and supported by the Pepipost Developer Experience Team.
This pepipost-nodejs-sdk library is maintained and funded by Pepipost Ltd. The names and logos for pepipost-nodejs-sdk are trademarks of Pepipost Ltd.

<a name="license"></a>
## License
This code library was semi-automatically generated by APIMATIC v2.0 and licensed under The MIT License (MIT).
