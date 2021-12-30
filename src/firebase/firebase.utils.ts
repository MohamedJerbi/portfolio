import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDnM8GqmLb89PEWFGWBld-EPAeESa_Ktpc",
  authDomain: "portoflio-2d2a3.firebaseapp.com",
  databaseURL: "https://portoflio-2d2a3.firebaseio.com",
  projectId: "portoflio-2d2a3",
  storageBucket: "portoflio-2d2a3.appspot.com",
  messagingSenderId: "151608738427",
  appId: "1:151608738427:web:cddf4f2127473c130118de",
  measurementId: "G-K7BH24DZ0D",
});

export const firestore = getFirestore();

export const sendContact: (
  fullName: string,
  email: string,
  subject: string,
  details: string
) => Promise<string> = async (fullName, email, subject, details) => {
  return new Promise(async function (resolve, reject) {
    const createdAt = new Date();
    addDoc(collection(firestore, "contact"), {
      fullName,
      email,
      subject,
      details,
      createdAt,
    })
      .then(() => resolve("Done"))
      .catch((e) => reject("Error:" + e.toString()));
    setTimeout(() => reject("Internet Error"), 10000);
  });
};
