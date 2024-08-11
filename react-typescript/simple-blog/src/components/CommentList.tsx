import { Comment as CommentType } from '../types/posts';
import Comment from './Comment';

interface CommentListProps {
  comments: Array<CommentType>;
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <ul>
      {comments.map((comment: CommentType, index: number) => (
        <Comment key={index} comment={comment} />
      ))}
    </ul>
  );
}
