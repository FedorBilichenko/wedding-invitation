import {initializeApp } from "firebase/app";
import {getFirestore, doc, getDocs, collection} from "firebase/firestore/lite";
import XLSX from "xlsx";

const firebaseConfig = {
  apiKey: "AIzaSyBbV-AAHmSmEgZqbeeu_hLimkcZfUPb-Dg",
  authDomain: "wedding-invitation-bff82.firebaseapp.com",
  projectId: "wedding-invitation-bff82",
  storageBucket: "wedding-invitation-bff82.appspot.com",
  messagingSenderId: "506587225924",
  appId: "1:506587225924:web:0f1e76cc4ad182852a8111"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docSnap = await getDocs(collection(db, 'users'));
const data = [];
const createLink = uid => `https://fedyalovesnastya.netlify.app/?uid=${uid}`;

docSnap.forEach((doc) => {
  const docData = doc.data();
  const id = doc.id;
  const alcohol = docData.alcohol;
  data.push({...docData, id, alcohol: Array.isArray(alcohol) ? alcohol.join(',') : '', link: createLink(id)})
});

const workSheet = XLSX.utils.json_to_sheet(data);
const workBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workBook, workSheet, "Гости");
XLSX.writeFile(workBook, "./scripts/guests.xlsx");
