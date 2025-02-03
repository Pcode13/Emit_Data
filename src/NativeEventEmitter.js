import { NativeModules, NativeEventEmitter } from 'react-native';

const { NativeEventEmitterData } = NativeModules;
// const moduleEmitter1 = new NativeEventEmitter(NativeEventEmitter);
// export const getStaticMessage = async () => {
//     if (!NativeEventEmitter) {
//         console.warn("MyNativeModule is not available");
//       }

//   try {
//     const message = await NativeEventEmitter.getStaticMessage();
//     return message;
//   } catch (error) {
//     console.error(error);
//   }
// };

// cd 


const nativeModuleEmitter = new NativeEventEmitter(NativeEventEmitterData);

export const startListeningToNativeEvents = (onDataReceived) => {
  const subscriptionAndroid = nativeModuleEmitter.addListener(
    'dataFromNativeAndroid',
    (data) => {
      onDataReceived(data);
    }
  );

 

 
  NativeEventEmitterData.startEmittingData();

  return () => {
    subscriptionAndroid.remove();
  };
};