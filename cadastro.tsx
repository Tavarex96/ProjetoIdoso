import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { IdosoContext } from './context/IdosoContext';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const { adicionarIdoso } = useContext(IdosoContext);

  function handleSalvar() {
    if (nome && idade) {
      adicionarIdoso({ nome, idade });
      setNome('');
      setIdade('');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} keyboardType="numeric" style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}