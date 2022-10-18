// eslint-disable-next-line import/no-unresolved
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

export { default as logoHeader } from './logo.svg';
export { default as footerLogo } from './logo-footer.svg';
export { default as svgSprite } from './svg-sprite.svg';

export const footerIcons = [
  {
    url: '#',
    title: 'facebook',
    icon: 'ico-facebook',
  },
  {
    url: '#',
    title: 'twitter',
    icon: 'ico-twitter',
  },
  {
    url: '#',
    title: 'linkedin',
    icon: 'ico-linkedin',
  },
  {
    url: '#',
    title: 'youtube',
    icon: 'ico-youtube',
  },
  {
    url: '#',
    title: 'telegram',
    icon: 'ico-telegram',
  },
  {
    url: '#',
    title: 'instagram',
    icon: 'ico-instagram',
  },
  {
    url: '#',
    title: 'mail',
    icon: 'ico-envelope',
  },
];

export const footerLinks = [
  {
    href: `${getConfig().LMS_BASE_URL}/about`,
    message: messages['footer.staticPages.about'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/privacy`,
    message: messages['footer.staticPages.privacy'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/tos`,
    message: messages['footer.staticPages.tos'],
    targetBlank: false,
  },
  {
    href: `${getConfig().LMS_BASE_URL}/support/contact_us`,
    message: messages['footer.staticPages.contact'],
    targetBlank: false,
  },
];

export const isFooterDark = true;

export const displayCreatedByBlock = true;
