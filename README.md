## Summary

Some people wants to make their Free Shipping methods more prominent in checkout pages, and showing them as "0.00" as regular isn't too helpfull.
This simple module replaces the shipping method price with "Free shipping" when it's equals to ZERO. Plus, it also adds "free-shipping" as a class to the
shipping price span tag so you can add styling to it using LESS/CSS.

## Installation

What things you need to install the software and how to install them

```
Give examples
```

## Installing

Without composer, just download, uncompress and drop the package content into app/code/AraujoPhillips/FreeShippingLabel. If these folders don't exists, create them as usual.

With composer:

```
composer require araujophillips/magento2-module-freeshippinglabel
composer install
bin/magento module:enable AraujoPhillips_FreeShippingLabel
bin/magento setup:upgrade
```

## Usage

This module has no configuration. Just install and flush the cache, and you will the changes in your checkout page.

Feel free to add styling using LESS/CSS.

## Note

Tested on Magento 2.3.x only, but it should work in any Magento 2 version.

Get in touch at araujophillips@gmail.com to report any issue/bug.
