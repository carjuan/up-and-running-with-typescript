import { useState } from 'react';
import PostList from '../PostList/PostList';
import IPostList from '../../types/PostList';

function Avatar() {
  return <img src="https://placehold.co/50" />;
}

function Icon() {
  return <span>👍</span>;
}

function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Avatar />
        </nav>
      </div>
    </header>
  );
}

function SubredditHeader() {
  return <h3>/r/javascript</h3>;
}

const initialPosts = [
  {
    title: 'hello',
    votes: 0,
  },
  {
    title: 'world',
    votes: 0,
  },
  {
    title: 'foo',
    votes: 2,
  },
];

export default function Subreddit() {
  const [posts, setPosts] = useState<IPostList['posts']>(initialPosts);
  return (
    <div>
      <Navbar />
      <SubredditHeader />
      <PostList posts={posts} />
    </div>
  );
}
