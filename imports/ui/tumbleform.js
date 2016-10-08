import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';

Template.tumbleForm.events({
    'keyup #toAddressTextBox'(event) {
        if (event.target.value.length != 34) {
            $('#toAddressFormGroup').addClass("has-error");
            $('#tumbleButton').addClass('disabled');
        } else {
            $('#toAddressFormGroup').removeClass('has-error');
            $('#tumbleButton').removeClass('disabled');
        }
    },
    'click #tumbleButton'(event) {
        if ($("#tumbleButton").hasClass('disabled')) return;


        console.log(Number($('#defaultTransactionFeeTextBox').val()) * Number($('#tumbleCountTextBox').val()))
    },
    'click #defaultTransactionFeeTextBox, keyup #defaultTransactionFeeTextBox'(event) {
        Session.set('transactionFee', event.target.value);
    },
    'click #tumbleCountTextBox, keyup #tumbleCountTextBox'(event) {
        Session.set('tumbles', event.target.value);
    }
});

Template.tumbleForm.helpers({
    estFee() {
        return Math.round((Number(Session.get('transactionFee')) * Number(Session.get('tumbles'))) * 1000000) / 1000000;
    }
});