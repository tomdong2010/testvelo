
var Web3=require("web3")
var express=require("express")
var app = express()
var fs=require("fs")
var server=require("http").createServer(app)
var net=require("net")


var keythereum = require("keythereum");

var keystore = require('./0x8714d1ab13d0243ade8d7804fec611e1c0b32db5.json');;
var keystore2 = require('./0xa6c3fa2b65e57cff91418fe349d470808f9ee23f.json');;

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:22001"));
}

// create express middleware
app.get("/",function(req, res) {
    var data = '<h1>hello world</h1>';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);

});

app.get("/seepri",function(req, res) {
    var address= "0xa6c3fa2b65e57cff91418fe349d470808f9ee23f";//要小写
    const password = "123456";
    var keyObject = keythereum.importFromFile(address, datadir);
    var privateKey = keythereum.recover(password, keyObject);
  res.send(privateKey.toString('hex'))

});
app.get("/newaccount",function(req, res) {

   // web3.eth.personal.newAccount("123456").then(function (address) {
   //     res.send(address)
   // })


     res.send(web3.eth.accounts.create("123456"))

});
//test heart
app.get("/heart/setGovernor",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");

    var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x7717483763325c8a0a65F3DdCB82FfFFAF1F8380";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    const method =  contract.methods.setGovernor("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f");
    contractExecute(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
            // 发送响应数据
            contract.methods.isGovernor("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f").call().then(function (result) {
                // 发送响应数据
                res.send(result);

            });

        })
        .catch( (e)=>{
            console.log('error', e);

        })



});
app.get("/heart/setTrustedPartner",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");

    var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x7717483763325c8a0a65F3DdCB82FfFFAF1F8380";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    const method =  contract.methods.setTrustedPartner("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f");
    contractExecute(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
            // 发送响应数据
            contract.methods.isTrustedPartner("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f").call().then(function (result) {
                // 发送响应数据
                res.send(result);

            });

        })
        .catch( (e)=>{
            console.log('error', e);

        })



});
//get eth
app.get("/geteth",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");
    sendEth(web3, account, '0xa6c3fa2b65e57cff91418fe349d470808f9ee23f', '100000000000')
        .then((r)=>{
            console.log(r);
          res.send("ok")
        })
        .catch (e=>{
            console.error(e);
            res.send("err")

        })



});
//test drs
app.get("/drs/setup",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore2, "123456");

    var abi = [{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x7be625bbff8EE109dAc2680cC71f2167cb741e59";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.setup(
        Web3.utils.fromAscii("VELO"),
        Web3.utils.fromAscii("USD"),
        "vUSD",
        1
    );
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
        })
        .catch( (e)=>{
            console.log('error', e);
        })



});
app.get("/drs/redeem",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore2, "123456");

    var abi = [{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x7be625bbff8EE109dAc2680cC71f2167cb741e59";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
   contract.methods.redeem(
       2000000000, "vTHB"
    ).call().then(function (result) {
       // 发送响应数据
       res.send(result);

   });




});


function sendEth(web3, fromAccount, toAddress, eth_amount) {

    var rawTx = {
        to: toAddress,
        from: fromAccount.address,
        nonce: '0x00',
        value: web3.utils.toWei(eth_amount),
        gasPrice: '0x09184e72a000',
        gasLimit: '0xa410', //
    }


    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from)
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);

        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        return fromAccount.signTransaction(rawTx)



    }).then((tx) => {
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}


function contractExecute(web3, account, contract, method) {


    var rawTx = {
        to: contract.options.address,
        from: account.address,
        nonce: '0x00',
        value: '0x',
        gasPrice: '0x5',
        gasLimit: '21000', //
        data: method.encodeABI()
    }

    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from),
        method.estimateGas()
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);
        rawTx.gasLimit = results[2] * 2;
        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        console.log('gasLimit', rawTx.gasLimit);
        return account.signTransaction(rawTx)



    }).then((tx) => {
        console.log(tx);
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}

function contractExecute2(web3, account, contract, method) {


    var rawTx = {
        to: contract.options.address,
        from: account.address,
        nonce: '0x0',
        value: '0x',
        gasPrice: '0x5',
        gasLimit: '21000', //
        data: method.encodeABI()
    }

    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from),
        method.estimateGas()
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);
        rawTx.gasLimit = results[2] * 2;
        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        console.log('gasLimit', rawTx.gasLimit);
        return account.signTransaction(rawTx)

    }).then((tx) => {
        console.log(tx);
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}


server.listen(8080);

