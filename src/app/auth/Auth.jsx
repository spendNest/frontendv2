/** @format */
"use client";
import React, { useContext } from "react";
import {
  ComethWallet,
  ConnectAdaptor,
  SupportedNetworks,
  ComethProvider,
} from "@cometh/connect-sdk";
import { useAppContext } from "./Context";
import factoryAbi from "./abi/factory.json"
import childAbi from "./abi/child.json"
import { ethers } from "ethers";
import {factoryAddress} from './contractAddress'

export default function Auth() {
  const {
    provider,
    setProvider,
    setErrMessage,
    wallet,
    setWallet,
    address,
    setAddress,
    isLoading,
    setIsLoading,
    isConnected,
    setIsConnected,
    factoryContract,
    setFactoryContract,
    childAddress, 
    setChildAddress
  } = useAppContext();
  console.log(wallet)

  const apiKey = "15511501-2129-4f96-857a-762009df1f07";
  const walletAdaptor = new ConnectAdaptor({
    chainId: SupportedNetworks.MUMBAI,
    apiKey,
  });
  const instance = new ComethWallet({
    authAdapter: walletAdaptor,
    apiKey,
  });

  const createWallet = async () => {
    try {
      console.log("api", apiKey);
      const localStorageAddress = window.localStorage.getItem("walletAddress");

      if (localStorageAddress) {
        console.log("clicked")
        setIsLoading(true);
        await instance.connect(localStorageAddress);
        setAddress(instance.getAddress());
        const instanceProvider = new ComethProvider(instance);
        setProvider(instanceProvider);
        console.log("instance", instanceProvider);
        
        const FactoryContract = new ethers.Contract(factoryAddress,factoryAbi,  instanceProvider.getSigner());
        setFactoryContract(FactoryContract);
        const tx = await FactoryContract._returnAddress(instance.getAddress());
        setChildAddress(tx);
        console.log("tx", tx)
        // const txResponse = await tx.wait();
        // console.log('response',txResponse);
        // setProvider(instanceProvider);


      } else {
        console.log("clicked")
        setIsLoading(true);
        await instance.connect();
        const walletAddress = instance.getAddress();
        window.localStorage.setItem("walletAddress", walletAddress);
        setAddress(instance.getAddress());
        const instanceProvider = new ComethProvider(instance);
        const FactoryContract = new ethers.Contract(factoryAddress,factoryAbi,  instanceProvider.getSigner());
        setFactoryContract(FactoryContract);
        const tx = await FactoryContract.createAccount();
        // setTransactionSended(tx);
        const txResponse = await tx.wait();
        console.log('response',txResponse);
        setProvider(instanceProvider);
        console.log("instance", instanceProvider);
        
      }
      console.log("ins", instance);
      setWallet(instance);
      setIsConnected(true)
      setIsLoading(false);
      console.log('trans complete')
    } catch (error) {
      setErrMessage(error.message);
      console.log("error", error.message);
    }
  };

  const disconnect = async () => {
    if (wallet) {
      try {
        await wallet.logout();
        setIsConnected(false);
        setWallet(null);
        setProvider(null);
        setAddress("");

      } catch (e) {
        console.log(e.message);
        // displayError((e ).message);
      }
    }
  };

  return {
    createWallet,
    disconnect,
    provider,
    setProvider,
    setErrMessage,
    wallet,
    setWallet,
    address,
    setAddress,
    isLoading,
    setIsLoading,
    isConnected,
    setIsConnected,
    factoryContract, 
    setFactoryContract,
    childAddress, 
    setChildAddress
  };
}
