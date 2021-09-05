import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import {
    collection as getCollectionFromFirebase,
    addDoc,
    setDoc as setDocFromFirebase,
    getDocs as getDocsFromFirebase,
    query, where, doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD98qdlLzxrIGpgbZqJm6dtDvO8k1vmPpw",
  authDomain: "coderhouse-ecommerce-reactjs.firebaseapp.com",
  projectId: "coderhouse-ecommerce-reactjs",
  storageBucket: "coderhouse-ecommerce-reactjs.appspot.com",
  messagingSenderId: "347597075500",
  appId: "1:347597075500:web:db4807c181088e520a4d89"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getCollection = (name) => getCollectionFromFirebase(db,name)

export const getDocs = (collection) => getDocsFromFirebase(collection)

export const makeQuery = (nameDb, field, condition, value) => {
    const ref = getCollection(nameDb)
    return query(ref,where(field,condition,value))
}

export const setDoc = (obj, path, ...pathSegments) => setDocFromFirebase(doc(db, path, ...pathSegments), obj);

export const add = (obj) => addDoc(collection(db,'films',obj))

export const addNewOrder = (obj) => addDoc(collection(db,'orders'),obj)

export const newOrder = {
  buyer: "Alan",
  items: {id: 5, nombre: "Harry Potter"},
  date: '20-03-1996',
  total: 500
}

export const addOrder = () => addNewOrder(newOrder).then( ({id}) => {
  console.log(id)
}).catch( err => { console.log("no se pudo")})