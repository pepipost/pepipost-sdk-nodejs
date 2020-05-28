## Table of Content
* [fetch event logs](#example1)
* [fetch summary stats](#example2)
* [Domain Add](#example3)
* [Domain delete](#example4)
* [Suppression add](#example5)
* [Suppression delete](#example6)
* [create subaccount](#example7)
* [update subaccount](#example8)
* [enable/disable subaccount](#example9)
* [delete subaccount](#example10)
* [set recurring credit in subaccount](#example11)
* [add credit in subaccount](#example12)
* [get credit details of subaccount](#example13)

<a name="example1"></a>
## fetch event logs 

```js
'use strict';

const moment = require('moment');
const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.EventsController;

configuration.apiKey = 'your api_key here';

let startdate = moment('2016-03-13', 'YYYY-MM-DD');
let events = lib.EventsEnum.BOUNCE;
let sort = lib.SortEnum.DESC;
let enddate = moment('2020-05-26', 'YYYY-MM-DD');
let subject = 'test';
let email = 'emai@gmail.com';

const promise = controller.getEventsGET(startdate, events, sort, enddate, null, null, subject, null, null, email);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example2"></a>
## fetch summary stats  

```js
'use strict';

const moment = require('moment');
const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.StatsController;

configuration.apiKey = 'your api_key here';

let startdate = moment('2016-03-13', 'YYYY-MM-DD');
let enddate = moment('2020-05-26', 'YYYY-MM-DD');
let aggregatedBy = lib.AggregatedByEnum.MONTH;

const promise = controller.getStatsGET(startdate, enddate, aggregatedBy);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```
<a name="example3"></a>
## Domain Add  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.DomainController;

configuration.apiKey = 'your api_key here';

let body = new lib.DomainStruct();

body.domain = 'example.com';
body.envelopeName = 'test';

const promise = controller.addDomain(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example4"></a>
## Domain delete  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.DomainDeleteController;

configuration.apiKey = 'your api_key here';

let body = new lib.DeleteDomain();

body.domain = 'example.com';

const promise = controller.deleteDomain(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example5"></a>
## Suppression add  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SuppressionController;

configuration.apiKey = 'your api_key here';

let body = new lib.AddEmailOrDomainToSuppressionList();

body.domain = 'example.com';
body.email = 'email@gmail.com';

const promise = controller.addDomainOrEmailToSuppressionList(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example6"></a>
## Suppression delete 

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SuppressionController;

configuration.apiKey = 'your api_key here';

let body = new lib.RemoveEmailOrDomainToSuppressionList();

body.domain = 'example.com';
body.email = 'email@gmail.com';

const promise = controller.removeDomainOrEmailToSuppressionList(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example7"></a>
## create subaccount  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsCreateSubaccountController;

configuration.apiKey = 'your api_key here';

let body = new lib.CreateSubaccount();

body.username = 'name';
body.email = 'email1.gmail.com';
body.setpassword = 'setpassword8';
body.password = 'pwd';

const promise = controller.createSubaccountsCreateSubaccountPOST(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example8"></a>
## update subaccount 

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsUpdateSubaccountController;

configuration.apiKey = 'your api_key here';

let body = new lib.UpdateSubaccount();

body.username = 'username';
body.newEmail = 'email@gmail.com';
body.newPassword = 'email@gmail.com';
body.confirmPassword = 'pwd';

const promise = controller.createSubaccountsUpdateSubaccountPOST(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example9"></a>
## enable/disable subaccount  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsController;

configuration.apiKey = 'your api_key here';

let body = new lib.EnableOrDisableSubacoount();

body.username = 'username';
body.disabled = true;

const promise = controller.updateSubaccountsPATCH(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example10"></a>
## delete subaccount 

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsDeleteController;

configuration.apiKey = 'your api_key here';

let body = new lib.DeleteSubacoount();

body.username = 'username';

const promise = controller.deleteSubaccountsDeleteDELETE(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example11"></a>
## set recurring credit in subaccount  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SetrecurringcreditddetailsController;

configuration.apiKey = 'your api_key here';

let body = new lib.UpdateRecurringCredisOfSubaccount();

body.username = 'username';
body.recurringCredit = 100;
body.timeperiod = lib.TimeperiodEnum.WEEKLY;

const promise = controller.createSetrecurringcreditddetailsPOST(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example12"></a>
## add credit in subaccount  

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsSetsubaccountcreditController;

configuration.apiKey = 'your api_key here';

let body = new lib.UpdateCredisOfSubaccount();

body.username = 'username';
body.action = lib.ActionEnum.INCREASE;
body.amount = 100;

const promise = controller.createSubaccountsSetsubaccountcreditPOST(body);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

<a name="example13"></a>
## get credit details of subaccount 

```js
'use strict';

const lib = require('lib');
const configuration = lib.Configuration;
const controller = lib.SubaccountsGetSubAccountsController;

configuration.apiKey = 'your api_key here';

let limit = '100';
let offset = '1';

const promise = controller.getSubaccountsGetSubAccountsGET(limit, offset);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'object'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```