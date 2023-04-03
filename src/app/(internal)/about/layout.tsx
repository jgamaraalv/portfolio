import styles from "./about.module.css";

import Sidebar, { Tab } from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";

const tabs: Tab[] = [
  {
    title: "personal-info",
    id: "personal-info",
    files: [
      {
        title: "bio.tsx",
        icon: <i className="ri-reactjs-fill"></i>,
        url: "/about/bio",
        id: "bio",
      },
      {
        title: "experience.tsx",
        icon: <i className="ri-reactjs-fill"></i>,
        url: "/about/experience",
        id: "experience",
      },
    ],
  },
  {
    title: "contacts",
    id: "contacts",
    files: [
      {
        title: "hello@vequiato.dev",
        icon: <i className="ri-mail-fill"></i>,
        url: "mailto:hello@vequiato.dev",
        id: "contact",
      },
    ],
  },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
