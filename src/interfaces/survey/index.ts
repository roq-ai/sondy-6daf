import { QuestionInterface } from 'interfaces/question';
import { ResponseInterface } from 'interfaces/response';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SurveyInterface {
  id?: string;
  title: string;
  description?: string;
  organization_id?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;
  question?: QuestionInterface[];
  response?: ResponseInterface[];
  organization?: OrganizationInterface;
  _count?: {
    question?: number;
    response?: number;
  };
}

export interface SurveyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  status?: string;
}
