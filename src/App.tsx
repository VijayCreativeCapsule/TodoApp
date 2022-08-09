
import React, { createContext } from 'react';


import Home from './screens/Home';

import { StoreProvider,rootStore } from './store/rootStore';



const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <Home />
    </StoreProvider>
  );
};

export default App;
