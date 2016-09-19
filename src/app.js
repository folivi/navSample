import {Navigation} from 'react-native-navigation';
import I18n from './locales/i18n';
import { registerScreens } from '../screens';
import { iconsMap, iconsLoaded } from '../helpers/icons-loader';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: I18n.t('one'),
      screen: 'navSample.FirstTabScreen',
      icon: require('../img/one.png'),
    },
    {
      label: I18n.t('two'),
      screen: 'navSample.SecondTabScreen',
      icon: require('../img/two.png'),
    }
  ]
});