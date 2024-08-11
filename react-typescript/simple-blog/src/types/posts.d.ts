type Posts = Array<Post>;

export interface Post {
  title: string;
  image: string;
  content: string;
  comments: Array<Comment>;
}

export interface Comment {
  username: string;
  text: string;
}
