import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  organization_id?: string;
  invited_by?: string;
  email: string;
  status: string;
  role?: string;
  expiry_date?: any;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  invited_by?: string;
  email?: string;
  status?: string;
  role?: string;
}
