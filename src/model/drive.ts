import { Moment } from 'moment';

export interface Drive {
  id: number;
  brand: string;
  model: string;
  imageUrl: string;
  isShuckable: boolean;
  tutorialUrl: string;
  affiliatesLinks: string[];

  createdBy: string;
  createdDate: Moment;
  lastUpdated: Moment;
  lastUpdatedBy: string;
}
