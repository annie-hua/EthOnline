// src/App.js

import React from 'react';
import './App.css';
import { SafeFactory, EthersAdapter } from '@safe-global/protocol-kit';
import { ethers } from 'ethers';

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const ethAdapter = new EthersAdapter({
    ethers, 
    signer 
  });

  const safeFactory = await SafeFactory.create({ ethAdapter });

 
  const createSafe = async () => {

    const safeAccountConfig = {
      owners: ['0x...', '0x...'], 
      threshold: 2
    }

    const safeSdk = await safeFactory.deploySafe({
      safeAccountConfig
    });

    console.log('New Safe created!', safeSdk.getAddress());
  }

  const loginWithWallet = () => {
    // Here, integrate with Cometh API to login with a wallet.
    console.log("Logging in with an existing wallet...");
  };

  const createWallet = () => {
    // Here, integrate with Cometh API to login with a wallet.
    console.log("Sign up ...");
  };

  return (
    <div className="App">
      <h1>Create a Safe</h1>
      <button onClick={createSafe}>Create Safe</button>
      <button onClick={createWallet}>Login with Wallet</button>
      <button onClick={loginWithWallet}>Login with Wallet</button>
    </div>
  );
}

export default App;
