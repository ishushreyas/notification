import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging-sw.js";

import { onMessage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging.js";

// Initialize the Firebase app in the service worker by passing in

// your app's Firebase config object.

// https://firebase.google.com/docs/web/setup#config-object

const firebaseApp = initializeApp({

  apiKey: "AIzaSyBVrRabMjHB6JSWoIxpgDp6Wnn1_eryP6g",

    authDomain: "chat-9a308.firebaseapp.com",

    projectId: "chat-9a308",

    storageBucket: "chat-9a308.appspot.com",

    messagingSenderId: "425014899154",

    appId: "1:425014899154:web:be7fb6b68d239647e2180b",

    measurementId: "G-334Y4TXNJD"


});

// Retrieve an instance of Firebase Messaging so that it can handle background

// messages.

const messaging = getMessaging(firebaseApp);

  onMessage(messaging, (payload) => {

  alert('Message received. ' + payload);

  // ...

});




messaging.setBackgroundMessageHandler(function(payload) {

  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here

  const notificationTitle = 'Background Message Title';

  const notificationOptions = {

    body: 'Background Message body.'

  };

  return self.registration.showNotification(notificationTitle,

      notificationOptions);

});
