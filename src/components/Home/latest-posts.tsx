import React from 'react'
import { getBlogPosts } from '@/lib/getPosts'
import Link from 'next/link';

export default function LatestPosts() {
    let latestPosts = getBlogPosts();
    return (
    <>
      <h1>最近更新</h1>
      {latestPosts
        .sort((a,b)=>{
          if(
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className='text-wrap max-w-md my-10'>
            <Link href={"#"}>
              <h3 className='font-bold py-2 leading-3'>{post.metadata.title}</h3>  
            </Link>
          </article>
        ))}
    </>
  );
}
