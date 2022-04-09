using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;

namespace BloodBankManagementSystem.Repositories
{
   public interface IBloodBankRepository
    {
        List<BloodBank> GetBloodBanks();
       
        void AddBloodBank(BloodBank bloodBank);
        void RemoveBloodBank(int UserId);
        void UpdateBloodBank(BloodBank bloodBank);
    }
}
