import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import CameraScreen from './src/screens/CameraScreen';
import ArrayList from './src/screens/ArrayList';

const navigator = createStackNavigator(
  {
    HomeScreen : HomeScreen ,
    ImageScreen : ImageScreen,
    CameraScreen : CameraScreen,
    ArrayList : ArrayList,

  },
  {
    initialRouteName: 'ArrayList',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
