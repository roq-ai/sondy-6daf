import { UserInterface } from 'interfaces/user';
import { QuestionInterface } from 'interfaces/question';
import { SurveyInterface } from 'interfaces/survey';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  user_id?: string;
  question_id?: string;
  answer: string;
  survey_id?: string;
  comment?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  question?: QuestionInterface;
  survey?: SurveyInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  question_id?: string;
  answer?: string;
  survey_id?: string;
  comment?: string;
}
