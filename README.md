# Webile: Nuxt 3, Supabase, Ionic, and Firebase Mobile Template


[![Tests](https://github.com/atorial/webile/actions/workflows/release.yml/badge.svg)](https://github.com/atorial/webile/actions/workflows/release.yml) 


Webile is a mobile template built with Nuxt 3, Supabase, Ionic, and Firebase. It is designed to be a starter template for your mobile app development projects.

## Key Features
Nuxt 3: Webile is built with Nuxt 3, a framework for creating universal Vue.js applications. Nuxt 3 makes it easy to create server-rendered, SEO-friendly apps with automatic code-splitting, hot-reloading, and more.

Supabase: Webile uses Supabase, an open-source alternative to Firebase, for its real-time database, auth, and storage. Supabase adds powerful SQL capabilities and a real-time API to your app, all while using your existing PostgreSQL database.

Ionic: Webile is powered by Ionic, a framework for building cross-platform mobile apps with web technologies. Ionic provides a rich set of UI components and tools for building high-quality mobile apps.

Firebase: Webile also includes Firebase, a popular BaaS (Backend as a Service) platform, for features such as push notifications, analytics, and more.

## Getting Started
To get started with Webile, clone the repository and install the dependencies:

````bash
git clone https://github.com/atorial/webile.git
cd webile
npm install
````
Next, create a new Firebase project and set up the necessary config in nuxt.config.js:

````bash 
firebase: {
config: {
apiKey: '<apiKey>',
authDomain: '<authDomain>',
databaseURL: '<databaseURL>',
projectId: '<projectId>',
storageBucket: '<storageBucket>',
messagingSenderId: '<messagingSenderId>',
appId: '<appId>',
measurementId: '<measurementId>'
},
onFirebaseHosting: false,
services: {
auth: true // Just as example. Can be any of the services provided by Firebase
}
}
````
Finally, start the development server:

```bash 
npm run dev
```
Your app should now be running at http://localhost:3000.

Building and Deploying
To build the app for production, run:


```bash npm run build```
This will generate a minified, production-ready version of the app in the dist directory.

To deploy the app, follow the instructions for deploying a Nuxt app to Firebase Hosting.

Documentation
For more information on how to use Nuxt, Supabase, Ionic, and Firebase, refer to the following documentation:

Nuxt.js documentation
Supabase documentation
Ionic documentation
Firebase documentation


___ 

[//]: # (colors : #ff0000 and #448ee)
---