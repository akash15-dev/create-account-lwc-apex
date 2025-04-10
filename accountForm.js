import { LightningElement, track } from 'lwc';
import insertAccount from '@salesforce/apex/AccountInsert.insertAccount';  //Importing apex class
import { ShowToastEvent } from 'lightning/platformShowToastEvent';   //Importing toast event

export default class InsertAccountUsingApex extends LightningElement {

    @track account = {     //account object
        Name: '',
        Phone: '',
        Website: ''
    }

    handleName(event) {
        this.account.Name = event.target.value;     //assigning values to name in account object
    }
    handlePhone(event) {
        this.account.Phone = event.target.value;    //assigning values to phone in account object
    }
    handleWebsite(event) {
        this.account.Website = event.target.value;   //assigning values to website in account object
    }

    handleSubmit() {   //while user click submit button this function will execute
        insertAccount({ accList: this.account })  //passin account object to the apex class method
            .then(result => {
                this.showToast('Success', 'Account inserted successfully. Account Id: ' + result, 'success'); //show toast event
                this.resetForm();  //reseting input field values
            })
            .catch(error => {   //error handling 
                this.showToast('Error', 'There was an error inserting the account: ' + error.body.message, 'error');
            });
    }

    showToast(title, message, variant) {      //show toast event function to show toast
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(event); 
    }

    resetForm() {  //input fields reset function
        this.account = { 
            Name: '', 
            Phone: '', 
            Website: '' 
        };
    }
}