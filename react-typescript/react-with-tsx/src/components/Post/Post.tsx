import IPostItem from '../../types/PostItem';

interface IPostListProps {
  post: IPostItem;
}

export default function Post({ post: { title, votes } }: IPostListProps) {
  return (
    <li>
      <h4>
        {title} | {votes}
      </h4>
    </li>
  );
}
