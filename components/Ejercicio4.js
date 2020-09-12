//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Ejercicio4 = () => {
  const [num1, guardarNumero1] = useState(0);
  const [num2, guardarNumero2] = useState(0);
  const [num3, guardarNumero3] = useState(0);

  const suma = parseInt(num1) + parseInt(num2) + parseInt(num3);
  const promedio = suma / 3;
  const porsentaje = suma * 0.1;

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ejercicio 4 Varios Alg</Text>
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
      {(num1 > num2) & (num1 > num3) ? (
        <View style={styles.respuesta}>
          <Text style={styles.respuesta}>El numero mayor es: {num1} </Text>
          <Text style={styles.respuesta}>El promedio es: {promedio} </Text>
          <Text style={styles.respuesta}>La suma es: {suma} </Text>
          <Text style={styles.respuesta}>
            El 10% de la sumas es: {porsentaje}
          </Text>
        </View>
      ) : null}
      {(num2 > num1) & (num2 > num3) ? (
        <View style={styles.respuesta}>
          <Text style={styles.respuesta}>El numero mayor es: {num2}</Text>
          <Text style={styles.respuesta}>El promedio es: {promedio} </Text>
          <Text style={styles.respuesta}>La suma es: {suma} </Text>
          <Text style={styles.respuesta}>
            El 10% de la sumas es: {porsentaje}
          </Text>
        </View>
      ) : null}
      {(num3 > num2) & (num3 > num1) ? (
        <View style={styles.respuesta}>
          <Text style={styles.respuesta}>El numero mayor es: {num3}</Text>
          <Text style={styles.respuesta}>El promedio es: {promedio} </Text>
          <Text style={styles.respuesta}>La suma es: {suma} </Text>
          <Text style={styles.respuesta}>
            El 10% de la sumas es: {porsentaje}
          </Text>
        </View>
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
export default Ejercicio4;
