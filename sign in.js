const firebaseConfig = {
    apiKey: "AIzaSyC1IcjBHyeS7DzJZlaYGD4qfOBt-Twvcc0",
    authDomain: "fitness-68706.firebaseapp.com",
    databaseURL: "https://fitness-68706-default-rtdb.firebaseio.com",
    projectId: "fitness-68706",
    storageBucket: "fitness-68706.appspot.com",
    messagingSenderId: "130999171596",
    appId: "1:130999171596:web:3157efb06804d94e9ccc29",
    measurementId: "G-S8E1XT0XL6"
  };
  firebaseConfig.initializeApp(firebaseConfig);
  const signinDB = firebaseConfig.database().ref('signin');
 document.getElementById('signin').addEventListener('submit',submitform);
 function submitform(e){
       e.preventDefault();
 }