import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import SideMenu from './SideMenu';

export function registerScreens() {
  Navigation.registerComponent('navSample.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('navSample.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('navSample.SideMenu', () => SideMenu);
}