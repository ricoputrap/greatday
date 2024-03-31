import React from 'react'
import PostComposer from './PostComposer'
import PostFeed from './PostFeed'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <PostComposer />

      <PostFeed />
    </div>
  )
}

export default Home