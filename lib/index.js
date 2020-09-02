/**
  * @module PepipostLib
  *
  * Pepipost API is used to send the mail to the receipients specified in the docs
  */

'use strict';

const Configuration = require('./configuration');
const MailSendController = require('./Controllers/MailSendController');
const EventsController = require('./Controllers/EventsController');
const StatsController = require('./Controllers/StatsController');
const SubaccountsController = require('./Controllers/SubaccountsController');
const SubaccountsDeleteController = require('./Controllers/SubaccountsDeleteController');
const SubaccountsGetSubAccountsController =
  require('./Controllers/SubaccountsGetSubAccountsController');
const SubaccountsGetcreditddetailsController =
  require('./Controllers/SubaccountsGetcreditddetailsController');
const SetrecurringcreditddetailsController =
  require('./Controllers/SetrecurringcreditddetailsController');
const SubaccountsSetsubaccountcreditController =
  require('./Controllers/SubaccountsSetsubaccountcreditController');
const SubaccountsUpdateSubaccountController =
  require('./Controllers/SubaccountsUpdateSubaccountController');
const SubaccountsCreateSubaccountController =
  require('./Controllers/SubaccountsCreateSubaccountController');
const SuppressionController = require('./Controllers/SuppressionController');
const DomainDeleteController = require('./Controllers/DomainDeleteController');
const DomainGetDomainsController = require('./Controllers/DomainGetDomainsController');
const TemplateController = require('./Controllers/TemplateController');
const DomainController = require('./Controllers/DomainController');
const Content = require('./Models/Content');
const Personalizations = require('./Models/Personalizations');
const From = require('./Models/From');
const Settings = require('./Models/Settings');
const EmailStruct = require('./Models/EmailStruct');
const TypeEnum = require('./Models/TypeEnum');
const Attachments = require('./Models/Attachments');
const Send = require('./Models/Send');
const DomainStruct = require('./Models/DomainStruct');
const Deletedomain = require('./Models/Deletedomain');
const AddemailordomaintoSuppressionlist = require('./Models/AddemailordomaintoSuppressionlist');
const RemoveemailordomaintoSuppressionlist =
  require('./Models/RemoveemailordomaintoSuppressionlist');
const Createsubaccount = require('./Models/Createsubaccount');
const Updatesubaccount = require('./Models/Updatesubaccount');
const UpdateCredisofsubaccount = require('./Models/UpdateCredisofsubaccount');
const UpdaterecurringCredisofsubaccount = require('./Models/UpdaterecurringCredisofsubaccount');
const Deletesubacoount = require('./Models/Deletesubacoount');
const Enableordisablesubacoount = require('./Models/Enableordisablesubacoount');
const ActionEnum = require('./Models/ActionEnum');
const AggregatedByEnum = require('./Models/AggregatedByEnum');
const EventsEnum = require('./Models/EventsEnum');
const SortEnum = require('./Models/SortEnum');
const TimeperiodEnum = require('./Models/TimeperiodEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PepipostLib
    Configuration,
    // controllers of PepipostLib
    MailSendController,
    EventsController,
    StatsController,
    SubaccountsController,
    SubaccountsDeleteController,
    SubaccountsGetSubAccountsController,
    SubaccountsGetcreditddetailsController,
    SetrecurringcreditddetailsController,
    SubaccountsSetsubaccountcreditController,
    SubaccountsUpdateSubaccountController,
    SubaccountsCreateSubaccountController,
    SuppressionController,
    DomainDeleteController,
    DomainGetDomainsController,
    TemplateController,
    DomainController,
    // models of PepipostLib
    Content,
    Personalizations,
    From,
    Settings,
    EmailStruct,
    TypeEnum,
    Attachments,
    Send,
    DomainStruct,
    Deletedomain,
    AddemailordomaintoSuppressionlist,
    RemoveemailordomaintoSuppressionlist,
    Createsubaccount,
    Updatesubaccount,
    UpdateCredisofsubaccount,
    UpdaterecurringCredisofsubaccount,
    Deletesubacoount,
    Enableordisablesubacoount,
    ActionEnum,
    AggregatedByEnum,
    EventsEnum,
    SortEnum,
    TimeperiodEnum,
    // exceptions of PepipostLib
    APIException,
};

module.exports = initializer;
