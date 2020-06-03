
var Web3=require("web3")
var express=require("express")
var app = express()
var fs=require("fs")
var server=require("http").createServer(app)
var net=require("net")

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
app.get("/newaccount",function(req, res) {

   // web3.eth.personal.newAccount("123456").then(function (address) {
   //     res.send(address)
   // })


     res.send(web3.eth.accounts.create("123456"))

});

app.get("/drs/setup",function(req, res) {
 web3.eth.personal.unlockAccount("0x1E9b7DCC2b7A8A41F46DE6Fc2A55D7BA71D5AA56","123456",200).then(function (a) {

     res.send(a)
 })


    web3.eth.getAccounts()
        .then(console.log);
    // 合约ABI
//     var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
//     // 合约地址
//     var address = "0xee66390eEE7D0fD09C1dcDD726e1Cc17776b346a";
// // 通过ABI和地址获取已部署的合约对象
//     var con = new web3.eth.Contract(abi,address)
    // 调用智能合约方法
    // var helloResult = con.methods.setGovernor("0x091995D77098A257f087C6449DCebF3F359C5194").call().then(function (result) {
    //
    //     // // 发送响应数据
    //     // res.send(result);
    //   con.methods.isGovernor("0x091995D77098A257f087C6449DCebF3F359C5194").call().then(function (result) {
    //
    //         // 发送响应数据
    //         res.send(result);
    //
    //     })
    //
    // })

    // web3.eth.getAccounts()
    //     .then(console.log);


});

server.listen(8080);

