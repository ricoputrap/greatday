"use client";

import { Button } from '@/components/ui/button';
import { MessageSquare, Repeat2, ThumbsUp } from 'lucide-react';
import React from 'react'

interface Props {
  postId: number
}

const Actions: React.FC<Props> = ({ postId }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const onLike = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  }

  const onComment = () => {
    // TODO
  }

  const onShare = () => {
    // TODO
  }

  return (
    <div className="flex justify-evenly">
      <Button
        variant={isLiked ? "destructive" : "outline"}
        className="flex gap-2 items-center"
        onClick={onLike}
      >
        <ThumbsUp size="20" />
        {isLiked ? "Liked" : "Like"}
      </Button>

      <Button
        variant="outline"
        className="flex gap-2 items-center"
        onClick={onComment}
      >
        <MessageSquare size="20" />
        Comment
      </Button>

      <Button
        variant="outline"
        className="flex gap-2 items-center"
        onClick={onShare}
      >
        <Repeat2 size="20" />
        Share
      </Button>
    </div>
  )
}

export default Actions