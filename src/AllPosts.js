import React from 'react';

const AllPosts = (props) => {
  var posts = props.posts.map((post) => {
    return(
      <div key={post.id}>
        <p>{post.message}</p>
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
