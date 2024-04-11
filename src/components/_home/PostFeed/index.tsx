import PostItem from '@/components/_home/PostItem';
import { getPosts } from '@/server/post';
import { IPost } from '@/types/post.types'
import React from 'react'

const PostFeed: React.FC = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <div className="flex flex-col gap-4 mb-10">
      {posts.map((post) => (
        <PostItem key={post.id} />
      ))}
    </div>
  )
}

export default PostFeed