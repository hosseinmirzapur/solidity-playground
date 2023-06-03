const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    "inf_SmartContractPlayground_near-testnet": {
      network_id: 0,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('d:\\Projects\\solidity\\simple-storage\\mnemonic.env', 'utf-8'), "https://near-testnet.infura.io/v3/7f3337c8fa834a128b9b3665b9cae994")
    },
    inf_SmartContractPlayground_sepolia: {
      network_id: 11155111,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('d:\\Projects\\solidity\\simple-storage\\mnemonic.env', 'utf-8'), "https://sepolia.infura.io/v3/7f3337c8fa834a128b9b3665b9cae994")
    },
    inf_SmartContractPlayground_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('d:\\Projects\\solidity\\simple-storage\\mnemonic.env', 'utf-8'), "https://goerli.infura.io/v3/7f3337c8fa834a128b9b3665b9cae994")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.20"
    }
  }
};
