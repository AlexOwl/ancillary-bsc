"use strict";
exports.__esModule = true;
exports.getDefaultProvider = void 0;
var ethers_1 = require("ethers");
var bsc_moralis_provider_1 = require("./bsc-moralis-provider");
var bsc_pocket_provider_1 = require("./bsc-pocket-provider");
var bscscan_provider_1 = require("./bscscan-provider");
function getDefaultProvider(network, config) {
    var providers = [];
    providers.push(new bscscan_provider_1.BscscanProvider(network, (config || {}).bscscan || undefined));
    providers.push(new bsc_pocket_provider_1.BscPocketProvider(network, (config || {}).bscpocket || undefined));
    if (config && config.bscmoralis && (typeof config.bscmoralis === "string" || config.bscmoralis.apiKey)) {
        providers.push(new bsc_moralis_provider_1.BscMoralisProvider(network, config.bscmoralis));
    }
    return new ethers_1.ethers.providers.FallbackProvider(providers, Math.min(providers.length, 2));
}
exports.getDefaultProvider = getDefaultProvider;
//# sourceMappingURL=default-provider.js.map