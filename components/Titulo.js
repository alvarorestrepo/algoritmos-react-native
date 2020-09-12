import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Titulo = () => {
  return (
    <View>
      <Text style={styles.cabezera}>Algoritmos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cabezera: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Titulo;
