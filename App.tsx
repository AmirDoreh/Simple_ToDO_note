import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import RootStack from './src/router/RootStack';
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <RootStack />
        <FlashMessage position="top" />
     </PersistGate>
    </Provider>
  )
};

export default App;
