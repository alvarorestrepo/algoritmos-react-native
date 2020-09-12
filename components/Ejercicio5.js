//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Ejercicio5 = () => {
  const [salario, guardarSalario] = useState(0);
  const SalarioMinimo = 950000;
  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ejercicio 5 Salario Minimo</Text>
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Escribe tu salario"
          style={styles.input}
          onChangeText={(texto) => guardarSalario(parseInt(texto))}
        />
      </View>
      {salario > SalarioMinimo * 3 ? (
        <Text style={styles.respuesta}>
          {salario} es MAYOR a 3 salario minimos
        </Text>
      ) : (
        <Text style={styles.respuesta}>
          {salario} es MENOR a 3 salarios minimos
        </Text>
      )}
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
export default Ejercicio5;
