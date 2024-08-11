import { Posts, Post as IPost } from '../types/posts';
import Post from './Post';

interface PostListProps {
  posts: Posts;
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post: IPost, index: number) => (
        <Post key={index} post={post} />
      ))}
    </ul>
  );
}
