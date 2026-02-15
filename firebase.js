const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO",
  databaseURL: "TU_DATABASE_URL",
  projectId: "TU_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
