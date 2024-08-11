import { Post as PostType } from '../types/posts';
import CommentList from './CommentList';
import Content from './Content';
import Image from './Image';

interface PostProps {
  post: PostType;
}

export default function Post({
  post: { title, content, image, comments },
}: PostProps) {
  return (
    <li>
      <h2>{title}</h2>
      <Image src={image} title={title} />
      <Content content={content} />
      <CommentList comments={comments} />
    </li>
  );
}
