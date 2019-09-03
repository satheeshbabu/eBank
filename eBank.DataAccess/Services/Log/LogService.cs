﻿using Newtonsoft.Json;
using System.Threading.Tasks;
using eBank.DataAccess.Models;
using eBank.DataAccess.Objects;

namespace eBank.DataAccess.Services.Log
{
    public class LogService : ILogService
    {
        readonly EBankContext _eBankContext;

        public LogService(EBankContext eBankContext) {
            _eBankContext = eBankContext;
        }

        public async Task<int> AddLogAsync(LogModel logInfo)
        {
            var messageInfo = JsonConvert.DeserializeObject<MessageModel>(logInfo.Message);

            var logDto = new LogDto {
                Message = messageInfo.Message,
                Error = messageInfo.Error,
                FileName = logInfo.FileName,
                LogDate = logInfo.TimeStamp,
                LineNumber = logInfo.LineNumber,
                UserId = 1,
                Url = messageInfo.Url,
                Status = messageInfo.Status,
                StatusText = messageInfo.StatusText
            };
            _eBankContext.Logs.Add(logDto);
            return await _eBankContext.SaveChangesAsync();
        }
    }
}
