import React, { JSXElementConstructor } from 'react'

export type Link = {
  label: string
  href: string
}

// export type Feature = {
//   icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
//   title: string
//   description: string
// }

export type Feature = {
  icon: string
  title: string
  description: string
}

export type Article = {
  title: string
  byline: string
  image: string
  imageAlt: string
  previewText: string
}
