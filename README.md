# Kime
Kime is a free application, offering fun activities for children aged 3 to 12. The child is accompanied step by step throughout the activity and once the activity is over, he receives a trophy to reward him and he can add a photo of his creation as a memory.

## Table of contents
* [Context](#context)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [Sources](#sources)
* [Project status](#project-status)

## Context
Following the events of COVID-19, the world came to a temporary halt and a new way of life was imposed. During 3 days, as an international team, we participated in a hackathon, the BUSIT, where we had to "Design and create an innovative mobile application useful during a massive virus outbreak. During these 3 days, we looked for the impacts of containment to propose a relevant application, answering a social need, and that's how Amélie Chambon's group got the idea of **Kime**.
At the end of this experiment, the French students were brought together to develop the application for 2 weeks.

## Built With

* [Laravel](https://laravel.com/) - PHP framework
* [React](https://fr.reactjs.org/) - JavaScript library

## Getting Started
The application has been decoupled. For this, we developed it with the Laravel REST API to retrieve data, and React to manage the API calls to retrieve the data to display.

### Server configuration

Install dependencies.

```
npm install
composer install
```

API package manager

```
composer require laravel/passport
```

Start the server.

```
php artisan serve
```

Running migrations & seedings.

```shell
$ php artisan migrate
$ php artisan migrate --seed
$ php artisan passport:install
```

If inserting the data doesn't work.

```shell
$ composer dump-autoload 
$ php artisan migrate:fresh
$ php artisan migrate --seed
$ php artisan passport:install
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


### Client configuration

Runs the app in the development mode.

```
npm run watch
```

## Authors

* **Amélie Chambon** - *Project manager & front-end developer* - [AmelieCHAMBON](https://github.com/AmelieCHAMBON)
* **Brieuc Fresnel** - *Front-end developer* - [brieucfresnel](https://github.com/brieucfresnel)
* **Sarah Mauriaucourt** - *Webdesigner & back-end developer* - [sarah-mrcrt](https://github.com/sarah-mrcrt)

## Sources
* Illustrations : [Undraw](https://undraw.co/)
* Photographies : [Unsplash](https://unsplash.com/), [Pixabay](https://pixabay.com/)

## Project status
The development of the application has slowed stopped.
