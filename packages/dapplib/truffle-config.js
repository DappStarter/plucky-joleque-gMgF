require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name release sad million imitate private equal genre'; 
let testAccounts = [
"0xf50753b3efc56a06833578a78a8362701697c9934a8d27cb2dae839034d8fc21",
"0xe60ce0206d3424cecd5413c81f17b3ba367ad867f07119ce7629631227de0c2a",
"0x21d72a7b3db47b823449f1ea294ce641797efe75b08ccf8560dfa26c668b3191",
"0xba6b7d3156808bcc532c68e990a422b740dfbf3abf549ee27ac02bea3bc73209",
"0x8f43cd3d752b61e6ba5957bd75c53093435ed0b18756911f50d1d6747be36b80",
"0x68cbe380e8b1e43b5272638069036c931aff56168d9d022b18353d32c47b8ba8",
"0xf5d05f92912ae5f02dc400f7c53b1913e5f7da3385a6356ddc2e4d69e7da5f8e",
"0x9905ad25a934531df531f56eba5c9181a2f6130dc5228e1a19e63844ca98a42f",
"0xf1e53b5f61e72bd89ee2118643fac726e8b6ddd5dc7f11b0b5124ece3f7f4a29",
"0xabbb2c70cc71772c6dd9c779d1a593806f64ad7a4e0277cd322e524faed3ed86"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


