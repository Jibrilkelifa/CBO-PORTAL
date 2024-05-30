interface NavItem {
  name: string;
  url: string;
  iconComponent?: { name: string };
  children?: Array<NavItem>;
}

// Function to create a NavItem
function createNavItem(name: string, url: string, children?: Array<NavItem>, iconName?: string): NavItem {
  let navItem: NavItem = { name, url };

  if (iconName) {
    navItem.iconComponent = { name: iconName };
  }

  if (children) {
    navItem.children = children;
  }

  return navItem;
}


export const navItemMenu = {
  name: 'Menu',
  title: true
}

export const navItemsAdmin = createNavItem(
  "System Admin",
  "/user",
  [
    createNavItem('Assign Role', '/user/assignRole'),
    createNavItem('Update User', '/user/updateUser'),
  ],
  'cil-settings'
);

export const navItemsSuperAdmin = createNavItem(
  'System Admin',
  '/',
  [
    createNavItem(
      'Module',
      '/module',
      [
        createNavItem('Add Module', '/module/addModule'),
        createNavItem('View Modules', '/module/viewModule'),
      ]
    ),
    // Add more children as needed
  ],
  'cil-settings'
);

export const navItemSupervisor = createNavItem(
  'Supervisor',
  '/',
  [
    createNavItem('Add User', '/user/addUser'),
    createNavItem('View Users', '/user/viewUsers'),
  ]
);


export const navItemsAMSAdmin = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Annual Plan', '/ams/annual-plan'),
    createNavItem('Audit Schedule', '/ams/audit-schedule'),
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
    createNavItem('Audit Reports', '/ams/report-list'),
    createNavItem(
      'Setting',
      '/ams',
      [
        createNavItem('Auditors', '/ams/audit-staff'),
        createNavItem('Audit universe', '/ams/audit-universe'),
        createNavItem('Audit object', '/ams/audit-object'),
        createNavItem('Audit Type', '/ams/audit-type'),
        createNavItem('Risk item', '/ams/risk-item'),
      ],
      'cil-settings'
    ),
  ],
  'cil-drop'
);

export const navItemsAMSManager = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Annual Plan', '/ams/annual-plan'),
    createNavItem('Audit Schedule', '/ams/audit-schedule'),
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
    createNavItem('Audit Reports', '/ams/report-list'),
    createNavItem(
      'Setting',
      '/ams',
      [
        createNavItem('Auditors', '/ams/audit-staff'),
        createNavItem('Audit universe', '/ams/audit-universe'),
        createNavItem('Audit object', '/ams/audit-object'),
        createNavItem('Audit Type', '/ams/audit-type'),
        createNavItem('Risk item', '/ams/risk-item'),
      ],
      'cil-settings'
    ),
  ],
  'cil-drop'
);

export const navItemsAMSAuditor = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
    createNavItem('Audit Reports', '/ams/report-list'),
  ],
  'cil-drop'
);

export const navItemsAMSMember = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
  ],
  'cil-drop'
);

export const navItemsAMSAuditee = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
  ],
  'cil-drop'
);

export const navItemsAMSTeamLeader = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
    createNavItem('Audit Reports', '/ams/report-list'),
  ],
  'cil-drop'
);

export const navItemsAMSDirector = createNavItem(
  'AMS',
  '/ams',
  [
    createNavItem('Audit Engagement', '/ams/audit-engagement'),
    createNavItem('Audit Schedule', '/ams/audit-schedule'),
  ],
  'cil-drop'
);

export const navItemsCISTAdmin = createNavItem(
  'CIST',
  '/cit',
  [
    createNavItem('COB Issues List', '/cit/cobIssuesList'),
    createNavItem('Cob Steps', '/cit/cobSteps'),
    createNavItem('Cob Steps Copied', '/cit/cobStepsCopiedList'),
  ],
  'cil-copy'
);

