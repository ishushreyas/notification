importScripts("https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js")

importScripts("https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging.js")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAN-X9u7n7QnM8RLrVV4YnXq2MmVz6WNfw",

  authDomain: "em-issyoo.firebaseapp.com",

  projectId: "em-issyoo",

  storageBucket: "em-issyoo.appspot.com",

  messagingSenderId: "33480809995",

  appId: "1:33480809995:web:74df1e056f7638d0b5310e",

  measurementId: "G-C64NWHRT0Y"

};

firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {

    const title = 'hello world';

    const options = {

        body: payload.data.status

    }

    return self.registration.showNotification(title, options)

})
