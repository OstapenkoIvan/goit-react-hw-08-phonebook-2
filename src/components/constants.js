import {
  WrenchIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { SiReact, SiReactrouter, SiRedux, SiTailwindcss } from 'react-icons/si';

export const features = [
  {
    name: 'Contact list',
    description:
      'Complete contact list with ability to add/delete and edit contacts. You are able to filter by name and by number. Contacts save if you log out.',
    icon: UsersIcon,
    dest: '/contacts',
  },
  {
    name: 'User details',
    description:
      'Page with your personal information and ability to log out. If future, there will be a ability to change information and login details.',
    icon: UserIcon,
    dest: '/details',
  },
  {
    name: 'Work in progress 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: WrenchIcon,
    dest: '/',
  },
  {
    name: 'Work in progress 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: WrenchScrewdriverIcon,
    dest: '/',
  },
];

export const featuresAuth = [
  {
    name: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
    icon: SiReact,
  },
  {
    name: 'React router',
    description:
      'React Router enables navigation among views of various components in a React Application.',
    icon: SiReactrouter,
  },
  {
    name: 'Redux',
    description:
      'Redux is an open-source JavaScript library for managing and centralizing application state.',
    icon: SiRedux,
  },
  {
    name: 'TailwindCss',
    description:
      'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.',
    icon: SiTailwindcss,
  },
];
