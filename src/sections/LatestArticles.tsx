import ArticleCard from '@/components/ArticleCard'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ARTICLES } from '@/constants/data'
import { Article } from '@/constants/types'
import React from 'react'

const LatestArticles = () => {
  return (
    <section className='py-20'>
      <MaxWidthWrapper>
        <h2 className='text-4xl md:text-[40px] text-primary-dark_blue text-center md:text-left mb-20'>
          Latest Articles
        </h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-center'>
          {ARTICLES.map((article: Article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              byline={article.byline}
              image={article.image}
              imageAlt={article.imageAlt}
              previewText={article.previewText}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default LatestArticles
