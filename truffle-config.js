const HDWalletProvider = require("@truffle/hdwallet-provider");
const { privateKey, publicKey } = require("./privatekey");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: new HDWalletProvider(
        privateKey,
        "https://rinkeby.infura.io/v3/86b8675879914aab9dc6263b77e930f7"
      ),
      network_id: 4,
      skipDryRun: true,
      from: publicKey,
      networkCheckTimeout: "10000000",
      gasPrice: 201e9,
    },
    live: {
      provider: function() {
        return new HDWalletProvider(
          privateKey,
          "https://mainnet.infura.io/v3/a07aaaeb8e1c4277a1d9354b5b420548"
        );
      },
      network_id: 1,
      gasPrice: 81e9,
      from: publicKey,
      gas: 8e6,
    },
  },

  compilers: {
    solc: {
      version: "0.5.16",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
