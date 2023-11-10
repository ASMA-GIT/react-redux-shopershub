import { initializeApp } from 'firebase/app';
import{getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZoCmUX0a2JbVHoa5uIGLVbY68b2VY1Ws",
    authDomain: "shopershub-2dbc7.firebaseapp.com",
    projectId: "shopershub-2dbc7",
    storageBucket: "shopershub-2dbc7.appspot.com",
    messagingSenderId: "232735584726",
    appId: "1:232735584726:web:eaec927b2a4378fe583477",
    databaseURL : "https://shopershub-2dbc7-default-rtdb.firebaseio.com",
    
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export default app;