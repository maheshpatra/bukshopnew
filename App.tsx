/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { MainNavigation } from "./src/Navigations/MainNavigation";
import 'react-native-gesture-handler';

function App(){

  useEffect(() => {
			  
	  }, []);

  return (
   
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
  );
}

export default App;
