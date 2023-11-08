interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager'],
  tenantName: 'Company',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View product information', 'Place orders', 'View order history', 'Update personal information'],
  ownerAbilities: [
    'Manage company',
    'Manage user',
    'Manage product',
    'Manage inventory',
    'Manage order',
    'Manage supplier',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/dc750d4e-b59e-463c-ab9a-7b6b19ed1791',
};
