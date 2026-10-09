importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDOwMvZMhw1gRLleyT_3tDyaRTomYTywj8",
    authDomain: "koflylounge-2026.firebaseapp.com",
    projectId: "koflylounge-2026",
    storageBucket: "koflylounge-2026.firebasestorage.app",
    messagingSenderId: "257437567780",
    appId: "1:257437567780:web:50dc07395c0c33802981b1",
    measurementId: "G-Y3Q49ZXZHB",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
