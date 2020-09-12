import React from 'react';
import Titulo from './components/Titulo';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import Ejercicio5 from './components/Ejercicio5';
import Ejercicio6 from './components/Ejercicio6';
import Ejercicio7 from './components/Ejercicio7';
import Ejercicio8 from './components/Ejercicio8';
import Ejercicio9 from './components/Ejercicio9';
import Ejercicio10 from './components/Ejercicio10';

import {StyleSheet, ScrollView, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.fondocabezera}>
        <ScrollView>
          <Titulo />
          <Ejercicio1 />
          <Ejercicio2 />
          <Ejercicio3 />
          <Ejercicio4 />
          <Ejercicio5 />
          <Ejercicio6 />
          <Ejercicio7 />
          <Ejercicio8 />
          <Ejercicio9 />
          <Ejercicio10 />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fondocabezera: {
    flex: 1,
    backgroundColor: '#1BD',
  },
});

export default App;
