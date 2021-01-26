import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComingSoon from './pages/ComingSoon';
import Following from './pages/Following';
import { Ionicons, Foundation, MaterialIcons} from '@expo/vector-icons';
import colors from './styles/colors';
import { color } from 'react-native-reanimated';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style:{
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle:{
          flex: 0,
          width: 0,
          height: 20,
        },
        labelStyle:{
          fontFamily:'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.black,
      }}    
    >

      <Screen name="Inicio" component={Following} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <Foundation
                name="home"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            )
          }
      }}/>
      <Screen name="Buscar" component={ComingSoon} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <Ionicons
                name="ios-search"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            )
          }
      }}/>
      <Screen name="Sua Biblioteca" component={ComingSoon} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <Ionicons
                name="ios-albums"
                size={size}
                color={focused ? colors.black : colors.gray}
              />
            )
          }
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
