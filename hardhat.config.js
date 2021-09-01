require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

const projectId = "7b5bd6ee74714cd7ab74b41b6d5f537a";

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
      // initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/${projectId}",
      accounts: []
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/${projectId}",
      accounts: []
    },
    
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
