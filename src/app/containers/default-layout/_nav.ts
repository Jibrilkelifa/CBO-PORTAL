interface NavItem {
  name: string;
  url: string;
  children: Array<NavItem>;
}



export let navItemMenu: Object;
export let navItemsSuperAdmin: Object;
export let navItemsAMSAdmin: Object;
export let navItemsAMSManager: Object;
export let navItemsAMSDirector: Object;
export let navItemsAMSTeamLeader: Object;
export let navItemsCISTAdmin: Object;

export let navItemsAMSUser: Object;
export let navItemsEMSAdmin: Object;
export let navItemsEMSUser: Object;
export let navItemsCCAdmin: Object;
export let navItemsCCUser: Object;
export let navItemsCCUserDeliquent: Object;
export let navItemsICMSAdmin: Object;
export let navItemsICMSDistrict: Object;
export let navItemsICMSDistrictDirector: Object;
export let navItemsICMSBranch: Object;
export let navItemsSMSAdmin: Object;
export let navItemsICMSProvision: Object;
export let navItemsICMSBranchManager: Object;
export let navItemsICMSBankingOperation: Object;
export let navItemsSASVAdmin: Object;
export let navItemsSASVUser: Object;
export let navItemsMemoAdmin: Object;
export let navItemsMemoUser: Object;
export let navItemsECXAdmin: Object;
export let navItemsECXUser: Object;
export let navItemsCMSAdmin: Object;
export let navItemsCMSUser: Object;
export let navItemSupervisor: Object;
export let navCC:NavItem;
export let navItemsAMSAuditor:Object;




navItemMenu = {
  name: 'Menu',
  title: true
}
navItemsSuperAdmin = {
  name: 'System Admin',
  url: '/',
  iconComponent: { name: 'cil-settings' },
  children: [
    {
      name: 'Module',
      url: '/module',
      children: [
        {
          name: 'Add Module',
          url: '/module/addModule'
        },
        {
          name: 'View Modules',
          url: '/module/viewModule'
        },
      ]
    },
    {
      name: 'User',
      url: '/user',
      children: [
        {
          name: 'Add Admin',
          url: '/user/addAdmin'
        },
        {
          name: 'View All Admins',
          url: '/user/viewAdmins'
        },
      ]
    }
  ]
}

navItemSupervisor = {
  name: 'Supervisor',
  url: '/',
  children: [
        {
          name: 'Add User',
          url: '/user/addUser'
        },
        {
          name: 'View Users',
          url: '/user/viewUsers'
        },
      ]
    }
  
navItemsAMSAdmin =  {
  name: 'AMS',
  url: '/ams',
  iconComponent: { name: 'cil-drop' },
  children: [
    {
      name: 'Annual Plan',
      url: '/ams/annual-plan',
    },
    {
      name: 'Audit Schedule',
      url: '/ams/audit-schedule',
    },
    {
      name: 'Audit Engagement',
      url: '/ams/audit-engagement',
    },
    {
      name: 'Audit Program',
      url: '/ams/audit-program',
    },
    {
      name: 'Audit Reports',
      url: '/ams/report-list',
    },
    {
      name: 'Setting',
      url: '/ams',
      iconComponent: { name: 'cil-settings' },
      children: [
        {
          name: 'Auditors',
          url: '/ams/audit-staff',
        },
        {
          name: 'Audit universe',
          url: '/ams/audit-universe',
        },
        {
          name: 'Audit object',
          url: '/ams/audit-object',
        },
        {
          name: 'Audit team',
          url: '/ams/audit-type',
        },
        {
          name: 'Risk item',
          url: '/ams/risk-item',
        },
  
      ]
    },
  ],
  
}

