import React from 'react'
import { Card, CardContent } from '../../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { MessageSquare, Repeat2, ThumbsUp } from 'lucide-react'
import Actions from './Actions'

const PostItem: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-3 pb-2 flex flex-col gap-3">
        {/* user profile, name, username, and time created */}
        <div className="flex gap-2">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-sm">Rico Putra Pradana</p>
              <p className="text-sm">@rico_rpp21</p>
            </div>
            <p className="text-sm">1h ago</p>
          </div>
        </div>

        {/* content */}
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque perferendis, tenetur aspernatur velit explicabo eos quam quae totam dolorum. Asperiores, earum rem cupiditate similique provident eaque ullam sit quaerat.
        </div>

        {/* Analytics */}
        <div className="flex justify-between items-center text-xs">
          {/* total liked or liked by */}
          <div>
            <p>Liked by XYZ and 2 others</p>
          </div>

          {/* total comments and share */}
          <div className="flex gap-4 items-center">
            <p>2 comments</p>
            <p>1 share</p>
          </div>
        </div>

        {/* actions */}
        <Actions
          postId={9}
        />
      </CardContent>
    </Card>
  )
}

export default PostItem