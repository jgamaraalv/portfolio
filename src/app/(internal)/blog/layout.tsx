import styles from "./blog.module.css";

import Sidebar, { Tab } from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";

const getData = async () => {
  const res = await fetch("https://dev.to/api/articles?username=jgamaraalv");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return [
    {
      title: "my-blog-posts",
      id: "my-blog-posts",
      files: posts.map((post: any) => ({
        title: `${post.title}.tsx`,
        icon: <i className="ri-reactjs-fill"></i>,
        url: `/blog/${post.slug}/${post.id}`,
        id: post.id,
      })),
    },
  ];
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = await getData();

  return (
    <div className={styles.container}>
      <Sidebar tabs={tabs} />

      <div>
        <Breadcrumb />

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
