/**
  * @module PepipostLib
  *
  * Pepipost is a cloud-based SMTP relay service that delivers highly personalised transactional
  * emails to the inbox within seconds of your customer’s transaction
  */

'use strict';

const Configuration = require('./configuration');
const EmailController = require('./Controllers/EmailController');
const Attribute = require('./Models/Attribute');
const Xheaders = require('./Models/Xheaders');
const From = require('./Models/From');
const EmailBodyAttachments = require('./Models/EmailBodyAttachments');
const Attachments = require('./Models/Attachments');
const Personalizations = require('./Models/Personalizations');
const EmailBody = require('./Models/EmailBody');
const Settings = require('./Models/Settings');
const SendEmailError = require('./Models/SendEmailError');
const SendEmailResponse = require('./Models/SendEmailResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PepipostLib
    Configuration,
    // controllers of PepipostLib
    EmailController,
    // models of PepipostLib
    Attribute,
    Xheaders,
    From,
    EmailBodyAttachments,
    Attachments,
    Personalizations,
    EmailBody,
    Settings,
    SendEmailError,
    SendEmailResponse,
    // exceptions of PepipostLib
    APIException,
};

module.exports = initializer;
