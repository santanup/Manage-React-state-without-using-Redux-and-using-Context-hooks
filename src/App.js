import React from 'react';
import './App.css';
import {ThemeProvider} from "./containers/ThemeContainer";
import ContextHookDemoComponent from "./components/ContextHookDemoComponent";
import {UserProvider} from "./containers/UserContainer";
import ContextReducerDemoComponent from "./components/ContextReducerDemoComponent";

function App() {

    // Here I have wrapped the component into the providers
  return (
      <ThemeProvider>
          <ContextHookDemoComponent/>
          <UserProvider>
              <ContextReducerDemoComponent/>
          </UserProvider>
      </ThemeProvider>
  );
}

export default App;
