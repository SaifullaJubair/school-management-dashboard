// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: process.env.REACT_APP_apiKey,
//    authDomain: process.env.REACT_APP_authDomain,
//    projectId: process.env.REACT_APP_projectId,
//    storageBucket: process.env.REACT_APP_storageBucket,
//    messagingSenderId: process.env.REACT_APP_messagingSenderId,
//    appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAXiBZl_Oqu1BD1JD5HUHcooYG734IUuGc",
   authDomain: "school-sj.firebaseapp.com",
   projectId: "school-sj",
   storageBucket: "school-sj.appspot.com",
   messagingSenderId: "523837256847",
   appId: "1:523837256847:web:0a9069a9166afe57ec2cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app