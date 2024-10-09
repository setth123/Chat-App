import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';

const persistConfig={key:"root",storage,version:1};
//const persistedReducer=persistReducer(persistConfig)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
