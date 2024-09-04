import React from 'react'
import Logo from '@/assets/icons/logo.svg'
import Menu from '@/assets/icons/icon-hamburger.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full'>
      <div className='container py-5'>
        <div className='flex-between'>
          <Logo className='h-[20px]' />
          <div>
            <Menu className='h-[20px]' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
