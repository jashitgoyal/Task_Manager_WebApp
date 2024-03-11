  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

  
  // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxVjJbKAdZqrCBLBXHSYNOiJjPGq20pZY",
    authDomain: "task-manager-webapp-a1108.firebaseapp.com",
    databaseURL: "https://task-manager-webapp-a1108-default-rtdb.firebaseio.com",
    projectId: "task-manager-webapp-a1108",
    storageBucket: "task-manager-webapp-a1108.appspot.com",
    messagingSenderId: "109341554991",
    appId: "1:109341554991:web:ca925d08544883837989da"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider()

 const google_login = document.querySelector("#google-login")
 google_login.addEventListener('click',function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const  user = result.user;
    // console.log("Logged in with", user)
    alert(`LOGGED-IN SUCCESSFULLYSss`)
    // window.location.href = "thetaskmanager/dashboard.html"
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})



