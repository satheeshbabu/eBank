import { Component, OnInit, Input } from '@angular/core';

import { AccountType } from '../../models/account-type.enum';
import { Account } from '../../models/Account.interface';

@Component({
  selector: 'app-account-summary',
  styleUrls: ['./account-summary.component.scss'],
  templateUrl: './account-summary.component.html'
})
export class AccountSummaryComponent implements OnInit {

  @Input() accountsInfo: Account[] = [];

  accountType = AccountType;

  constructor() {}

  ngOnInit() {}
}