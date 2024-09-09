import { Article, Feature, Link } from './types'

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

export const ARTICLES: Article[] = [
  {
    title: 'Receive money in any currency with no fees',
    byline: 'By Claire Robinson',
    image: '/image-currency.jpg',
    imageAlt: 'Currency',
    previewText:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    title: 'Treat yourself without worrying about money',
    byline: 'By Wilson Hutton',
    image: '/image-restaurant.jpg',
    imageAlt: 'Restaurant',
    previewText:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    title: 'Take your Easybank card wherever you go',
    byline: 'By Wilson Hutton',
    image: '/image-plane.jpg',
    imageAlt: 'Plane',
    previewText:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    title: 'Our invite-only Beta accounts are now live!',
    byline: 'By Claire Robinson',
    image: '/image-confetti.jpg',
    imageAlt: 'Confetti',
    previewText:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …',
  },
]
