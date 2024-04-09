'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { createPost } from '@/server/post'
import React from 'react'

const PostComposer: React.FC = () => {
  const [content, setContent] = React.useState<string>();
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  const handleSubmit = async () => {
    if (content) {
      await createPost({ content });
      setContent("");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Something</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 py-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>

          <Textarea
            value={content}
            onChange={handleChange}
            placeholder='What is going well today?'
          />
        </div>

        <div className="flex">
          <Button className="ml-auto" onClick={handleSubmit}>
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PostComposer