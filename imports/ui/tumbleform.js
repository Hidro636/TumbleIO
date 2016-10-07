import {Template} from 'meteor/templating';

Template.tumbleForm.events({
    'keyup #toAddressTextBox'(event) {
        if (event.target.value.length != 34) {
            $('#toAddressFormGroup').addClass("has-error");
        } else {
            $('#toAddressFormGroup').removeClass('has-error');
        }
    },
    'click #tumbleButton'(event) {
        console.log(Number($('#defaultTransactionFeeTextBox').val()) * Number($('#tumbleCountTextBox').val()))
    }
});

Template.tumbleForm.helpers({
    estFee() {
        return Number($('#defaultTransactionFeeTextBox').val()) * Number($('#tumbleCountTextBox').val()) + " BTC";
    },
    transactionFee() {
        return $('#defaultTransactionFeeTextBox').val();
    }
});