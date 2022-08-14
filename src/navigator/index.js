import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {RakToken, Insurance, LocateUs, Chat, Login, Home} from '../container';
import {ThemeHelper, Icons} from '../helpers';
import {Colors, Metrics} from '../themes';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Insurance">
      <Stack.Screen
        name="Insurance"
        component={Insurance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: ThemeHelper.getAppPrimaryColor(),
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Landing"
      screenOptions={{
        tabBarStyle: {backgroundColor: Colors.background.secondary},
        tabBarActiveTintColor: ThemeHelper.getAppPrimaryColor(),
        tabBarInactiveTintColor: ThemeHelper.getAppPrimaryColor(),
        tabBarLabelStyle: {fontSize: Metrics.ratio(10)},
      }}>
      <Tab.Screen
        name="Landing"
        component={Stacks}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="wallet"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Live chat"
        component={Chat}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarLabel: 'Live chat',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="chat-processing-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RAKToken"
        component={RakToken}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarLabel: 'RAKToken',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="cellphone-key"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Locate us"
        component={LocateUs}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarLabel: 'Locate us',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="map-marker-radius-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
