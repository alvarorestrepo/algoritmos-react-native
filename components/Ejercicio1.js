import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Ejercicio1 = () => {
  const [numero1, guardarNumero1] = useState(0);
  const [numero2, guardarNumero2] = useState(0);
  const [numero3, guardarNumero3] = useState(0);

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ejercicio 1 Triangulos</Text>
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

      {(numero1 === numero2) & (numero1 === numero3) ? (
        <Text style={styles.respuesta}>Es un triangulo Equilatero</Text>
      ) : null}
      {numero1 === numero2 && numero1 !== numero3 ? (
        <Text style={styles.respuesta}>Es un triangulo Isoseles</Text>
      ) : null}
      {numero3 === numero2 && numero3 !== numero1 ? (
        <Text style={styles.respuesta}>Es un triangulo Isoseles</Text>
      ) : null}
      {numero3 === numero1 && numero3 !== numero2 ? (
        <Text style={styles.respuesta}>Es un triangulo Isoseles</Text>
      ) : null}
      {numero1 !== numero2 && numero1 !== numero3 && numero2 !== numero3 ? (
        <Text style={styles.respuesta}>Es un triangulo Escaleno</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
    fontWeight: 'bold',
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
  respuesta: {
    backgroundColor: '#999',
    color: '#fff',
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Ejercicio1;
