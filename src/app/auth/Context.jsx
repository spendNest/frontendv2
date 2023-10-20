"use client"
import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext();

function AppProvider({ children }) {
  const [wallet, setWallet] = useState({})
  const [provider, setProvider] = useState(localStorage.getItem("provider") ? JSON.parse(localStorage.getItem("provider")) : {})
  const [errMessage, setErrMessage] = useState('')
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [factoryContract, setFactoryContract] = useState({});
  const [childAddress, setChildAddress] = useState("");

  return (
    <AppContext.Provider value={{ wallet, setWallet, setProvider, provider, errMessage, setErrMessage, address, setAddress, isLoading, setIsLoading, isConnected, setIsConnected, factoryContract, setFactoryContract, childAddress, setChildAddress }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
