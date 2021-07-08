import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ref } from "vue";

//Production
// const firebaseConfig = {
//   apiKey: "AIzaSyBtXcRqmcCfzh77LoVu9dFu34Me2GMP4Bs",
//   authDomain: "arena-coin.firebaseapp.com",
//   projectId: "arena-coin",
//   storageBucket: "arena-coin.appspot.com",
//   messagingSenderId: "772021799833",
//   appId: "1:772021799833:web:5a93a9c0f7f82436bca108",
//   measurementId: "G-Y9C13VQX2M",
// };

//Staging
const firebaseConfig = {
  apiKey: "AIzaSyA3wur6Kc4IHRgSiYWpl428EF3OiNLdbxI",
  authDomain: "arena-coin-staging.firebaseapp.com",
  projectId: "arena-coin-staging",
  storageBucket: "arena-coin-staging.appspot.com",
  messagingSenderId: "819254299221",
  appId: "1:819254299221:web:10c00974345238082f62dc",
  measurementId: "G-Y931EQ0MEN",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const appSettingsCollection = db.collection("settings");

export function appSettings() {
  const settings = ref([]);
  const getAppSettings = async (id: string) => {
    const settings = await appSettingsCollection.doc(id).get();
    return settings.exists ? settings.data() : null;
  };

  const updateAppSettings = (id: string, settings: []) => {
    return appSettingsCollection.doc(id).update(settings);
  };

  return { getAppSettings, updateAppSettings };
}

export default firebase;
