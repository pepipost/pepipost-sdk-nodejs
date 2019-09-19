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

   ![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Pepipost%20API-Node)


2. Since npm is installed, you can directly install pepipost packages using below command:
   
    ``` mkdir TestConsole && cd TestConsole```
  
    ![img1](http://app1.falconide.com/integration_imgs/node/2.png)
  
    
    ```npm i pepipost ```
    
    ![img2](http://app1.falconide.com/integration_imgs/node/3.png)
    

     Once your package is installed, you will see `node_modules` folder.

3. The following section explains how to use the library in a new project:

   1. Open Project Folder

      Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

      Click on `File` and select `Open Folder`.

      ![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

       Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

       ![Open Project](http://app1.falconide.com/integration_imgs/node/6.png)
       

   2. Creating a Test File

      Now right click on the folder name. Select the `New File` option to create a new test file.
      
      ![img](http://app1.falconide.com/integration_imgs/node/8.png)
      
      Save it as `example.js`. Now import the generated NodeJS library using the following lines of code:

      ```js
      var lib = require('pepipost');
      ```
      
      Save changes.

      ![Create new file](http://app1.falconide.com/integration_imgs/node/9.png)


   3. Copy and paste the code from [SampleUsage](#Usage) in example.js file
   
      Get your API key and Sending Domain from your Pepipost account. 
  
      * **apikey** will be available under Login to Pepipost -> Settings -> Integration  
      * **Sending Domain** will be available under Login to Pepiost -> Settings -> Sending Domains 

```
  *Note :: Domains showing with Active status on Sending Domain dashboard are only allowed to send any sort of emails.* In case there are no Sending Domain added under your account, then first add the domain, get the DNS (SPF/DKIM) settings done and get it reviewed by our compliance team for approval. Once the domain is approved, it will be in ACTIVE status and will be ready to send any sort of emails. 
```

   4. Running the test file

      To run the `example.js` file, open up the command prompt and navigate to the path where the SDK folder resides. Type the following command to run the file:

```
      node example.js
```
   ![Run file](http://app1.falconide.com/integration_imgs/node/10.png)


<a name="usage"></a>
# Usage

```javascript
//if you are using SDK require will be changed to require('./lib').
const lib = require('pepipost');
const configuration = lib.Configuration;
const controller = lib.EmailController;
const Attribute = lib.Attribute;
let apiKey = 'api key to be passed here';
let body = new lib.EmailBody();

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].recipient = 'email To be sent to';
body.personalizations[0].xApiheaderCc = '123';
body.personalizations[0].xApiheader = '12';
body.personalizations[0].attributes = new Attribute({
   name: 'Jon Doe'
});
body.personalizations[0].attachments = [];

body.personalizations[0].attachments[0] = new lib.Attachments();
body.personalizations[0].attachments[0].fileContent = 'SGVsbG8gRm9sa3MsIFRoaXMgaXMgUGVwaXBvc3QncyBub2RlSlMgU0RL'; //base64encoded value to be passed here
body.personalizations[0].attachments[0].fileName = 'filename.txt';
body.personalizations[0].recipientCc = ['CC emailid to be sent'];


body.tags = 'tagsTransnodejs';
body.from = new lib.From();
body.from.fromEmail = 'your from domain';
body.from.fromName = 'Nodejs Pepi';
body.subject = 'Pepipost SDK For Node JS';
body.content = 'Hello Folks, This is Pepipost\'s nodeJS SDK. Regards [% name %]';
body.settings = new lib.Settings();

body.settings.footer = 1;
body.settings.clicktrack = 1;
body.settings.opentrack = 1;
body.settings.unsubscribe = 1;
body.settings.bcc = 'bcc email id to be passed';
body.replyToId = 'replyto id to be passed here';
BASE_URI = "";

const promise = controller.createSendEmail(apiKey, body,BASE_URI);

promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(response);
});
```

<a name="announcements"></a>
# Announcements

v2.6.0 has been released! Please see the [release notes](https://github.com/pepipost/pepipost-sdk-nodejs/releases/tag/2.6.0) for details.

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
