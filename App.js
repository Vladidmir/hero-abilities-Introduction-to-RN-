import React, {useState} from 'react';
import {View } from 'react-native';
import './src/firebase'


import MainStack from './src/components/pages/navigate'



import { globalStyles } from './src/styles/styles';



export default function App() {

  return (
    <View style={globalStyles.main}>
      <MainStack/>
    </View>

  )
}
