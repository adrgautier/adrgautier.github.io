import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const app = initializeApp({ projectId: 'firebase-gametrack' });

export default getFirestore(app);
