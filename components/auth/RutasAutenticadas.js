import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import StackHome from './StackHome';
import Follow from './Follow';
import Add from './Add';
import Search from './Search';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator(
    {
        Home:{
            screen: StackHome
        },
        Search:{
            screen: Search
        },
        Add:{
            screen: Add
        },
        Follow: {
            screen: Follow
        },
        Profile: {
            screen: Profile
        }
    },
    {
        tabBarPosition:'top'
    }
);

export default createAppContainer(RutasAutenticadas);