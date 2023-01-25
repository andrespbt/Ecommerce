import { getAuth } from 'firebase/auth';

const auth = getAuth();
auth.languageCode = firebase.auth().useDeviceLanguage();
