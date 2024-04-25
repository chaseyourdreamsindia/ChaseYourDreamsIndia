import React, { useEffect } from 'react';
import Routes from './src/Routes/Routes';
import 'react-native-gesture-handler';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';


const App = () => {

  useEffect(()=>{
    if(Platform.OS === "android"){
      SplashScreen.hide();
    }
  },[]);

  return (
    <Provider store={Store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;