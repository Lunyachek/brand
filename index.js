import { getConfig } from '@edx/frontend-platform';

export { default as logoHeader } from './logo.svg'
export { default as footerLogo } from './logo-footer.svg';
export { default as svgSprite } from './svg-sprite.svg';

export const footerIcons = [
    {
        url: '#',
        title: 'facebook',
        icon: 'ico-facebook'
    },
    {
        url: '#',
        title: 'twitter',
        icon: 'ico-twitter'
    },
    {
        url: '#',
        title: 'linkedin',
        icon: 'ico-linkedin'
    },
    {
        url: '#',
        title: 'youtube',
        icon: 'ico-youtube'
    },
    {
        url: '#',
        title: 'telegram',
        icon: 'ico-telegram'
    },
    {
        url: '#',
        title: 'instagram',
        icon: 'ico-instagram'
    },
    {
        url: '#',
        title: 'mail',
        icon: 'ico-envelope'
    },
];

export const footerLinks = [
    {
        href: `${getConfig().LMS_BASE_URL}/about`,
        title: 'About',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/privacy`,
        title: 'Privacy Policy',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/tos`,
        title: 'Terms of Service',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/support/contact_us`,
        title: 'Contact Us',
        target_blank: false
    },
];

export const isFooterDark = true;

export const displayCreatedByBlock = true;