export const navItemsICMSAdmin = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'User',
      '/ICMS/user',
      [
        createNavItem('Add User', '/ICMS/user/addUser'),
        createNavItem('View User', '/ICMS/user/viewUsers'),
      ]
    ),
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('View History', '/ICMS/CIPM/viewCIPM'),
      ]
    ),
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('View DCQ', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('Add Data', '/ICMS/Fraud/addFraud'),
        createNavItem('View Reports', '/ICMS/Fraud/viewFraud'),
        createNavItem('NBE IFR Summary', '/ICMS/Fraud/viewFraudForNBE'),
      ]
    ),
    createNavItem(
      'DACGM',
      '/ICMS/DACGM',
      [
        createNavItem('View History', '/ICMS/DACGM/viewDACGM'),
      ]
    ),
    createNavItem(
      'Fire Extinguisher',
      '/ICMS/FireExtinguisher',
      [
        createNavItem('View Fire Extinguisher', '/ICMS/FireExtinguisher/viewFireExtinguisher'),
      ]
    ),
    createNavItem(
      'IFB',
      '/ICMS/IFB',
      [
        createNavItem('View IFB', '/ICMS/IFB/viewIFB'),
      ],
    ),
    createNavItem(
      'Finance',
      '/ICMS/Finance',
      [
        createNavItem('View Finance', '/ICMS/Finance/viewFinance'),
      ],
    ),

    createNavItem(
      'Share',
      '/ICMS/Share',
      [
        createNavItem('View Share', '/ICMS/Share/viewShare'),
      ],
    ),
    createNavItem(
      'Trade',
      '/ICMS/Trade',
      [
        createNavItem('View Trade', '/ICMS/Trade/viewTrade'),
      ],
    ),
    // Add more children as needed
  ],
  'cil-chart'
);



export const navItemsICMSBranch = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem('Dashboard', 'icms_dashboard/branch'),
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('Add Data', '/ICMS/CIPM/addCIPM'),
        createNavItem('View History', '/ICMS/CIPM/viewCIPM'),
      ]
    ),
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('View Data', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
    createNavItem(
      'Fire Extinguisher',
      '/ICMS/FireExtinguisher',
      [
        createNavItem('Add data', '/ICMS/FireExtinguisher/addFireExtinguisher'),
        createNavItem('View Fire Extinguisher', '/ICMS/FireExtinguisher/viewFireExtinguisher'),
      ]
    ),
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('Add Data', '/ICMS/Fraud/addFraud'),
        createNavItem('View History', '/ICMS/Fraud/viewFraud'),
      ]
    ),
    createNavItem(
      'DACGM',
      '/ICMS/DACGM',
      [
        createNavItem('Add Data', '/ICMS/DACGM/addDACGM'),
        createNavItem('View History', '/ICMS/DACGM/viewDACGM'),
      ]
    ),
  ],
  'cil-chart'
);

export const navItemsICMSDistrict = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('View CIPM History', '/ICMS/CIPM/viewCIPM'),
      ]
    ),
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('View Data', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('Add Data', '/ICMS/Fraud/addFraud'),
        createNavItem('View History', '/ICMS/Fraud/viewFraud'),
      ]
    ),
    createNavItem(
      'DACGM',
      '/ICMS/DACGM',
      [
        createNavItem('View DACGM History', '/ICMS/DACGM/viewDACGM'),
      ]
    ),
    createNavItem(
      'Fire Extinguisher',
      '/ICMS/FireExtinguisher',
      [
        createNavItem('View Fire Extinguisher', '/ICMS/FireExtinguisher/viewFireExtinguisher'),
      ]
    ),
  ],
  'cil-chart'
);


export const navItemsICMSIFB = createNavItem(
  'IFB',
  '/ICMS',
  [
    createNavItem('Add data', '/ICMS/IFB/addIFB'),
    createNavItem('View IFB', '/ICMS/IFB/viewIFB'),
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('Add Data', '/ICMS/CIPM/addCIPM'),
        createNavItem('View History', '/ICMS/CIPM/viewCIPM'),
      ]
    ),
  ],
);

export const navItemsICMSFinanceIC = createNavItem(
  'FInance',
  '/ICMS',
  [
    createNavItem('Add data', '/ICMS/Finance/addFinance'),
    createNavItem('View Finance', '/ICMS/Finance/viewFinance'),
  ],
);


export const navItemsICMSFinanceOWNER = createNavItem(
  'FInance',
  '/ICMS',
  [
    createNavItem('View Finance', '/ICMS/Finance/viewFinance'),
  ],
);





export const navItemsICMSTradeIC = createNavItem(
  'Trade',
  '/ICMS',
  [
    createNavItem('Add data', '/ICMS/Trade/addTrade'),
    createNavItem('View Trade', '/ICMS/Trade/viewTrade'),
  ],
);

export const navItemsICMSTradeOWNER = createNavItem(
  'Trade',
  '/ICMS',
  [
    createNavItem('View Trade', '/ICMS/Trade/viewTrade'),
  ],
);
export const navItemsICMSProcurementOWNER = createNavItem(
  'Procurement',
  '/ICMS',
  [
    createNavItem('View Procurement', '/ICMS/Procurement/viewProcurement'),
  ],
);


export const navItemsICMSProcurementIC = createNavItem(
  'Procurement',
  '/ICMS',
  [
    createNavItem('Add data', '/ICMS/Procurement/addProcurement'),
    createNavItem('View Procurement', '/ICMS/Procurement/viewProcurement'),
  ],
);









