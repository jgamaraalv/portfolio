import type { Metadata } from "next";

async function getData(id: number) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const post = await res.json();

  if (post.error) {
    return null;
  }

  return post;
}

export async function generateStaticParams() {
  const res = await fetch("https://dev.to/api/articles?username=jgamaraalv");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const post = await getData(params.id);
  return { title: post.title, description: post.description };
}

async function BlogPost({ params }: { params: { slug: string; id: number } }) {
  const { id } = params;
  const post = await getData(id);

  return (
    <section>
      <article>
        <h1>
          <b>{post.title}</b>
        </h1>

        <div dangerouslySetInnerHTML={{ __html: post.body_html }}></div>
      </article>
    </section>
  );
}

export default BlogPost;
