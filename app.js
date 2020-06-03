
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
    var address= "0x8714d1ab13d0243ade8d7804fec611e1c0b32db5";//要小写
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


server.listen(8080);

