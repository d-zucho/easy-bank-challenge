import { Feature, Link } from './types'

import Online from '@/assets/icons/icon-online.svg'

export const NAV_LINKS: Link[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
]

export const FEATURE_STATS: Feature[] = [
  {
    icon: '/icon-online.svg',
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: '/icon-budgeting.svg',
    title: 'Simple Budgeting',
    description:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    icon: '/icon-onboarding.svg',
    title: 'Fast Onboarding',
    description:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: '/icon-api.svg',
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]
