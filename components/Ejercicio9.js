//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Ejercicio9 = () => {
  const [Mes, guardarMes] = useState(0);

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Ejercicio 9 Meses</Text>
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Escribe tu salario"
          style={styles.input}
          onChangeText={(texto) => guardarMes(parseInt(texto))}
        />
      </View>
      {Mes === 1 ? <Text style={styles.respuesta}>Enero</Text> : null}
      {Mes === 2 ? <Text style={styles.respuesta}>Febrero</Text> : null}
      {Mes === 3 ? <Text style={styles.respuesta}>Marzo</Text> : null}
      {Mes === 4 ? <Text style={styles.respuesta}>Abril</Text> : null}
      {Mes === 5 ? <Text style={styles.respuesta}>Mayo</Text> : null}
      {Mes === 6 ? <Text style={styles.respuesta}>Junio</Text> : null}
      {Mes === 7 ? <Text style={styles.respuesta}>Julio</Text> : null}
      {Mes === 8 ? <Text style={styles.respuesta}>Agosto</Text> : null}
      {Mes === 9 ? <Text style={styles.respuesta}>Septiembre</Text> : null}
      {Mes === 10 ? <Text style={styles.respuesta}>Octubre</Text> : null}
      {Mes === 11 ? <Text style={styles.respuesta}>Noviembre</Text> : null}
      {Mes === 12 ? <Text style={styles.respuesta}>Diciembre</Text> : null}
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
export default Ejercicio9;
