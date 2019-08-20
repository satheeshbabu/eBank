﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eBank.DataAccess.Models;
using eBank.DataAccess.Objects.AccountManagement;
using Microsoft.EntityFrameworkCore;

namespace eBank.DataAccess.Services.AccountManagement
{
    public class AccountService : IAccountService
    {
        readonly EBankContext _eBankContext;

        public AccountService(EBankContext context) {
            _eBankContext = context;
        }

        public async Task<IEnumerable<AccountDto>> GetAccounts(long userId)
        {
            return await _eBankContext.Accounts.Where(a => a.UserId == userId)
                .OrderBy(i => i.AccountType)
                .ToListAsync();
        }

        public async Task<int> CreateAccount(AccountDto accountModel)
        {
            _eBankContext.Accounts.Add(accountModel);
            return await _eBankContext.SaveChangesAsync();
        }
    }
}
