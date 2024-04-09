import { Card, CardContent } from '@/components/ui/card';
import { getPosts } from '@/server/post';
import { IPost } from '@/types/post.types'
import React from 'react'

const PostFeed: React.FC = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            { post.content }
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default PostFeed