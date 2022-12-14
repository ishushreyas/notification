import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging-sw.js";

// Initialize the Firebase app in the service worker by passing in

// your app's Firebase config object.

// https://firebase.google.com/docs/web/setup#config-object

const firebaseApp = initializeApp({

  apiKey: "AIzaSyAN-X9u7n7QnM8RLrVV4YnXq2MmVz6WNfw",

    authDomain: "em-issyoo.firebaseapp.com",

    projectId: "em-issyoo",

    storageBucket: "em-issyoo.appspot.com",

    messagingSenderId: "33480809995",

    appId: "1:33480809995:web:74df1e056f7638d0b5310e",

    measurementId: "G-C64NWHRT0Y"

});

// Retrieve an instance of Firebase Messaging so that it can handle background

// messages.

const messaging = getMessaging(firebaseApp);

 /* onMessage(messaging, (payload) => {

  alert('Message received. ' + payload);

  // ...

});*/

 

  onBackgroundMessage(messaging, (payload) => {

  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here

  const notificationTitle = 'Background Message Title';

  const notificationOptions = {

    body: 'Background Message body.',

    icon: '/firebase-logo.png'

  };

  self.registration.showNotification(notificationTitle,

    notificationOptions);

});

