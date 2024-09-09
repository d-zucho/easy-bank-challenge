import Image from 'next/image'
import React from 'react'

interface ArticleCardProps {
  title: string
  byline: string
  image: string
  imageAlt: string
  previewText: string
}

const ArticleCard = ({
  title,
  byline,
  image,
  imageAlt,
  previewText,
}: ArticleCardProps) => {
  return (
    <article className='w-fit max-w-sm rounded-lg bg-neutral-very_light_gray border border-neutral-light_grayish_blue shadow-md md:mx-auto lg:mx-0'>
      <Image
        src={image}
        alt={imageAlt}
        width={250}
        height={200}
        className='object-cover overflow-hidden rounded-t-lg min-h-[200px] max-h-[200px] w-full xl:max-w-[250px]'
      />
      <div id='article__content-wrapper' className='p-6'>
        <span className='text-xs text-neutral-grayish_blue'>{byline}</span>

        <h4 className='text-primary-dark_blue font-medium py-2'>{title}</h4>
        <p className='text-sm text-neutral-grayish_blue'>{previewText}</p>
      </div>
    </article>
  )
}

export default ArticleCard
