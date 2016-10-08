import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/tumbleform.html';

import '../imports/ui/tumbleform.js';


Meteor.startup(function () {
    Session.setDefault('transactionFee', 0.0001);
    Session.setDefault('tumbles', 5);
});