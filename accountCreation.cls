public class AccountInsert {
    @auraEnabled   //it Indicates this class  is used in lwc
    public static string insertAccount(Account accList){
        
        if(accList != Null){   //checking account is Null
            Account acc = new Account();  //creating Account Instance
            acc.Name = accList.Name;
            acc.Phone = accList.Phone;     //Adding Values to those fields
            acc.Website = accList.Website;
            insert acc;  //Inserting Account
        }
        return accList.Id;   //returning Inserted Account Id
    }
}