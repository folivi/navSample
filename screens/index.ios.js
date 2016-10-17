import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import SideMenu from './SideMenu';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('navSample.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('navSample.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('navSample.SideMenu', () => SideMenu, store, Provider);
}
