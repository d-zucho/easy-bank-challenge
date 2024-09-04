import React from 'react'
import Logo from '@/assets/icons/logo.svg'

import { NAV_LINKS } from '@/constants/data'
import MobileNav from '@/components/MobileNav'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full overflow-x-hidden'>
      <MaxWidthWrapper>
        <div className='flex-between'>
          <Logo className='' />

          <nav className='hidden lg:flex gap-5'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={'#'}
                className='text-neutral-grayish_blue hover:text-primary-dark_blue transition-all'
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <button className='hidden text-white lg:block px-8 py-3 bg-my-gradient outline-none border-none rounded-full text-sm tracking-wide font-bold'>
              Request Invite
            </button>
          </div>
          <MobileNav className='lg:hidden' />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
