import Feature from '@/components/Feature'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FEATURE_STATS } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const WhyUsSection = () => {
  return (
    <section id='about' className='bg-neutral-very_light_gray mt-32 py-8'>
      <MaxWidthWrapper>
        <div className='flex flex-col'>
          <div className='text-center flex flex-col items-center md:items-start mx-auto gap-4 lg:text-left lg:mx-0'>
            <h2 className='text-3xl lg:text-4xl mx-auto lg:mx-0'>
              Why choose Easybank?
            </h2>
            <p className='text-neutral-grayish_blue max-w-s md:max-w-lg lg:max-w-[35rem]'>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8 md:items-center mt-20'>
            {FEATURE_STATS.map(({ title, icon, description }) => (
              <Feature
                key={title}
                title={title}
                icon={icon}
                description={description}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUsSection
