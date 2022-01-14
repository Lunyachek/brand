import { getConfig } from '@edx/frontend-platform';

export { default as logoHeader } from './logo.svg'
export { default as footerLogo } from './footerLogo.svg';
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
        title: 'instagram',
        icon: 'ico-instagram'
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
        title: 'odnoklassniki',
        icon: 'ico-odnoklassniki'
    },
    {
        url: '#',
        title: 'vimeo',
        icon: 'ico-vimeo'
    },
    {
        url: '#',
        title: 'vk',
        icon: 'ico-vk'
    },
    {
        url: '#',
        title: 'behance',
        icon: 'ico-behance'
    },
    {
        url: '#',
        title: 'google-plus',
        icon: 'ico-google-plus'
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
