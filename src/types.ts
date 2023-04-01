export type POST = {
    title: string,
    featuredImage:any,
    excerpt: string,
    createdAt: string,
    author: Author,
}

export type Author = {
    name:string,
    photo:Media,
}

export type Media = {
    url: string,
}


export type Comment = {
  name:string,
  createdAt: string,
  comment:string,
}

export type Post = {
  slug: string,
  createdAt: string,
  title: string,
  featuredImage: FeaturedImage
}

export type FeaturedImage= {
    url: string, 
}