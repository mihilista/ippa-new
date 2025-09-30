import { LinkProps } from '@/helpers/links';

export const CONTACT_EMAIL = 'info@ippa.cz';
export const CONTACT_PHONE = '+420 602 205 036';

export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE_LINK = `tel:${CONTACT_PHONE.replace(/\s/g, '')}`;

export const CONTACT_ADDRESS = {
    street: 'Čertouská 353/8',
    city: 'Praha',
    zip: '198 00',
    country: 'Česká republika',
};

export const CONTACT_ADDRESS_LINK = 'https://maps.app.goo.gl/8xjYdXgqhobCYKb79';

export const VAT_ID = '';

export const SOCIAL_LINKS: LinkProps[] = [
    {
        href: 'https://www.facebook.com/',
        label: 'Facebook',
    },
    {
        href: 'https://www.instagram.com/',
        label: 'Instagram'
    }
];