import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { IdosoContext } from './context/IdosoContext';

export default function Lista() {
  const { idosos } = useContext(IdosoContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>Idosos cadastrados:</Text>
      {idosos.map((idoso, index) => (
        <Text key={index}>{idoso.nome} - {idoso.idade} anos</Text>
      ))}
    </View>
  );
}