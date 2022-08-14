import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import useRakToken from './useRakToken';

function RakToken() {
  const {name} = useRakToken();
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

export default RakToken;
