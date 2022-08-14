import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import useLocateUs from './useLocateUs';

function LocateUs() {
  const {name} = useLocateUs();
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

export default LocateUs;
