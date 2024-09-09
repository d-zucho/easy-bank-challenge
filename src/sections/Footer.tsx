import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MyLogo from '@/components/MyLogo'
import Facebook from '@/assets/icons/icon-facebook.svg'
import Twitter from '@/assets/icons/icon-twitter.svg'
import Instagram from '@/assets/icons/icon-instagram.svg'
import Pinterest from '@/assets/icons/icon-pinterest.svg'
import Youtube from '@/assets/icons/icon-youtube.svg'
import { NAV_LINKS } from '@/constants/data'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-primary-dark_blue min-h-[200px] py-7'>
      <MaxWidthWrapper className='h-full'>
        {/* footer content container */}
        <div className='flex flex-col lg:flex-row h-full lg:justify-between gap-20 items-center'>
          {/* left content container */}
          <div className='flex gap-10 flex-col lg:flex-row'>
            {/* logo & icons container */}
            <div className='flex flex-col justify-between gap-5 items-center'>
              <MyLogo fill='white' className='' />
              <div className='flex gap-2'>
                <Facebook className='w-5 h-5' />
                <Youtube className='w-5 h-5' />
                <Twitter className='w-5 h-5' />
                <Instagram className='w-5 h-5' />
                <Pinterest className='w-5 h-5' />
              </div>
            </div>
            {/* both link column container */}
            <div className='flex flex-col lg:flex-row gap-5 items-center text-[15px]'>
              {/* left link column */}
              <div className='flex lg:flex-col gap-3 justify-between h-full text-white/70'>
                {
                  // NAV_LINKS.map((navLink, index) => ())
                  NAV_LINKS.slice(0, 3).map((navLink, index) => (
                    <p
                      key={index}
                      className='hover:text-primary-lime_green transition-all hover:cursor-pointer'
                    >
                      {navLink.label}
                    </p>
                  ))
                }
              </div>
              <div className='flex lg:flex-col gap-3 justify-between h-full text-white/70'>
                {
                  // NAV_LINKS.map((navLink, index) => ())
                  NAV_LINKS.slice(3).map((navLink, index) => (
                    <p
                      key={index}
                      className='hover:text-primary-lime_green transition-all hover:cursor-pointer'
                    >
                      {navLink.label}
                    </p>
                  ))
                }
                <span className='hover:text-primary-lime_green transition-all hover:cursor-pointer'>
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between gap-4'>
            <Button className='bg-my-gradient text-white text-sm rounded-full px-8 font-semibold hover:shadow-md hover:opacity-95 transition-all'>
              <span>Request Invite</span>
            </Button>
            <p className='text-xs text-neutral-grayish_blue'>
              &copy; Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
