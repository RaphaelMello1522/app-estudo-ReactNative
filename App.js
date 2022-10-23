import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Cesta } from './src/telas/componentes/Cesta';
import Home from './src/telas/componentes/Home';

import mock from './src/mocks/Cesta'
export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      {/* <Cesta {...mock}/> */}
      <Home/>
      <StatusBar/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  topView: {
    flex: 0,
    backgroundColor: 'purple'
  }
})

