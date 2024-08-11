interface ContentProps {
  content: string;
}
export default function Content({ content }: ContentProps) {
  return <p>{content}</p>;
}
