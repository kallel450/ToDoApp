import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const handleAdicionartarefa = () => {
    if (tarefaAtual.trim() === '') 
      {
      return;
      }
    setListaTarefas([...listaTarefas, tarefaAtual]);
    setTarefaAtual('');
  }

return (
  <View>
    <Text style={styles.title}> Minhas tarefas</Text>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite o reparo necessario..."
        value={tarefaAtual}
        onChangeText={setTarefaAtual}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={handleAdicionartarefa}>
        <Text style={styles.buttontext}>+</Text>
      </TouchableOpacity>
  </View>
  <ScrollView
    style={styles.scrollArea}
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
>
  <View style={styles.listaBox}>
    {listaTarefas.map((tarefa, index) => (
      <View key={index} style={styles.CardTarefa}>
        <Text style={styles.textoTarefa}>• {tarefa}</Text>
      </View>
    ))}
  </View>

   </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  contadorTexto: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 35, 
    marginBottom: 20, 
  },
  inputContainer: { 
    flexDirection: 'row', 
    marginBottom: 20,
    width: '100%',
  },
  input: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginRight: 10,
  },
  listaBox: {
    marginTop: 10,
    width: '100%',
  },
  cardTarefa: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  textoTarefa: { 
    fontSize: 16, 
  },
})