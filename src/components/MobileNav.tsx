import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Menu from '@/assets/icons/icon-hamburger.svg'
import Logo from '@/assets/icons/logo.svg'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { NAV_LINKS } from '@/constants/data'
import { Button } from './ui/button'

type Props = {
  className?: string
}

const MobileNav = ({ className }: Props) => {
  return (
    <aside className={className}>
      <div>
        <Sheet>
          <SheetTrigger>
            <Menu className='' />
          </SheetTrigger>
          <SheetContent className='h-full'>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                <VisuallyHidden.Root>EasyBank</VisuallyHidden.Root>
              </SheetDescription>
            </SheetHeader>
            <div className='mt-10 border-black flex flex-col justify-between items-center w-full h-[80%]'>
              <nav className='mt-7 text-neutral-grayish_blue font-medium text-lg text-center flex-center flex-col gap-6'>
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild>
                    <a
                      href={'#'}
                      className='hover:text-primary-dark_blue transition-all'
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <Button
                variant='outline'
                className='w-full py-8 bg-my-gradient rounded-full text-base font-bold tracking-wide text-white'
              >
                Request Invite
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </aside>
  )
}

export default MobileNav
