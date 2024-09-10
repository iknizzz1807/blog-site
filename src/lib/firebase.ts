import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Nếu bạn sử dụng Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Nếu bạn sử dụng Firestore
import { getStorage } from "firebase/storage"; // Nếu bạn sử dụng Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtELiPCxsfHLiSP_t6-ylm_8rswRzWYTI",
  authDomain: "ikniz-f9199.firebaseapp.com",
  projectId: "ikniz-f9199",
  storageBucket: "ikniz-f9199.appspot.com",
  messagingSenderId: "922541901962",
  appId: "1:922541901962:web:4ac5cbd2be7c1ecf2d0573",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export các dịch vụ Firebase mà bạn cần
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, app };