navItemsAMSManager =  {
  name: 'AMS',
  url: '/ams',
  iconComponent: { name: 'cil-drop' },
  children: [
    {
      name: 'Annual Plan',
      url: '/ams/annual-plan',
    },
    {
      name: 'Audit Schedule',
      url: '/ams/audit-schedule',
    },
    {
      name: 'Audit Engagement',
      url: '/ams/audit-engagement',
    },
    {
      name: 'Audit Program',
      url: '/ams/audit-program',
    },
    {
      name: 'Audit Reports',
      url: '/ams/report-list',
    },
    {
      name: 'Setting',
      url: '/ams',
      iconComponent: { name: 'cil-settings' },
      children: [
        {
          name: 'Auditors',
          url: '/ams/audit-staff',
        },
        {
          name: 'Audit universe',
          url: '/ams/audit-universe',
        },
        {
          name: 'Audit object',
          url: '/ams/audit-object',
        },
        {
          name: 'Audit team',
          url: '/ams/audit-type',
        },
        {
          name: 'Risk item',
          url: '/ams/risk-item',
        },
  
      ]
    },
  ],
  
}

navItemsAMSAuditor =  {
  name: 'AMS',
  url: '/ams',
  iconComponent: { name: 'cil-drop' },
  children: [

    {
      name: 'Audit Engagement',
      url: '/ams/audit-engagement',
    },
    {
      name: 'Audit Program',
      url: '/ams/audit-program',
    },
    {
      name: 'Audit Reports',
      url: '/ams/report-list',
    },

  ],
  
}


navItemsAMSTeamLeader =  {
  name: 'AMS',
  url: '/ams',
  iconComponent: { name: 'cil-drop' },
  children: [
    {
      name: 'Audit Engagement',
      url: '/ams/audit-engagement',
    },
    {
      name: 'Audit Program',
      url: '/ams/audit-program',
    },
    {
      name: 'Audit Reports',
      url: '/ams/report-list',
    }
  ],
  
}


navItemsAMSDirector =  {
  name: 'AMS',
  url: '/ams',
  iconComponent: { name: 'cil-drop' },
  children: [
    {
      name: 'Audit Engagement',
      url: '/ams/audit-engagement',
    }
 
 
  ],
  
}



navItemsCISTAdmin =  {
  name: 'CIST',
  url: '/cit',
  iconComponent: { name: 'cil-copy' },
  children: [

    {
      name: 'COB Issues List',
      url: '/cit/cobIssuesList',
    },

    {
      name: 'Cob Steps',
      url: '/cit/cobSteps',
    },
    {
      name: 'Cob Steps Copied',
      url: '/cit/cobStepsCopiedList',
    },
  
  ],
  
}








navItemsICMSAdmin = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [
    {
      name: 'User',
      url: '/ICMS/user',
      children: [
        {
          name: 'Add User',
          url: '/ICMS/user/addUser'
        },
        {
          name: 'View User',
          url: '/ICMS/user/viewUsers'
        },
      ]
    },
    {
      name: 'CIPM',
      url: '/ICMS/CIPM',
      children: [
        {
          name: 'View History',
          url: '/ICMS/CIPM/viewCIPM',
        },
        // {
        //   name: 'Add Collateral Type',
        //   url: '/ICMS/CIPM/addCT',
        // }
      ]
    },
    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'View DCQ',
          url: '/ICMS/DCQ/viewDCQ'
        },
      ]
    },
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/Fraud/addFraud',
        },
        {
          name: 'View Reports',
          url: '/ICMS/Fraud/viewFraud',
        },
        {
          name: 'NBE IFR Summary',
          url: '/ICMS/Fraud/viewFraudForNBE',
        },
      ]
    },
    {
      name: 'DACGM',
      url: '/ICMS/DACGM',
      children: [
        {
          name: 'View History',
          url: '/ICMS/DACGM/viewDACGM',
        },
      ]
    }
  ]
}
navItemsICMSBranch = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [
    {
      name: 'CIPM',
      url: '/ICMS/CIPM',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/CIPM/addCIPM',
        },
        {
          name: 'View History',
          url: '/ICMS/CIPM/viewCIPM',
        },
      ]
    },
    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'View Data',
          url: '/ICMS/DCQ/viewDCQ'
        },
      ]
    },
    {
      name: 'IFB',
      url: '/ICMS/IFB',
      children: [
        {
          name: 'Add data',
          url: '/ICMS/IFB/addIFB',
        },
        {
          name: 'View IFB',
          url: '/ICMS/IFB/viewIFB'
        },
      ]
    },
    {
      name: 'Finance',
      url: '/ICMS/Finance',
      children: [
        {
          name: 'Add data',
          url: '/ICMS/Finance/addFinance',
        },
        {
          name: 'View Finance',
          url: '/ICMS/Finance/viewFinance'
        },
      ]
    },
    {
      name: 'Fire Extinguisher',
      url: '/ICMS/FireExtinguisher',
      children: [
        {
          name: 'Add data',
          url: '/ICMS/FireExtinguisher/addFireExtinguisher',
        },
        {
          name: 'View Fire Extinguisher',
          url: '/ICMS/FireExtinguisher/viewFireExtinguisher'
        },
      ]
    },
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/Fraud/addFraud',
        },
        {
          name: 'View History',
          url: '/ICMS/Fraud/viewFraud',
        },
      ]
    },
    {
      name: 'DACGM',
      url: '/ICMS/DACGM',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/DACGM/addDACGM',
        },
        {
          name: 'View History',
          url: '/ICMS/DACGM/viewDACGM',
        },
      ]
    }
  ]
}

