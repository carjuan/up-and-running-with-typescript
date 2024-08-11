import { Comment as CommentType } from '../types/posts';

interface CommentProps {
  comment: CommentType;
}
export default function Comment({ comment: { text, username } }: CommentProps) {
  return (
    <li>
      <a href="">{username}</a>
      <p>{text}</p>
    </li>
  );
}
