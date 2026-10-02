export const HOME_HEADER = [
  { title: 'MANDATE', detail: 'Openings of Accounts and CIF Creations' },
  { title: 'HACLI', detail: 'Inquire On Accounts' },
  { title: 'CNBR', detail: 'Create a New Branch' },
  { title: 'TELLER', detail: 'Cash Transaction Postings' },
  { title: 'NTELLER', detail: 'Non Cash Transaction' },
  { title: 'CP', detail: 'Change Password' },
  { title: 'NUC', detail: 'New User Creation' },
  { title: 'UM', detail: 'User Modifications' },
];

export const accountStatement = [
  { date: '2025-01-04', tran: '10023', credit: '0.00', debit: '1500.00', balance: '212500.00', remark: 'ATM WITHDRAWAL' },
  { date: '2025-01-05', tran: '10048', credit: '25000.00', debit: '0.00', balance: '237500.00', remark: 'CASH DEPOSIT' },
  { date: '2025-01-08', tran: '10073', credit: '0.00', debit: '2200.00', balance: '235300.00', remark: 'CHEQUE ISSUE' },
  { date: '2025-01-12', tran: '10095', credit: '7000.00', debit: '0.00', balance: '242300.00', remark: 'SALARY CREDIT' },
  { date: '2025-01-18', tran: '10116', credit: '0.00', debit: '5400.00', balance: '236900.00', remark: 'UTILITY BILL' },
];

export const userList = [
  { userId: '1001', name: 'DOP User', branch: 'Head Office', workClass: '25', status: 'Active' },
  { userId: '1008', name: 'Branch Teller', branch: 'Bengaluru HO', workClass: '50', status: 'Active' },
  { userId: '1010', name: 'Supervisor', branch: 'Head Office', workClass: '100', status: 'Active' },
  { userId: '1015', name: 'Branch Manager', branch: 'Delhi PO', workClass: '150', status: 'Inactive' },
];

export const branchList = [
  { branchName: 'Head Office', sol: '100', cash: 'Open', tfr: 'Open' },
  { branchName: 'Bengaluru HO', sol: '105', cash: 'Open', tfr: 'Open' },
  { branchName: 'Delhi PO', sol: '110', cash: 'Close', tfr: 'Open' },
  { branchName: 'Hyderabad SO', sol: '118', cash: 'Open', tfr: 'Close' },
];

export const reportRows = [
  { report: 'Daily Cash Summary', branch: 'Head Office', status: 'Generated', date: '2025-01-20' },
  { report: 'Account Statement', branch: 'Bengaluru HO', status: 'Pending', date: '2025-01-20' },
  { report: 'User Audit Trail', branch: 'Head Office', status: 'Generated', date: '2025-01-20' },
  { report: 'Branch Performance', branch: 'Delhi PO', status: 'Generated', date: '2025-01-19' },
];
