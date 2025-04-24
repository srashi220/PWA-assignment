

/* eslint-env serviceworker */
/* global importScripts, firebase */


importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC6YuKraeDXHkVnTd7FItOYOLWpXrRoJ7o",
  authDomain: "tailwind-pwa.firebaseapp.com",
  projectId: "tailwind-pwa",
  messagingSenderId: "916791676269",
  appId: "1:916791676269:web:1589a490122f3f3af51e64"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload?.notification?.title || 'Notification';
  const notificationOptions = {
    body: payload?.notification?.body || 'You have a new message.',
    icon: '/pwa-192x192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
