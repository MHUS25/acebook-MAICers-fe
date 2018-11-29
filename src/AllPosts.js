import React from 'react';
import Post from './Post'

const AllPosts = (props) => {
  var posts = props.posts.map((post) => {
    return(
      <div key={post.id}>
        <Post post={post} />
      </div>
    )
  })

  return(
    <ul>
      {posts}
    </ul>
  )
}

export default AllPosts
