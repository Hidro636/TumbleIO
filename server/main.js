import {Meteor} from 'meteor/meteor';

var bitcoin = require('bitcoinjs-lib');

var NETWORK = 'testnet';

Meteor.methods({
    testGenerate() {
        console.log('Generating address...');
        var keyPair = bitcoin.ECPair.makeRandom();
        var address = keyPair.getAddress();
        console.log('Address: ' + address);
        console.log('Key: ' + keyPair.toWIF() + "\n\n");
        return {
            address: address,
            key: keyPair.toWIF()
        }
    }
});

