import images from './images';
import gallery from './gallery';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '56,00',
    tags: ['AU', 'Bottle'],
  },
  {
    title: 'Catena Malbee',
    price: '59,00',
    tags: ['AU', 'Bottle'],
  },
  {
    title: 'La Vieillw Rose',
    price: '44,00',
    tags: ['FR', '750 ml'],
  },
  {
    title: 'Rhino Pale Ale',
    price: '31,00',
    tags: ['CA', '750 ml'],
  },
  {
    title: 'Irish Guinness',
    price: '26,00',
    tags: ['IE', '750 ml'],
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '20,00',
    tags: ['Aperol', 'Villa Marchesi prosecco', 'soda', '30 ml'],
  },
  {
    title: "Dark 'N' Stormy",
    price: '16,00',
    tags: ['Dark rum', 'Ginger beer', 'Slice of lime'],
  },
  {
    title: 'Daiquiri',
    price: '10,00',
    tags: ['Rum', 'Citrus juice', 'Sugar'],
  },
  {
    title: 'Old Fashioned',
    price: '31,00',
    tags: ['Bourbon', 'Brown sugar', 'Angostura Bitters'],
  },
  {
    title: 'Negroni',
    price: '26,00',
    tags: ['Gin', 'Sweet Vermouth', 'Campari', 'Orange garnish'],
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const galleryImages = [
  {
    imgUrl: images.gallery01,
    altEn: 'Gallery image',
    altDe: 'Galeriebild'
  },
  {
    imgUrl: images.gallery02,
    altEn: 'Gallery image',
    altDe: 'Galeriebild'
  },
  {
    imgUrl: images.gallery03,
    altEn: 'Gallery image',
    altDe: 'Galeriebild'
  },
  {
    imgUrl: images.gallery04,
    altEn: 'Gallery image',
    altDe: 'Galeriebild'
  },
]

export default { wines, cocktails, galleryImages, awards };
