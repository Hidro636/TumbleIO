import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';

Template.tumbleForm.events({
    'keyup #toAddressTextBox, click #toAddressTextBox'(event) {
        if (event.target.value.length != 34) {
            $('#toAddressFormGroup').addClass("has-error");
            $('#toAddressFormGroup').removeClass('hasSuccess');
            $('#tumbleButton').addClass('disabled');
        } else {
            $('#toAddressFormGroup').removeClass('has-error');
            $('#tumbleButton').removeClass('disabled');
            $('#toAddressFormGroup').addClass('has-success');
        }
    },
    'click #tumbleButton'(event) {
        if ($("#tumbleButton").hasClass('disabled')) return;
        $('#confirmModal').modal('show');
    },
    'click #defaultTransactionFeeTextBox, keyup #defaultTransactionFeeTextBox'(event) {
        Session.set('transactionFee', event.target.value);
        Session.set('totalFee', (($('#defaultTransactionFeeTextBox').val() * $('#tumbleCountTextBox').val())) + .001);
    },
    'click #tumbleCountTextBox, keyup #tumbleCountTextBox'(event) {
        Session.set('tumbles', event.target.value);
        Session.set('totalFee', (($('#defaultTransactionFeeTextBox').val() * $('#tumbleCountTextBox').val())) + .001);
    }
});

Template.tumbleForm.helpers({
    estFee() {
        return Math.round((Number(Session.get('transactionFee')) * Number(Session.get('tumbles'))) * 1000000) / 1000000;
    }
});