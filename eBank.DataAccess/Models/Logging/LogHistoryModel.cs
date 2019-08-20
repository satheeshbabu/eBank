﻿using System;
using System.Collections.Generic;
using System.Text;

namespace eBank.DataAccess.Models.Logging
{
    public class LogHistoryModel
    {
        public string FileName { get; set; }

        public int Level { get; set; }

        public int LineNumber { get; set; }

        public string Message { get; set; }

        public DateTime TimeStamp { get; set; }

        public object Additional { get; set; }
    }
}
