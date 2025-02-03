import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { startListeningToNativeEvents } from './src/NativeEventEmitter';

const App = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchMessage = async () => {
  //     const msg = await getStaticMessage();
  //     setMessage(msg);
  //   };
  //   fetchMessage();
  // }, []);

  const [message, setMessage] = useState('');

  useEffect(() => {
    const stopListening = startListeningToNativeEvents(setMessage);

    return () => {
      stopListening(); // Clean up subscriptions
    };
  }, []);

  return (
    <View style={{ padding: 20 ,backgroundColor:'#ffffff'}}>
      <Text>{message}</Text>
    </View>
  );
};

export default App;
