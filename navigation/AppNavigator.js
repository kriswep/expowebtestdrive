import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';

import MainTabNavigator from './MainTabNavigator';

const createApp = Platform.select({
  web: config => createBrowserApp(config, { history: 'hash'}),
  default: config => createAppContainer(config),
})

export default createApp(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
