require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stove rival night eternal harvest fantasy equal gaze'; 
let testAccounts = [
"0xa9d6c67740d2cf7ad19bd9d858cb6b88eda6026da2d3b80a2800ef963176e8d6",
"0x10006ebd24a5f5046352f491673923dc631ffc5adb1337c139d94ea24ae897e9",
"0xdcddbb08dff4fdaaf072abe78fa14fcb1d751f23ff9d5a56cd0eb8107c3cc8be",
"0x5a3abd2bec5013f389f7e11b7d0e1631b5970e7bd667e35890834e7151773d6f",
"0x78538ca44ca0635acfe7436984312093a2ad200860d9f4b02606027b244b5d0d",
"0xf896c0961e60c63c6358fefab0bc211e6bf6c7d12745b0dbba47ac411f4d4e5a",
"0x6dd6b101bdba17acf4a7a687e36ece9ef282b48a88fd777f60ea2641609d2791",
"0xcba711582a4be9c5308d2ced98f186500f885c8b368fa6b30bc5d8940ce312cc",
"0x2eda603c548b2a3d3b887f450ad86d1b5058b59c83fc988155204531df4a634c",
"0x4f2963201e0b7ab22894153a53c6e33b2326a3d3bc1e6c90c3fa7960a04e2b2e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

