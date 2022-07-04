public with sharing class AddSales {
    @AuraEnabled
    public static Real_Estate_on_Sales__c addSales(String name, String proprietor, String city, Decimal amount, String phone){
        try {
            Real_Estate_on_Sales__c newSales = New Real_Estate_on_Sales__c(
                Name = name,
                Proprietor__c = proprietor,
                Proprietor_Phone__c = phone,
                City__c = city,
                Amount__c = amount
            );
            insert newSales;
            return newSales;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
