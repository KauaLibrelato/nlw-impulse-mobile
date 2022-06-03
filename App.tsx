import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import {Home} from './src/screens/home/index'
import React from 'react';
import AppLoading from 'expo-app-loading'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar style ="light"/>
    <Home />
    </>
  );
}