export const navItemsICMSShareIC = createNavItem(
  'Share',
  '/ICMS',
  [
    createNavItem('Add data', '/ICMS/Share/addShare'),
    createNavItem('View Share', '/ICMS/Share/viewShare'),
  ],
);


export const navItemsICMSShareOWNER = createNavItem(
  'Share',
  '/ICMS',
  [
    createNavItem('View Share', '/ICMS/Share/viewShare'),
  ],
);

export const navItemsSMSAdmin = createNavItem(
  'SMS',
  '/sms',
  [
    createNavItem(
      'SMS Sending',
      '/sms',
      [
        createNavItem('Excel Messaging', '/sms/bulk'),
        createNavItem('Single Messaging', '/sms/single'),
        createNavItem('Group Messaging', '/sms/group'),
        createNavItem('Customer Messaging', '/sms/customer'),
      ],
      'cil-send'
    ),
    createNavItem(
      'Reports',
      '/sms',
      [
        createNavItem('Single messages', '/sms/single-messages'),
        createNavItem('Group Messages', '/sms/group-messages'),
        createNavItem('Excel Messages', '/sms/bulks'),
        createNavItem('Cost', '/sms/cost'),
        createNavItem('Customer messages', '/sms/customer-messages'),
      ],
      'cil-bar-chart'
    ),
  ],
  'cil-comment-square'
);

export const navItemsICMSBranchManager = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('Authorize Data', '/ICMS/CIPM/authorizeCIPMData'),
      ]
    ),
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('Add Data', '/ICMS/DCQ/addDCQ'),
        createNavItem('View History', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('Authorize Data', '/ICMS/Fraud/authorizeFraudCases'),
      ]
    ),
    createNavItem(
      'DACGM',
      '/ICMS/DACGM',
      [
        createNavItem('View History', '/ICMS/DACGM/viewDACGM'),
      ]
    ),
    createNavItem(
      'Finance',
      '/ICMS/Finance',
      [
        createNavItem('View Finance', '/ICMS/Finance/viewFinance'),
      ]
    ),
    createNavItem(
      'Fire Extinguisher',
      '/ICMS/FireExtinguisher',
      [
        createNavItem('View Fire Extinguisher', '/ICMS/FireExtinguisher/viewFireExtinguisher'),
      ]
    ),
  ],
  'cil-chart'
);

export const navItemsICMSBankingOperation = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('View History', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
  ],
  'cil-chart'
);

export const navItemsICMSDistrictDirector = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'CIPM',
      '/ICMS/CIPM',
      [
        createNavItem('View CIPM History', '/ICMS/CIPM/viewCIPM'),
      ]
    ),
    createNavItem(
      'DCQ',
      '/ICMS/DCQ',
      [
        createNavItem('View Data', '/ICMS/DCQ/viewDCQ'),
      ]
    ),
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('View History', '/ICMS/Fraud/viewFraud'),
      ]
    ),
    createNavItem(
      'DACGM',
      '/ICMS/DACGM',
      [
        createNavItem('View DACGM History', '/ICMS/DACGM/viewDACGM'),
      ]
    ),
  ],
  'cil-chart'
);

export const navItemsICMSProvision = createNavItem(
  'Internal Control',
  '/ICMS',
  [
    createNavItem(
      'IFR',
      '/ICMS/Fraud',
      [
        createNavItem('View History', '/ICMS/Fraud/viewFraud'),
      ]
    ),
  ]
);



export const navItemsCCAdmin = createNavItem(
  'Compliance Check',
  '/CC',
  [
    createNavItem('Search', '/CC/viewSanction'),
    createNavItem(
      'Uploads',
      '/CC/upload',
      [
        createNavItem('UK', '/CC/upload/uk'),
        createNavItem('EU', '/CC/upload/eu'),
        createNavItem('PEP', '/CC/upload/pep'),
        createNavItem('Media Adverser', '/CC/upload/adverser'),
      ]
    ),
    createNavItem('Weekly Check', '/CC/weeklyCheck'),
  ]
);

export const navItemsCCUser = createNavItem(
  'Compliance Check',
  '/CC',
  [
    createNavItem('Search', '/CC/viewSanction'),
  ]
);

export const navItemsCCUserDeliquent = createNavItem(
  'Compliance Check',
  '/CC',
  [
    createNavItem('Search', '/CC/viewSanction'),
    createNavItem('Deliquent List', '/CC/upload/deliquent'),
    createNavItem('Business Contuinity', '/CC/upload/business'),
  ]
);

