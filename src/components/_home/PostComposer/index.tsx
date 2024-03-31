import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const PostComposer: React.FC = () => {
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
            placeholder='What is going well today?'
          />
        </div>

        <div className="flex">
          <Button className="ml-auto">
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PostComposer