import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import MobileHeroPattern from '@/assets/icons/bg-intro-mobile.svg'
import HeroImage from '@/assets/images/image-mockups.png'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='relative z-0 overflow-y-clip'>
      <MobileHeroPattern className='absolute -z-10 -top-28 right-0 w-full md:w-auto md:overflow-visible ' />

      <MaxWidthWrapper className='w-full'>
        <div className='grid md:grid-cols-2  items-center'>
          {/* start images */}
          <div className='w-full md:order-2'>
            <Image
              src={HeroImage}
              alt='hero'
              aria-hidden='true'
              width={500}
              height={500}
              className='-mt-40 mx-auto md:hidden'
            />
            <Image
              src={HeroImage}
              alt='hero'
              // width={800}
              // height={800}
              aria-hidden='true'
              className='-mt-24 -mr-10 mx-auto hidden md:block'
            />
          </div>

          {/* copy */}
          <div className='flex flex-col gap-5 items-center lg:items-start md:order-1'>
            <div className='text-center lg:text-left space-y-4'>
              <h1 className='text-4xl md:text-[46px] lg:text-[52px] text-primary-dark_blue'>
                Next generation digital banking
              </h1>
              <p className='text-neutral-grayish_blue md:max-w-lg mx-auto'>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </div>
            <Button className='bg-my-gradient hover:scale-105 hover:shadow-xl transition-all rounded-full px-8 text-sm font-semibold'>
              Request Invite
            </Button>
          </div>
          {/* END COPY */}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
