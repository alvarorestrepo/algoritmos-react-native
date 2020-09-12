//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Ejercicio3 = () => {
  const [num1, guardarNumero1] = useState(0);
  const [num2, guardarNumero2] = useState(0);
  const [num3, guardarNumero3] = useState(0);

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ejercicio 3 Ordenar</Text>
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Primer Numero"
          style={styles.input}
          onChangeText={(texto) => guardarNumero1(texto)}
        />
      </View>
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Segundo Numero"
          style={styles.input}
          onChangeText={(texto) => guardarNumero2(texto)}
        />
      </View>
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Tercer Numero"
          style={styles.input}
          onChangeText={(texto) => guardarNumero3(texto)}
        />
      </View>
      {(num1 > num2) & (num2 > num3) ? (
        <Text style={styles.respuesta}>
          El orden es: {num1} {num2} {num3}
        </Text>
      ) : null}
      {(num2 > num1) & (num1 > num3) ? (
        <Text style={styles.respuesta}>
          El orden es: {num2} {num1} {num3}
        </Text>
      ) : null}
      {(num3 > num2) & (num2 > num1) ? (
        <Text style={styles.respuesta}>
          El orden es: {num3} {num2} {num1}
        </Text>
      ) : null}
      {(num1 > num3) & (num3 > num2) ? (
        <Text style={styles.respuesta}>
          El orden es: {num1} {num3} {num2}
        </Text>
      ) : null}
      {(num3 > num1) & (num1 > num2) ? (
        <Text style={styles.respuesta}>
          El orden es: {num3} {num1} {num2}
        </Text>
      ) : null}
      {(num2 > num3) & (num3 > num1) ? (
        <Text style={styles.respuesta}>
          El orden es: {num2} {num3} {num1}
        </Text>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#FFF',
    marginHorizontal: '15%',
    marginVertical: '10%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16,

    elevation: 11,
  },
  input: {
    marginTop: 5,
    height: 30,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    margin: 20,
    color: '#333',
    fontSize: 15,
    padding: 5,
  },
  respuesta: {
    backgroundColor: '#999',
    color: '#fff',
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
});

//make this component available to the app
export default Ejercicio3;
