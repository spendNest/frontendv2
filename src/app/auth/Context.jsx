"use client"
import React, { createContext, useContext, useState } from 'react'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://api.studio.thegraph.com/query/56209/spendnest/version/latest',
  exchanges: [cacheExchange, fetchExchange],
});

const AppContext = createContext();

function AppProvider({ children }) {
  const [wallet, setWallet] = useState({})
  const [provider, setProvider] = useState({})
  const [errMessage, setErrMessage] = useState('')
  const [sidebar, setSideBar] = useState('')
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [factoryContract, setFactoryContract] = useState({});
  const [childAddress, setChildAddress] = useState("");

  return (
    <Provider value={client}>

      <AppContext.Provider value={{ wallet, setWallet, setProvider, provider, errMessage, setErrMessage, address, setAddress, isLoading, setIsLoading, isConnected, setIsConnected, factoryContract, setFactoryContract, childAddress, setChildAddress, sidebar, setSideBar }}>{children}</AppContext.Provider>
    </Provider>
  )
}

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
