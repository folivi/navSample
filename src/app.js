import {Navigation} from 'react-native-navigation';

import { registerScreens } from '../screens';
registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'navSample.FirstTabScreen',
    },
    {
      label: 'two',
      screen: 'navSample.SecondTabScreen'
    }
  ]
});