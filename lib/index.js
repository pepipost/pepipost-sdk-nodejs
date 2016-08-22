/**
  * @module PepipostAPIV10Lib
  *  
  * Pepipost API documentation
  */

var configuration = require('./configuration'),
    EmailController = require('./Controllers/EmailController'),
    Attributes = require('./Models/Attributes'),
    Files = require('./Models/Files'),
    Emailv1 = require('./Models/Emailv1'),
    EmailDetails = require('./Models/EmailDetails'),
    Settings = require('./Models/Settings');


function initializer(){}

//Main functional components of PepipostAPIV10Lib
initializer.configuration = configuration;
initializer.EmailController = EmailController;

//Main Models of PepipostAPIV10Lib
initializer.Attributes = Attributes;
initializer.Files = Files;
initializer.Emailv1 = Emailv1;
initializer.EmailDetails = EmailDetails;
initializer.Settings = Settings;

module.exports = initializer;