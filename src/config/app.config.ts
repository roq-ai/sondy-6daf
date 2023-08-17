interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'sondy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
