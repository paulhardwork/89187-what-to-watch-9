import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'Discerning travellers',
    date: 'Wed Mar 10 2022 00:37:14 GMT+0700 (GMT+07:00)',
    id: 4,
    rating: 7,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
  },
  {
    comment: 'Excellent!',
    date: 'Wed Mar 09 2022 00:37:14 GMT+0700 (GMT+07:00)',
    id: 1,
    rating: 9,
    user: {
      id: 40,
      name: 'John Bon Jovi',
    },
  },
  {
    comment: 'I dont like this',
    date: 'Wed Feb 09 2022 00:37:14 GMT+0700 (GMT+07:00)',
    id: 8,
    rating: 2.5,
    user: {
      id: 34,
      name: 'Leo Messi',
    },
  },
  {
    comment: 'Shit',
    date: 'Wed Jan 22 2022 00:37:14 GMT+0700 (GMT+07:00)',
    id: 5,
    rating: 3,
    user: {
      id: 7,
      name: 'Elon Musk',
    },
  },
  {
    comment: 'My favorite film, I watch it permanently!',
    date: 'Wed Jan 23 2022 00:37:14 GMT+0700 (GMT+07:00)',
    id: 1,
    rating: 10,
    user: {
      id: 1,
      name: 'Joe Biden',
    },
  },
];
