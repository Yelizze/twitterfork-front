import '../styles/globals.css';
import Head from 'next/head';

// Import reducers
import { Provider } from 'react-redux';
import tweets from '../reducers/tweets';
import user from '../reducers/user';

// Import local store
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

// Import combine reducers
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Combine reducers
const reducers = combineReducers({ tweets, user });

// clé de stockage
const persistConfig = { key: 'hackatweet', storage };

// Mise à jour du store
const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }),
});

// Rendre le store persistant
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
  );
}

export default App;
