"use client"
import React, {createContext, useState } from 'react'


export const AppContext = createContext();

export default function Context({children}) {
        const [wallet, setWallet] = useState({})
        const [provider, setProvider] = useState({})
        const [errMessage, setErrMessage] = useState('')
        const [address, setAddress] = useState('')
        const [isLoading, setIsLoading] = useState(false)
        const [isConnected, setIsConnected] = useState(false)
  return (
    <AppContext.Provider value={{wallet, setWallet, setProvider, provider, errMessage, setErrMessage, address, setAddress, isLoading, setIsLoading, isConnected, setIsConnected}}>{children}</AppContext.Provider>
  )
}
