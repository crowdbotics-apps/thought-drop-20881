import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn23117891Navigator from '../features/SignIn23117891/navigator';
import SignUp24117890Navigator from '../features/SignUp24117890/navigator';
import Tutorial4117889Navigator from '../features/Tutorial4117889/navigator';
import ArticleList5117888Navigator from '../features/ArticleList5117888/navigator';
import SignIn12117886Navigator from '../features/SignIn12117886/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn23117891: { screen: SignIn23117891Navigator },
SignUp24117890: { screen: SignUp24117890Navigator },
Tutorial4117889: { screen: Tutorial4117889Navigator },
ArticleList5117888: { screen: ArticleList5117888Navigator },
SignIn12117886: { screen: SignIn12117886Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
