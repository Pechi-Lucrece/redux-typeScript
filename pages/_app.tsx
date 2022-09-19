import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "../node_modules/primeflex/primeflex.css"
import {Provider} from 'react-redux' 
import {store} from '../store/store'
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
   )
}

export default MyApp
