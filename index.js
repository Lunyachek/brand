import { getConfig } from '@edx/frontend-platform';

export { default as logoHeader } from './logo.svg'
export { default as footerLogo } from './logo-footer.svg';
export { default as svgSprite } from './svg-sprite.svg';

// Object of translations which extends footer messages object.
// All necessary translations should be added directly into the footer or/and header components.
export const brandMessages = {
    'footer.staticPages.about': {
        id: 'footer.staticPages.about',
        defaultMessage: 'About',
        description: 'The text for the about link title in the footer.',
    },
    'footer.staticPages.privacy': {
        id: 'footer.staticPages.privacy',
        defaultMessage: 'Privacy Policy',
        description: 'The text for the privacy policy link title in the footer.',
    },
    'footer.staticPages.tos': {
        id: 'footer.staticPages.tos',
        defaultMessage: 'Terms of Service',
        description: 'The text for the TOS link title in the footer.',
    },
    'footer.staticPages.contact': {
        id: 'footer.staticPages.contact',
        defaultMessage: 'Contact Us',
        description: 'The text for the contact us link title in the footer.',
    },
};

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
        messageId: 'footer.staticPages.about',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/privacy`,
        messageId: 'footer.staticPages.privacy',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/tos`,
        messageId: 'footer.staticPages.tos',
        target_blank: false
    },
    {
        href: `${getConfig().LMS_BASE_URL}/support/contact_us`,
        messageId: 'footer.staticPages.contact',
        target_blank: false
    },
];

export const isFooterDark = true;

export const displayCreatedByBlock = true;
