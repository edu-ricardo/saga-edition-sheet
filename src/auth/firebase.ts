import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, type User } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import type { Character } from '../types';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error signing in", error);
        throw error;
    }
};

export const signOut = () => firebaseSignOut(auth);

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
};

export const saveCharacter = async (character: Character, user: User) => {
    try {
        const charData = { ...character, userId: user.uid };

        if (character.id) {
            // Update existing
            await setDoc(doc(db, "characters", character.id), charData);
            return character.id;
        } else {
            // Create new
            const docRef = await addDoc(collection(db, "characters"), charData);
            return docRef.id;
        }
    } catch (e) {
        console.error("Error saving document: ", e);
        throw e;
    }
};

export const getCharacters = async (userId?: string) => {
    const chars: Character[] = [];
    try {
        let q;
        if (userId) {
            q = query(collection(db, "characters"), where("userId", "==", userId));
        } else {
            q = query(collection(db, "characters"));
        }

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            chars.push({ id: doc.id, ...doc.data() } as Character);
        });
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
    return chars;
};

export const deleteCharacter = async (characterId: string) => {
    try {
        await deleteDoc(doc(db, "characters", characterId));
    } catch (e) {
        console.error("Error deleting document: ", e);
        throw e;
    }
};

export { auth, db };
export type { User };
