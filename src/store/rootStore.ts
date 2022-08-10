import { types, Instance } from 'mobx-state-tree';
import React, { createContext } from 'react';
import TodoStore from './todoStore';
// import { todoStore, TodoStoreInitialState } from './todoStore';


export const rootStore = types
  .model({
      todoStore:TodoStore.Store
  })
  .create({
      todoStore:TodoStore.TodoStoreInitialState
  });


export const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider = RootStoreContext.Provider;


