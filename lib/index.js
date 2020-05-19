/**
  * @module PepipostLib
  *
  * Pepipost API is used to send the mail to the receipients specified in the docs
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const SendController = require('./Controllers/SendController');
const From = require('./Models/From');
const Settings = require('./Models/Settings');
const Content = require('./Models/Content');
const Attachments = require('./Models/Attachments');
const EmailStruct = require('./Models/EmailStruct');
const Personalizations = require('./Models/Personalizations');
const Send = require('./Models/Send');
const TypeEnum = require('./Models/TypeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PepipostLib
    Configuration,
    Environments,
    // controllers of PepipostLib
    SendController,
    // models of PepipostLib
    From,
    Settings,
    Content,
    Attachments,
    EmailStruct,
    Personalizations,
    Send,
    TypeEnum,
    // exceptions of PepipostLib
    APIException,
};

module.exports = initializer;
