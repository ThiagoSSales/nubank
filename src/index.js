import React from 'react';

import '~/config/ReactotronConfig';
import {StatusBar} from 'react-native';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8810ae" />
    <Routes />
  </>
);

export default App;
