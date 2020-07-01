<h2 align="center">Cetustek Invoice NodeJS</h2>

<p align="center">
  <a href="https:///" style="text-decoration:none;"><img src="https://img.shields.io/badge/chat-on%20Telegram-0088cc.svg" alt="Telegram"></a>
    <a href="https://github.com/joeangel/cetustek-invoice-nodejs/blob/master/LICENSE" style="text-decoration:none;"><img src="http://img.shields.io/github/license/joeangel/cetustek-invoice-nodejs.svg" alt="MIT license"></a>
</p>

<p align="center">
  <a href="#about">About</a> ◈
  <a href="#prerequisites">Prerequisites</a> ◈
  <a href="#installation">Installation</a> ◈
  <a href="#getting-started">Getting started</a> ◈
  <a href="#api-reference">API reference</a> ◈
  <a href="#supporting-the-project">Supporting the project</a> ◈
  <a href="#joining-the-discussion">Joining the discussion</a>
</p>

---

## About

Cetustek Invoice NodeJS (CIN) is a module/example for calling Cetustek Invoice APIs with NodeJS, which allows you to call the APIs by the mudule.

CIN references from [IOTA/IAC](https://github.com/joeangel/cetustek-invoice-nodejs) repo.

See a more please contact [Cetustek](https://www.cetustek.com.tw/).

This is beta software, so there may be performance and stability issues.
Please report any issues in our [issue tracker](https://github.com/joeangel/cetustek-invoice-nodejs/issues/new).

## Prerequisites

To use CIN in your own applications, you need [Node.js](https://nodejs.org/en/download/) installed on your device.

To check if you have Node.js installed, run the following command:

```bash
node -v
```

If Node.js is installed, you should see the version that's installed.

## Installation

To install this package, use one of the following commands:


- `npm install cetustek-invoice-nodejs`


- `yarn add cetustek-invoice-nodejs`

## Getting started

To jump in now, see the following code sample:

```js
const cetustekInvoice = require('cetustek-invoice-nodejs');

const config = {
  user: '',
  password: '',
  endpoint: '',
};

const invoiceData = {
 OrderId: `A2020063000001`,
 OrderDate: '2020/07/06'
 BuyerIdentifier: '53118823',
 BuyerName: '測試',
 BuyerAddress: 'OOXX 的地址',
 BuyerPersonInCharge: 'Joe',
 BuyerTelephoneNumber: '0800888123',
 BuyerFacsimileNumber: '02-33332222',
 BuyerEmailAddress: 'test@test.com',
 BuyerCustomerNumber: 'VIG01AA39090',
 DonateMark: 0,
 InvoiceType: '05',
 NPOBAN: '',
 PayWay: 2,
 TaxType: 1,
 TaxRate: 0.05,
 Remark: ''
};
console.log("Cetustek Invoice Data:", invoiceData);

const invoiceItems = [
 {
	 ProductionCode: 'AAA123',
	 Description: 'OOXX',
	 Quantity: 17,
	 Unit: '月',
	 UnitPrice: 50000
 }
];
console.log("Cetustek Invoice Items:", invoiceItems);

const response = cetustekInvoice.create(invoiceData, invoiceItems);
console.log("Cetustek Invoice Respone", response);
```

Will output:

```shell
Cetustek Invoice Data {
 OrderId: `A2020063000001`,
 OrderDate: '2020/07/06'
 BuyerIdentifier: '53118823',
 BuyerName: '測試',
 BuyerAddress: 'OOXX 的地址',
 BuyerPersonInCharge: 'Joe',
 BuyerTelephoneNumber: '0800888123',
 BuyerFacsimileNumber: '02-33332222',
 BuyerEmailAddress: 'test@test.com',
 BuyerCustomerNumber: 'VIG01AA39090',
 DonateMark: 0,
 InvoiceType: '05',
 NPOBAN: '',
 PayWay: 2,
 TaxType: 1,
 TaxRate: 0.05,
 Remark: ''
}

Cetustek Invoice Items [
 {
	 ProductionCode: 'AAA123',
	 Description: 'OOXX',
	 Quantity: 17,
	 Unit: '月',
	 UnitPrice: 50000
 }
]

Response
```

## API Reference

See the [JavaScript API reference](./docs/api.md).

## Supporting the project

If you want to contribute, consider submitting a [bug report](https://github.com/joeangel/cetustek-invoice-nodejs/issues/new), [feature request](https://github.com/joeangel/cetustek-invoice-nodejs/issues/new) or a [pull request](https://github.com/joeangel/cetustek-invoice-nodejs/pulls/).

See our [contributing guidelines](.github/CONTRIBUTING.md) for more information.

## Joining the discussion

If you want to get involved in the community, need help with getting set up, have any issues or just want to discuss with other people, feel free to join our [Telegram](https://t.me/FiOapp).
