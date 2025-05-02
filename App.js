import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { startListeningToNativeEvents } from './src/NativeEventEmitter';
import { getStaticMessage } from './src/Greeting';
 import { getGreeting } from './src/Greeting';
const App = () => {
   const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchMessage = async () => {
  //     const msg = await getStaticMessage();
  //     setMessage(msg);
  //   };
  //   fetchMessage();
  // }, []);

  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const stopListening = startListeningToNativeEvents(setMessage);

  //   return () => {
  //     stopListening(); // Clean up subscriptions
  //   };
  // }, []);
  useEffect(() => {
    getGreeting().then(setMessage);
    getGreeting().then(console.log);
  }, []);

  return (
    <View style={{ padding: 20 ,flex:1,
      justifyContent: 'center',alignContent: 'center',
    }}>
      <Text style={{color:'white',fontSize:20}}>{message}</Text>
      <Text style={{color:'white'}}>Hello World</Text>
    </View>
  );
};

export default App;
