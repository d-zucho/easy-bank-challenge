import Image from 'next/image'
import React from 'react'

interface FeatureProps {
  title: string
  description: string
  icon: string
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <article className='bg-neutral-light_grayish_blue rounded-2xl px-4  py-8 shadow-md  mx-auto'>
      <div className='flex flex-col items-center text-center max-w-sm mx-auto lg:items-start lg:text-start'>
        {/* now display icon as component passed from props */}

        <Image src={icon} alt={title} width={50} height={50} />
        {/* <Icon /> */}
        <div className='mt-10 space-y-4'>
          <h2 className='heading2'>{title}</h2>
          <p className='text-neutral-grayish_blue text-sm'>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default Feature
