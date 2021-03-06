require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
  const infuraId = 'daed3933d0f343808a653d67b2047ac2';
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 3464576876
    },
   
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
   
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

