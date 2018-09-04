![pepipostlogo](https://pepipost.com/assets/img/pepipost-footLogo.png)

[![npm](https://img.shields.io/npm/v/pepipost.svg)](https://www.npmjs.com/package/pepipost)
[![NpmLicense](https://img.shields.io/npm/l/pepipost.svg)](https://www.npmjs.com/package/pepipost)
[![Twitter Follow](https://img.shields.io/twitter/follow/pepi_post.svg?style=social&label=Follow)](https://twitter.com/pepi_post)



# Official nodejs library of Pepipost

This library allows you to quickly integrate Pepipost Web API v2 for sending emails.

We are trying to make our libraries Community Driven- which means we need your help in building the right things in proper order we would request you to help us by sharing comments, creating new issues or pull requests.

We welcome any sort of contribution to this library.

The latest 2.5.0 version of this library provides is fully compatible with the latest Pepipost v2.0 API.

# Table of Content

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
   * A free account on [Pepipost](https://app.pepipost.com/index.php/signup/registeruser). If you don't have a one, click here to sign-up and get 30,000 emails free every month.
   
<a name="quick-start"></a>
# Quick Start

1. To check if node and npm have been successfully installed, write the following commands in command prompt:

   * `node --version`
   * `npm -version`

   ![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Pepipost%20API-Node)

2. Since npm is install you can directly install pepipost packages using below command
   
    ``` mkdir TestConsole && cd TestConsole```
  
    ![img1](http://app1.falconide.com/integration_imgs/node/2.png)
  
    
    ```npm i pepipost ```
    
    ![img2](http://app1.falconide.com/integration_imgs/node/3.png)
    

     once you package is install see `node_modules` folder.

3. The following section explains how to use the library in a new project.

   1. Open Project Folder

      Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

      Click on `File` and select `Open Folder`.

      ![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

       Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

       ![Open Project](http://app1.falconide.com/integration_imgs/node/6.png)

   2. Creating a Test File

      Now right click on the folder name. 

      select the `New File` option to create a new test file.
      
      ![img](http://app1.falconide.com/integration_imgs/node/8.png)
      
      Save it as `example.js` Now import the generated NodeJS library using the following lines of code:

```js
      var lib = require('pepipost');
```
   Save changes.

   ![Create new file](http://app1.falconide.com/integration_imgs/node/9.png)

)

   3. copy and paste from [SampleUsage](#Usage) in example.js file
   
      * apikey will be available under Login to Pepipost -> Settings -> Integration
      * Sending Domain will be available under Login to Pepiost -> Settings -> Sending Domains

   4. Running The Test File

      To run the `example.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

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
let apiKey = 'api key to be passed here';
let body = new lib.EmailBody();

body.personalizations = [];
body.personalizations[0] = new lib.Personalizations();
body.personalizations[0].recipient = 'email To be sent to';
body.personalizations[0].xApiheaderCc = '123';
body.personalizations[0].xApiheader = '12';
body.personalizations[0].attributes = JSON.parse('{"name":"pepi"}');
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


const promise = controller.createSendEmail(apiKey, body);

promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(response);
});
```

<a name="announcements"></a>
# Announcements

v2.5.0 has been released! Please see the [release notes](https://github.com/pepipost/pepipost-sdk-nodejs/releases/tag/v2.5.0) for details.

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


