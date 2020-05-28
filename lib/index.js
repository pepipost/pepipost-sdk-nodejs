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
const DeleteDomain = require('./Models/DeleteDomain');
const AddEmailOrDomainToSuppressionList = require('./Models/AddEmailOrDomainToSuppressionList');
const RemoveEmailOrDomainToSuppressionList =
  require('./Models/RemoveEmailOrDomainToSuppressionList');
const CreateSubaccount = require('./Models/CreateSubaccount');
const UpdateSubaccount = require('./Models/UpdateSubaccount');
const UpdateCredisOfSubaccount = require('./Models/UpdateCredisOfSubaccount');
const UpdateRecurringCredisOfSubaccount = require('./Models/UpdateRecurringCredisOfSubaccount');
const DeleteSubacoount = require('./Models/DeleteSubacoount');
const EnableOrDisableSubacoount = require('./Models/EnableOrDisableSubacoount');
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
    SetrecurringcreditddetailsController,
    SubaccountsSetsubaccountcreditController,
    SubaccountsUpdateSubaccountController,
    SubaccountsCreateSubaccountController,
    SuppressionController,
    DomainDeleteController,
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
    DeleteDomain,
    AddEmailOrDomainToSuppressionList,
    RemoveEmailOrDomainToSuppressionList,
    CreateSubaccount,
    UpdateSubaccount,
    UpdateCredisOfSubaccount,
    UpdateRecurringCredisOfSubaccount,
    DeleteSubacoount,
    EnableOrDisableSubacoount,
    ActionEnum,
    AggregatedByEnum,
    EventsEnum,
    SortEnum,
    TimeperiodEnum,
    // exceptions of PepipostLib
    APIException,
};

module.exports = initializer;
