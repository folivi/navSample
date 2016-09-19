import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';

export function registerScreens() {
  Navigation.registerComponent('navSample.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('navSample.SecondTabScreen', () => SecondTabScreen);
}