navItemsICMSDistrict = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [
    {
      name: 'CIPM',
      url: '/ICMS/CIPM',
      children: [
        {
          name: 'View CIPM History',
          url: '/ICMS/CIPM/viewCIPM',
        },
      ]
    },
   
    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'View Data',
          url: '/ICMS/DCQ/viewDCQ'
        },
      ]
    },
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/Fraud/addFraud',
        },
        {
          name: 'View History',
          url: '/ICMS/Fraud/viewFraud',
        },
      ]
    },
    {
      name: 'DACGM',
      url: '/ICMS/DACGM',
      children: [
        {
          name: 'View DACGM History',
          url: '/ICMS/DACGM/viewDACGM',
        },
      ]
    },
  ]
  // name: 'SMS',
  // url: '/sms',
  // iconComponent: { name: 'cil-comment-square' },
  // children: [
  //   {
  //     name: 'SMS Sending',
  //     url: '/sms',
  //     iconComponent: { name: 'cil-send' },
  //     children: [
  //       {
  //         name: 'All Customer ',
  //         url: '/sms/customer',
  //       },
  //       {
  //         name: 'Bulk SMS ',
  //         url: '/sms/bulk',
  //       },
  //       {
  //         name: 'Single Messaging',
  //         url: '/sms/single',
  //       },
  //       {
  //         name: 'Group Messaging',
  //         url: '/sms/group',
  //       },
  //       {
  //           name: 'SMS Template',
  //           url: '/sms/template',
  //       },
      
  //     ]
  //   },
  //   {
  //     name: 'Reports',
  //     url: '/sms',
  //     iconComponent: { name: 'cil-bar-chart' },
  //     children: [
  //       {
  //         name: 'All messages',
  //         url: '/sms/all-messages',
  //       },
  //       {
  //         name: 'Sent messages',
  //         url: '/sms/sent-messages',
  //       },
  //       {
  //         name: 'Cutomer Messages',
  //         url: '/sms/customers',
  //       },
  //       {
  //         name: 'Bulk Messages',
  //         url: '/sms/bulks',
  //       },
  //       {
  //           name: 'Cost',
  //           url: '/sms/cost',
  //       },
      
  //     ]
  //   },
    
    
    
   
  // ],
  
}

