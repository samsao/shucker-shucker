import { Drive } from 'model/drive';
import moment from 'moment';

const mockedDrive: Drive = {
  affiliatesLinks: [],
  brand: 'Western Digital',
  createdBy: 'Bleh',
  createdDate: moment(),
  id: 0,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff8%2FLaptop-hard-drive-exposed.jpg%2F1200px-Laptop-hard-drive-exposed.jpg&f=1&nofb=1',
  isShuckable: false,
  lastUpdated: moment(),
  lastUpdatedBy: '',
  model: 'Caca',
  tutorialUrl: '',
};

const mockedDrive2: Drive = {
  affiliatesLinks: [],
  brand: 'Samsung',
  createdBy: 'Bleh',
  createdDate: moment(),
  id: 0,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FCIkcSqqWdXU%2Fmaxresdefault.jpg&f=1&nofb=1',
  isShuckable: true,
  lastUpdated: moment(),
  lastUpdatedBy: '',
  model: 'Blah',
  tutorialUrl: '',
};

const mockedDrive3: Drive = {
  affiliatesLinks: [],
  brand: 'Hitachi',
  createdBy: 'Bleh',
  createdDate: moment(),
  id: 0,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F122003598523-0-1%2Fs-l1000.jpg&f=1&nofb=1',
  isShuckable: false,
  lastUpdated: moment(),
  lastUpdatedBy: '',
  model: 'Ultrastar',
  tutorialUrl: '',
};
const mockedDrives: Drive[] = [mockedDrive, mockedDrive2, mockedDrive3];

export interface DriveController {
  fetchDrives: () => Drive[];
}

export class MockDriveController implements DriveController {
  fetchDrives = (): Drive[] => {
    return mockedDrives;
  };
}
