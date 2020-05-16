import React, { useEffect, useReducer, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Component/PostList'
import PostForm from './Component/PostForm';
import CounterHook from './HooksComponent/CounterHook';
import HooksObject from './HooksComponent/HooksObject';
import HooksArray from './HooksComponent/HooksArray';
import NouseEffect from './HooksComponent/NouseEffect';
import UseEffect from './HooksComponent/HooksuseEffect';
import ClassMouse from './HooksComponent/ClassMouse';
import HookMouse from './HooksComponent/HookMouse';
import UseeffectCleanup from './HooksComponent/UseeffectCleanup';
import IntervalClass from './Component/IntervalClass';
import UseeffectDependency from './HooksComponent/UseeffectDependency';
import DataFetching from './HooksComponent/DataFetching';
import ComponentE from './Component/ComponentE';

import UseReducer from './HooksComponent/UseReducer';
import UseReducertwo from './HooksComponent/UseReducertwo';
import ComponentF from './HooksComponent/GlobalTest/ComponentF';
import ComponentA from './HooksComponent/GlobalTest/ComponentA';
import ComponentD from './HooksComponent/GlobalTest/ComponentD';
import DataFetchingone from './HooksComponent/DataFetchingone';
import DataFetchingtwo from './HooksComponent/DataFetchingtwo';
import ParentComp from './HooksComponent/Performance/ParentComp';
import Usememo from './HooksComponent/Performance/Usememo';
import FocusInput from './HooksComponent/FocusInput';
import ClassTimer from './HooksComponent/ClassTimer';
import HookTimer from './HooksComponent/HookTimer';
import DocTitle from './HooksComponent/CustomHooks/DocTitle';
import DocTitletwo from './HooksComponent/CustomHooks/DoctTitletwo';
import Counterone from './HooksComponent/CustomHooks/Counterone';
import Countertwo from './HooksComponent/CustomHooks/Countertwo';
import InputForm from './HooksComponent/CustomHooks/InputForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()
const InitialState = 10;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      {
        return state + 1
      }
    case 'decrement':
      {
        return state - 1
      }
    case 'reset':
      {
        return InitialState
      }
    default:
      {
        return state
      }

  }
}

function App() {
  const [Count, dispatch] = useReducer(reducer, InitialState)
  return (
    <div className="App">
      {/*<PostList />*/}
      {/*<PostForm />
      <CounterHook />
      <HooksObject />
      <HooksArray />
      <NouseEffect />
      <UseEffect />
      <ClassMouse />
      <HookMouse />
      <UseeffectCleanup />
      <IntervalClass />
      <UseeffectDependency />
      <DataFetching />

      <UserContext.Provider value={'Susee'}>
        <ChannelContext.Provider value={'react'}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <UserContext.Provider value={'Susee'}>
        <ChannelContext.Provider value={'react'}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <UseReducer />
      <UseReducertwo />
      <CountContext.Provider value={{ countState: Count, countDispatch: dispatch }}>
        Count - {Count}
        <ComponentD />
        <ComponentF />
        <ComponentA />
      </CountContext.Provider>


      <DataFetchingtwo />
      <HooksArray /> 
      <ParentComp />
      <Usememo />
      <FocusInput />
      <ClassTimer />
      <HookTimer /> */}
      <DocTitle />
      <DocTitletwo />
      <Counterone />
      <Countertwo />
      <InputForm />




    </div>
  );
}

export default App;
