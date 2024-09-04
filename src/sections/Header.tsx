import React from 'react'
import Logo from '@/assets/icons/logo.svg'

import { NAV_LINKS } from '@/constants/data'
import MobileNav from '@/components/MobileNav'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full overflow-x-hidden'>
      <div className='container py-5'>
        <div className='flex-between'>
          <Logo className='h-[20px]' />
          <div>
            <MobileNav className='md:hidden' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
