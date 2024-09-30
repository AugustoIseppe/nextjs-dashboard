import Posts from "@/data/model/Posts";

interface PostsDetalhesProps {
  post: Posts;
}

export default async function PostsDetalhes(props: PostsDetalhesProps) {
  const { post } = props;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-lg text-gray-500">{post.body}</p>
    </div>
  );
}
