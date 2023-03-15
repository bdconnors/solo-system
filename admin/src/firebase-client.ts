import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Analytics, getAnalytics } from "firebase/analytics";

export class FirebaseClient {
  public static getInstance():FirebaseApp {
    if(!getApps().length){
      return initializeApp( {
        apiKey: process.env.FIREBASE_API_KEY,
        appId: process.env.FIREBASE_APP_ID,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    });
    }else{
      return getApp();
    }
  }
  public static getAuthInstance():Auth {
    return getAuth(this.getInstance())
  }
  public static getAnalyticsInstance():Analytics{
    return getAnalytics(this.getInstance());
  }
}

