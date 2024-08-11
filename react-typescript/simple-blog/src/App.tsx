import React from 'react';
import posts from './data/posts.json';
import PostList from './components/PostList.tsx';
import { Posts } from './types/posts';

function App() {
  const [postsList] = React.useState<Posts | []>(posts);
  return (
    <div>
      <h1>Simple Blog</h1>
      <PostList posts={postsList} />
    </div>
  );
}

export default App;
