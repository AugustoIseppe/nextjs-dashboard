import PostsDetalhes from "@/components/posts/PostsDetalhes";
import obterPostsPorId from "@/data/service/obterPostsPorId";
import Link from "next/link";

export default async function PaginaPostsPorId(props: any) {
  const post = await obterPostsPorId(+props.params.id);

  if (!post) return <div>Post não encontrado</div>;

  if ("error" in post) return <div>{post.message}</div>;

  return (
    <div className="flex flex-col gap-5">
      <PostsDetalhes post={post} />
      <Link href="/posts" className="self-center bg-blue-500 p-2 rounded">
        Voltar
      </Link>
    </div>
  );
}
