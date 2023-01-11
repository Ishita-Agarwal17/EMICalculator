import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  currentYear:any 
  showTableData:any =[]
  emi: any
  filters: any;
  principal = {
    value: "1"
  }
  rateEmi: any = {
    value: "5"
  }
  year = {
    value: "2"
  }

  query: any = {
    amount: "",
    interest: "",
    tenureYr: "",
    tenureMo: ""
  }

  result = {
    emi: "",
    interest: "",
    total: ""
  }
  
         
  constructor() {
 
  }

  ngOnInit(): void {
    this.update();
    this.tbupdate(this.year.value)
  }

  tbupdate(id:any) {
    this.currentYear =new Date().getFullYear();
    let year =Number(this.query.tenureYr);
    this.showTableData =[]
    for(let i=1; i<=year ;i++){
      let obj ={
        year:this.currentYear,
        Principal:"₹ 48,753",
        Interest:"₹ 3,893",
        Total :"₹ 52,646",
        Balance:"₹ 51,247",
        LoanPaidToDate:"48.75%"
      }
      this.showTableData.push(obj)

      this.currentYear +=1
    }
    if (id == 0) {
      this.principal.value = (Number(this.query.amount) / 100000).toString();
    }
    else if (id == 1) {
      this.rateEmi.value = this.query.interest;
    }
    else if (id == 2) {
      this.year.value = this.query.tenureYr;
    }
    
    this.update();
  }

  update() {
    var loanAmount = Number(this.principal.value) * 100000;
    var numberOfMonths = Number(this.year.value) * 12;
    var rateOfInterest = Number(this.rateEmi.value);
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    this.query.tenureYr = this.year.value.toString();

    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;

    this.result.emi = emi.toFixed(0).toString()
    this.result.total = full.toFixed(0).toString()
    this.result.interest = interest.toFixed(0).toString()
  }




}