navItemsICMSBranchManager = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [
    {
      name: 'CIPM',
      url: '/ICMS/CIPM',
      children: [
        {
          name: 'Authorize Data',
          url: '/ICMS/CIPM/authorizeCIPMData',
        }
      ]
    },
    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'Add Data',
          url: '/ICMS/DCQ/addDCQ'
        },
        {
          name: 'View History',
          url: '/ICMS/DCQ/viewDCQ'
        },
      ]
    },
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'Authorize Data',
          url: '/ICMS/Fraud/authorizeFraudCases',
        }
      ]
    },
    {
      name: 'DACGM',
      url: '/ICMS/DACGM',
      children: [
        {
          name: 'View History',
          url: '/ICMS/DACGM/viewDACGM',
        },
      ]
    }
  ]
}
navItemsICMSBankingOperation = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [

    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'View History',
          url: '/ICMS/DCQ/viewDCQ'
        }
      ]
    },
   
  ]
}

navItemsICMSDistrictDirector = {
  name: 'Internal Control',
  url: '/ICMS',
  iconComponent: { name: 'cil-chart' },
  children: [
    {
      name: 'CIPM',
      url: '/ICMS/CIPM',
      children: [
        {
          name: 'View CIPM History',
          url: '/ICMS/CIPM/viewCIPM',
        },
      ]
    },
   
    {
      name: 'DCQ',
      url: '/ICMS/DCQ',
      children: [
        {
          name: 'View Data',
          url: '/ICMS/DCQ/viewDCQ'
        },
      ]
    },
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'View History',
          url: '/ICMS/Fraud/viewFraud',
        },
      ]
    },
    {
      name: 'DACGM',
      url: '/ICMS/DACGM',
      children: [
        {
          name: 'View DACGM History',
          url: '/ICMS/DACGM/viewDACGM',
        },
      ]
    },
  ]
}
navItemsICMSProvision = {
  name: 'Internal Control',
  url: '/ICMS',
  children: [
    {
      name: 'IFR',
      url: '/ICMS/Fraud',
      children: [
        {
          name: 'View History',
          url: '/ICMS/Fraud/viewFraud',
        },
      ]
    }
  ]
}





navItemsCCAdmin = {
  name: 'Compliance Check',
  url: '/CC',
  children: [
    {
      name: 'Search',
      url: '/CC/viewSanction'
    },

    {
      name: 'Uploads',
      url: '/CC/upload',
      children:[
        {
          name: 'UK',
          url: '/CC/upload/uk',
        },
        {
          name: 'EU',
          url: '/CC/upload/eu',
        },
        {
          name: 'PEP',
          url: '/CC/upload/pep',
        },
        {
          name: 'Media Adverser',
          url: '/CC/upload/adverser',
        },
      ]
    },
    {
      name: 'Weekly Check',
      url: '/CC/weeklyCheck'
    },
 

  ]
}

navItemsCCUser = {
  name: 'Compliance Check',
  url: '/CC',
  children: [

    {
      name: 'Search',
      url: '/CC/viewSanction'
    }
  ]
}

navItemsCCUserDeliquent = {
  name: 'Compliance Check',
  url: '/CC',
  children: [

    {
      name: 'Search',
      url: '/CC/viewSanction'
    },
    {
      name: 'Deliquent List',
      url: '/CC/upload/deliquent'
    },
    {
      name: 'Business Contuinity',
      url: '/CC/upload/business'
    }
  ]
}

navItemsECXAdmin = {
  name: 'ECX',
  url: '/ecx',
  iconComponent: { name: 'cil-credit-card' },
  children: [

    {
      name: 'Balance',
      url: '/ecx/balance',
      iconComponent: { name: 'cil-balance-scale' },
      children: [
        {
          name: 'Generate Balance',
          url: '/ecx/balance/update'
        },
        {
          name: 'Update History',
          url: '/ecx/balance/filehistory'
        },

      ]
    },
    {
      name: 'Account',
      url: '/ecx/account',
      iconComponent: { name: 'cil-wallet' },
      children: [
        {
          name: 'New',
          url: '/ecx/account/newAccount',
        },
        {
          name: 'Table',
          url: '/ecx/account/accountTable',
        },
        {
          name: 'Account Relation',
          url: '/ecx/account/relation'
        },

      ]
    },
  ]
}
navItemsECXUser = {

}

