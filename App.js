import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigation/Main.js';
import { ContextProvider } from './ContextState.js';


export default function App() {

  return (
    
   <ContextProvider>
    <Main/>
  </ContextProvider>
 
  );
}
