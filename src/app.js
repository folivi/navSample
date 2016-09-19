import {Navigation} from 'react-native-navigation';
import I18n from './locales/i18n';
import { registerScreens } from '../screens';
import { iconsMap, iconsLoaded } from '../helpers/icons-loader';

registerScreens();

let barsIcon;
let homeIcon;
let barsChartIcon;
let cartIcon;

export default class App {
  constructor(){

  iconsLoaded
      .then(() => {
        barsIcon = iconsMap['navicon'];
        barsChartIcon = iconsMap['bar-chart'];              
        calendarIcon = iconsMap['calendar']; 
        cartIcon = iconsMap['shopping-cart'];

        this.startApp();
    }      
  )

};
  startApp() {
    
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: I18n.t('one'),
          screen: 'navSample.FirstTabScreen',
          icon: cartIcon,
          //icon: require('../img/one.png'),
          navigatorButtons: {
            leftButtons: [
              {
                icon: require('../img/two.png'),
                id: 'toggle-menu'
              }
            ],
          }
        },
        {
          label: I18n.t('two'),
          screen: 'navSample.SecondTabScreen',
          icon: calendarIcon,
          navigatorButtons: {
            leftButtons: [
              {
                icon: barsChartIcon,
                id: 'toggle-menu'
              }
            ],
          }
        }
      ],
      tabsStyle: { 
        tabBarButtonColor: '#fff', 
        tabBarSelectedButtonColor: '#000',
        tabBarBackgroundColor: '#f53752'
      },
      drawer: {
          type: 'MMDrawer',
          animationType: 'slide',
          left: {
              screen: 'navSample.SideMenu'
          },
      }
    });
  }
 
};


