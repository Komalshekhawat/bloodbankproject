﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace BloodBankManagementSystem.Entities
{
    [Table("BloodBank")]
    public class BloodBank
    {
        [Key]
        public int UserId { get; set; }
        public int Password { get; set; }
        public string BloodBankName { get; set; }
        public int BloodBankId { get; set; }
        public string Address { get; set; }
        public int ContactNumber { get; set; }
        public int BloodUnits { get; set; }
        public string City { get; set; }
    }
}
