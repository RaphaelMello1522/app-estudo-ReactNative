import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Cesta } from './src/telas/componentes/Cesta';

import mock from './src/mocks/Cesta'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cesta {...mock}/>
      <StatusBar/>
    </SafeAreaView>
  );
}

