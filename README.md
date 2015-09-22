# DnCMS
Doctor and Clinic Management System

## Requirements
* [npm](https://docs.npmjs.com/cli/install)
  - yum install npm
* [Composer](https://getcomposer.org/download/) 
  - curl -sS https://getcomposer.org/installer | php
  - mv composer.phar /usr/local/bin/composer
* [Bower](http://bower.io/)
  - npm install -g bower
* [Gulp](https://www.npmjs.com/package/gulp-install)
  - npm install -g gulp


## Installation
* composer create-project laravel/laravel DnCMS --prefer-dist
* cd DnCMS 
* composer require bestmomo/scafold dev-master
* composer update
* Add the service provider to your config/app.php
  - Bestmomo\Scafold\ScafoldServiceProvider::class,
* php artisan vendor:publish
* Download and extract initial.tar.gz inside DnCMS folder
* bower install
* npm install
* gulp
* ---Done---
