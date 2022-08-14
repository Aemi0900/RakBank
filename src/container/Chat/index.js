import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import useChat from './useChat';

function Chat() {
  const {name} = useChat();
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

export default Chat;
