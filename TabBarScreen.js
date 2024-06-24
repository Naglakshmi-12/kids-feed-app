import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TabActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import NotificatonScreen from './NotificatonScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';



const Tab = createMaterialBottomTabNavigator();

const TabBarScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="purple"
      barStyle={{backgroundColor: 'skyblue'}}>

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Content',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="NotificatonScreen"
        component={NotificatonScreen}
        options={{
          tabBarLabel: 'Notificaton',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarScreen;