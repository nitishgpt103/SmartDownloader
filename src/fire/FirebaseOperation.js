import { database} from "./firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";


class DataService {
  addData = ( refname, newData ) => {
    const CollectionRef = collection(database, refname);
    return CollectionRef.update({
        regions: database.FieldValue.arrayUnion(newData)
    });
  };

  setData = (collection , document, data) => {
    return setDoc(doc(database, collection , document), data);
  };

  updateData = (collection, document , newData) => {
    const DataDoc = doc(database, collection , document);
    return updateDoc(DataDoc, newData);
  };

  deleteData = (id , refname) => {
    const DataDoc = doc(database, refname , id);
    return deleteDoc(DataDoc);
  };

  getAll = (refname) => {
    const CollectionRef = collection(database, refname);
    return getDocs(CollectionRef);
  };

  getData = (collection , document) => {
    const Doc = doc(database, collection , document);
    return getDoc(Doc);
  };
  
}

export default new DataService();