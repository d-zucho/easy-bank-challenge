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
      <MaxWidthWrapper className='w-full'>
        <div className='grid md:grid-cols-2 '>
          {/* start images */}
          <div className='w-full'>
            <MobileHeroPattern className='w-full absolute -top-10 inset-0 -z-10 object-cover' />
            <Image
              src={HeroImage}
              alt='hero'
              aria-hidden='true'
              className='-mt-44'
            />
          </div>
          {/* copy */}
          <div className='flex flex-col gap-5 items-center lg:items-start'>
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
            <Button className='bg-my-gradient hover:scale-105 transition-all rounded-full px-8 text-sm font-semibold'>
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
