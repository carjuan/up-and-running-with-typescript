interface ImageProps {
  src: string;
  title: string;
}
export default function Image({ src, title }: ImageProps) {
  return <img src={src} title={title} />;
}
