import {Template} from 'meteor/templating';

import './main.html';
import '../imports/ui/tumbleform.html';

import '../imports/ui/tumbleform.js';


Meteor.startup(function () {
    Session.setDefault('transactionFee', 0.0001);
    Session.setDefault('tumbles', 5);
    Session.setDefault('totalFee', (.0001 * 5) + (.001));
});

Template.modals.helpers({
   minimumAmount() {
       return Number(Session.get('totalFee')) + 0.0001;
   }
});