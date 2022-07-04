import { LightningElement, track } from "lwc";
import addSales from '@salesforce/apex/AddSales.addSales'; 

export default class HomePage extends LightningElement {
  @track isShowModal = false;
  @track repos;
  name;
  proprietor;
  city;
  phone;
  amount;
  
connectedCallback(){
  let endPoint = "https://fakestoreapi.com/users";
     fetch(endPoint, {
       method: "GET"
     })
     .then((response) => response.json()) 
     .then((repos) => {
         this.repos = repos;
         console.log(repos);
       });
}
  handleCall(e){
   console.log(e.target.name.toUpperCase() + ' aranıyor...');
     
  }
  handleChangeName(event){
    this.name = event.target.value;
  }
  handleChangeProprietor(event){
    this.proprietor = event.target.value;
  }
  handleChangeCity(event){
    this.city = event.target.value;
  }
  handleChangePhone(event){
    this.phone = event.target.value;
  }
  handleChangeAmount(event){
    this.amount = event.target.value;
  }
handleAdd(){
    if(this.name && this.proprietor && this.amount && this.city && this.phone !== ''){
     addSales({
        name : this.name,
        proprietor : this.proprietor,
        city : this.city,
        amount : this.amount,
        phone : this.phone
      })
      .then(result => console.log(result));
    }
   }
showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

 
}
