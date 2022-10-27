import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { apiInstance } from "../apiInstance";
import PostItem from "../components/PostItem";

function Post({ post }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <PostItem post={post} />
    </Layout>
  );
}

export default Post;

export async function getStaticProps(context: any) {
  const { params } = context;
  const res: any = await apiInstance("GET", "/posts", {});
  const data: any = res?.data?.posts ?? [];

  const post = data?.find(
    (post: any) => post.title.split(" ").join("-") === params.postId
  );
  if (!post.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: any = await response.json();
  const paths = data?.posts?.map((post: any) => {
    return {
      params: { postId: `/${post.title.split(" ").join("-")}/` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
