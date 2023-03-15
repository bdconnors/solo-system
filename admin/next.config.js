/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env:{
    BASE_SERVER_URL: "http://localhost:8000",
    TOKEN_KEY:"TEFVR0ggSVQgVVAsIEZVWlpCQUxM",
    APP_NAME:"solo-cms",
    FIREBASE_API_KEY:"AIzaSyAByVvs6r_B9-noQnrQ3NoIdEbpaRNNQ90",
    FIREBASE_AUTH_DOMAIN:"app-admin-2b6ad.firebaseapp.com",
    FIREBASE_PROJECT_ID:"app-admin-2b6ad",
    FIREBASE_STORAGE_BUCKET:"app-admin-2b6ad.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID:"180885932595",
    FIREBASE_APP_ID:"1:180885932595:web:c8201be31ec6647c327146",
    FIREBASE_MEASUREMENT_ID:"G-BQ108JXE6H"
  }
  /**env:{
    BASE_SERVER_URL: "http://localhost:8000",
    TOKEN_KEY:"TEFVR0ggSVQgVVAsIEZVWlpCQUxM",
    APP_NAME:"solo-cms",
    FIREBASE_API_KEY:"AIzaSyCgzWTyv3ixIZlJlKRqVtPYELFco7jeOT8",
    FIREBASE_AUTH_DOMAIN:"solo-809fa.firebaseapp.com",
    FIREBASE_PROJECT_ID:"solo-809fa",
    FIREBASE_STORAGE_BUCKET:"solo-809fa.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID:"1000861048414",
    FIREBASE_APP_ID:"1:1000861048414:web:f941d6ec49d5a413585ecf",
    FIREBASE_MEASUREMENT_ID:"G-PXMMSVN827"
  }**/
}

module.exports = nextConfig
