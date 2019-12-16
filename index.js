/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '@app';
import { name as appName } from '@root/app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
