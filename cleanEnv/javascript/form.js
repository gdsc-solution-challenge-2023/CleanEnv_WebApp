// 'use strict';
import { flagRecycleItems, arr} from './Recycle_script.js';

console.log(flagRecycleItems);

const firebaseConfig = {

    apiKey: "AIzaSyAOGp673sFqTb-uDscPYcwnMPygrvU4qz8",
    authDomain: "cleanenv-4ca72.firebaseapp.com",
    databaseURL: "https://cleanenv-4ca72-default-rtdb.firebaseio.com",
    projectId: "cleanenv-4ca72",
    storageBucket: "cleanenv-4ca72.appspot.com",
    messagingSenderId: "467200291841",
    appId: "1:467200291841:web:b826e461e753467db8fc00",
    measurementId: "G-32SPFFWV7J"

  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference firebase
const cleanEnvDB = firebase.database().ref('users');
const cleanEnvDBemail = firebase.database().ref('EmailToPhone');

document.getElementById("signUpForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let emailid = getElementVal("email");
  let name = getElementVal("fullName");
  let phone = getElementVal("phoneNumber");
  let password = getElementVal("password");
  let phoneNum = document.getElementById("phoneNumber");
  phone = '+91' + phone;
  let pass = document.getElementById("password");
  let phoneFlag = 0;
  let passwordFlag = 0;
  console.log(phone);
  if(phone.length != 13){
      phoneFlag = 0;
      phoneNum.classList.add("is-invalid");
      phoneNum.style.borderColor = "red";
  }
  else
  {
    phoneFlag = 1;
    phoneNum.classList.remove("is-invalid");
    phoneNum.style.borderColor = "#81a969";
  }
  if(password.length > 16 || password.length < 8){
      passwordFlag = 0;
      pass.classList.add("is-invalid");
      pass.style.borderColor = "red";
  }
  else{
    passwordFlag = 1;
    pass.classList.remove("is-invalid");
    pass.style.borderColor = "#81a969";

  }
  console.log(phoneFlag, passwordFlag);
  if(phoneFlag === 1 && passwordFlag === 1){
    phoneNum.classList.remove("is-invalid");
    phoneNum.style.borderColor = "#81a969";
    pass.classList.remove("is-invalid");
    pass.style.borderColor = "#81a969";


    saveMessages(phone, name, emailid, password);
    window.location.href="Recycle.html";
    //signInWithPhoneNumber(phone);

    //   reset the form
    document.getElementById("signUpForm").reset();
  }
}

const saveMessages = (phone, name, emailid, password) => {
  cleanEnvDB.child(phone).set({
    name: name,
    email: emailid,
    password: password,
    phone: phone
  });
};

const getElementVal = (id) => {
  let val = document.getElementById(id).value;
  return val;
};




// // OTP Verification

//  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "normal",
//           callback: function(response) {
//             submitPhoneNumberAuth();
//           }
//         }
//       );

//       // This function runs when the 'sign-in-button' is clicked
//       // Takes the value from the 'phoneNumber' input and sends SMS to that phone number
//       function submitPhoneNumberAuth() {
//         var phoneNumber = document.getElementById("phoneNumber").value;
//         var appVerifier = window.recaptchaVerifier;
//         firebase
//           .auth()
//           .signInWithPhoneNumber(phoneNumber, appVerifier)
//           .then(function(confirmationResult) {
//             window.confirmationResult = confirmationResult;
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
//       }

//       // This function runs when the 'confirm-code' button is clicked
//       // Takes the value from the 'code' input and submits the code to verify the phone number
//       // Return a user object if the authentication was successful, and auth is complete
// function submitPhoneNumberAuthCode() {
//         var code = document.getElementById("OTP").value;
//         confirmationResult
//           .confirm(code)
//           .then(function(result) {
//             var user = result.user;
//             console.log(user);
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
// }

//       //This function runs everytime the auth state changes. Use to verify if the user is logged in
// firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           console.log("USER LOGGED IN");
//         } else {
//           // No user is signed in.
//           console.log("USER NOT LOGGED IN");
//         }
//       });

var ref = firebase.database().ref('price/');

ref.on("value", function(snapshot) {
   console.log(snapshot.val()['plastic']);
}, function (error) {
   console.log("Error: " + error.code);
});