import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountType } from '../../enums/account-type.enum';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  @Input() form: FormGroup;
  accountType: typeof AccountType = AccountType;
  accountTypeItems: string[] = [];
  constructor() { }

  ngOnInit() {
    const accountTypeOptions = Object.keys(AccountType);
    this.accountTypeItems = accountTypeOptions.slice(accountTypeOptions.length / 2);
  }

  get f() {
    return this.form.controls;
  }
}