export const navItemsECXAdmin = createNavItem(
  'ECX',
  '/ecx',
  [
    createNavItem(
      'Balance',
      '/ecx/balance',
      [
        createNavItem('Generate Balance', '/ecx/balance/update'),
        createNavItem('Update History', '/ecx/balance/filehistory'),
      ],
      'cil-balance-scale'
    ),
    createNavItem(
      'Account',
      '/ecx/account',
      [
        createNavItem('New', '/ecx/account/newAccount'),
        createNavItem('Table', '/ecx/account/accountTable'),
        createNavItem('Account Relation', '/ecx/account/relation'),
      ],
      'cil-wallet'
    ),
  ],
  'cil-credit-card'
);

export const navItemsECXUser = createNavItem('ECX', '/ecx');

export const navItemsCAOAdmin = createNavItem(
  'CAO Inquiry/Activity',
  '/cao',
  [
    createNavItem('View', '/cao/checklists/checklist'),
  ],
  'cib-openstreetmap'
);

export const navItemsCAOManager = createNavItem(
  'CAO Inquiry/Activity',
  '/cao',
  [
    createNavItem('View', '/cao/checklists/checklist'),
    createNavItem('Reports', '/cao/checklists/reports'),
  ],
  'cib-openstreetmap'
);


export const navItemsCAOUser = createNavItem(
  'CAO Inquiry/Activity',
  '/cao',
  [
    createNavItem('My Inquiry/Activity', '/cao/checklists/my-checklists'),
  ],
  'cib-openstreetmap'
);

export const navItemsSASVAdmin = createNavItem(
  'Signature & Stamp',
  '/sasv',
  [
    createNavItem(
      'User',
      '/sasv/user',
      [
        createNavItem('New', '/sasv/user/addUser'),
        createNavItem('Table', '/sasv/user/viewUsers'),
      ]
    ),
    createNavItem(
      'Admin',
      '/sasv',
      [
        createNavItem('Signature', '/sasv/signature-table'),
        createNavItem('Stamp', '/sasv/stamp-table'),
        createNavItem('Authority', '/sasv/authority-table'),
      ]
    ),
  ],
  'cil-folder-open'
);

export const navItemsSASVUser = createNavItem('Signature & Stamp', '/sasv/user-view');

export const navItemsMemoAdmin = createNavItem(
  'Memo',
  '/Memo',
  [
    createNavItem('New Memo', '/Memo/newMemo'),
    createNavItem('Search Memo', '/Memo/searchMemo'),
  ]
);

export const navItemsMemoUser = createNavItem(
  'Memo',
  '/Memo',
  [
    createNavItem('New Memo', '/Memo/newMemo'),
    createNavItem('Search Memo', '/Memo/searchMemo'),
  ]
);

export const navItemsEMSAdmin = createNavItem(
  'EMS',
  '/EMS',
  [
    createNavItem(
      'User',
      '/EMS/user',
      [
        createNavItem('New', '/EMS/user/addUser'),
        createNavItem('Table', '/EMS/user/viewUsers'),
      ]
    ),
    createNavItem('Upload', '/EMS/uploadEmployeeData'),
  ],
  'cil-library-add'
);

export const navItemsEMSUser = createNavItem('EMS', '/EMS');


export const navItemsCMSAdmin = createNavItem(
  'CMS',
  '/CMS',
  [
    createNavItem(
      'JT Analyzer',
      '/CMS',
      [
        createNavItem('Upload JT', '/CMS/uploadJT'),
      ]
    ),
    createNavItem(
      'RT Analyzer',
      '/CMS',
      [
        createNavItem('Upload RT', '/CMS/uploadRT'),
      ]
    ),
  ]
);

export const navItemsCMSUser = createNavItem('CMS', '/CMS');

export const navItemSearch = createNavItem('Search', '/CC/viewSanction');

export const navItemDelinquent = createNavItem(
  'Delinquent',
  '/CC/upload/delinquent',
  [
    createNavItem('Delinquent List', '/CC/upload/deliquent'),
    createNavItem('Business Continuity', '/CC/upload/business'),
  ]
);

export const navItemAdmin = createNavItem(
  'Uploads',
  '/CC/upload',
  [
    createNavItem('UK', '/CC/upload/uk'),
    createNavItem('EU', '/CC/upload/eu'),
    createNavItem('PEP', '/CC/upload/pep'),
  ]
);

export const navItemWeeklyCheck = createNavItem('Weekly Check', '/CC/weeklyCheck');

export const complianceCheckMenu = createNavItem(
  'Compliance Check',
  '/CC',
  [
    navItemSearch,
  ],
  'pi pi-check'
);
