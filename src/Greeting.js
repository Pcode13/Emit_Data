import { NativeModules } from 'react-native';

const { GreetingModule } = NativeModules;

export async function getGreeting() {
  return await GreetingModule.getGreeting();
}
