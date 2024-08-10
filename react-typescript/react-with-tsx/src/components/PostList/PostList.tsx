import IPostItem from '../../types/PostItem';
import IPostList from '../../types/PostList';
import Post from '../Post/Post';

export default function PostList({ posts }: IPostList) {
  return (
    <div>
      <ul>
        {posts.map((post: IPostItem, index: number) => {
          return <Post key={index} post={post} />;
        })}
      </ul>
    </div>
  );
}
