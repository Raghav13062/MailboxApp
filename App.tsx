import React from 'react';
import {LogBox} from 'react-native';
 import Route from './src/navigation';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
]);
LogBox.ignoreAllLogs();

const App: React.FC = () => {
  return <Route />;
};
export default App;