navItemsSASVAdmin = {
  name: "Signature & Stamp",
  url: "/sasv",
  iconComponent: { name: "cil-folder-open" },
  children: [
    {
      name: "User",
      url: "/sasv/user",
      children: [
        {
          name: "New",
          url: "/sasv/user/addUser",
        },
        {
          name: "Table",
          url: "/sasv/user/viewUsers",
        },
      ],
    },
    {
      name: "Admin",
      url: "/sasv",
      children: [
        {
          name: "Signature",
          url: "/sasv/signature-table",
        },
        {
          name: "Stamp",
          url: "/sasv/stamp-table",
        },
        {
          name: "Authority",
          url: "/sasv/authority-table",
        },
      ],
    },

  ],
};
navItemsSASVUser = {
  name: 'Signature & Stamp',
  url: '/sasv/user-view',
 
}


navItemsMemoAdmin = {
  name: 'Memo',
  url: '/Memo',
  children: [
    {
      name: 'New Memo',
      url: '/Memo/newMemo',
    },
    {
      name: 'Search Memo',
      url: '/Memo/searchMemo',
    },

  ]
}

navItemsMemoUser = {
  name: 'Memo',
  url: '/Memo',
  children: [
    {
      name: 'New Memo',
      url: '/Memo/newMemo',
    },
    {
      name: 'Search Memo',
      url: '/Memo/searchMemo',
    },

  ]
}

navItemsEMSAdmin = {
  name: 'EMS',
  url: '/EMS',
  iconComponent: { name: 'cil-library-add' },
  children: [
    {
      name: 'User',
      url: '/EMS/user',
      children: [
        {
          name: 'New',
          url: '/EMS/user/addUser',
        },
        {
          name: 'Table',
          url: '/EMS/user/viewUsers',
        },
      ]
    },
    {
      name: 'Upload',
      url: '/EMS/uploadEmployeeData',
    },
  ]
}

navItemsEMSUser = {

}

navItemsCMSAdmin = {
  name: 'CMS',
  url: '/CMS',
  children: [
    {
      name: 'JT Analyzer',
      url: '/CMS',
      children: [
        // {
        //   name: 'View JT',
        //   url: '/CMS/viewJT',
        // },
        {
          name: 'Upload JT',
          url: '/CMS/uploadJT',
        }
      ]
    },
    {
      name: 'RT Analyzer',
      url: '/CMS',
      children: [
        // {
        //   name: 'View RT',
        //   url: '/CMS/viewRT',
        // },
        {
          name: 'Upload RT',
          url: '/CMS/uploadRT',
        }
      ]
    }
  ]
}

navItemsCMSUser = {

}
export const navItemSearch = {
  name: 'Search',
  url: '/CC/viewSanction',
};

export const navItemDelinquent = {
  name: 'Delinquent',
  url: '/CC/upload/delinquent',
  children: [
    {
      name: 'Delinquent List',
      url: '/CC/upload/deliquent',
    },
    {
      name: 'Business Continuity',
      url: '/CC/upload/business',
    },
    // Add more items as needed
  ],
};

export const navItemAdmin = {
  name: 'Uploads',
  url: '/CC/upload',
  children: [
    {
      name: 'UK',
      url: '/CC/upload/uk',
    },
    {
      name: 'EU',
      url: '/CC/upload/eu',
    },
    {
      name: 'PEP',
      url: '/CC/upload/pep',
    },    
    // Add more items as needed
  ],
};

export const navItemWeeklyCheck = {
  name: 'Weekly Check',
  url: '/CC/weeklyCheck',
};

export const complianceCheckMenu = {
  name: 'Compliance Check',
  url: '/CC',
  icon:'pi pi-check',
  children: [
    navItemSearch, // Include Search submenu by default
  ],
};