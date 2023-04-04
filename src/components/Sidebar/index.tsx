"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import styles from "./sidebar.module.css";
import type { File, Tab, SidebarProps } from "./interfaces";

export default function Sidebar({ tabs }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(tabs[0].id);

  const tabClickHandler = (e: React.MouseEvent) => {
    const { href, id } = e.target as HTMLLinkElement;

    if (href) {
      router.push(href);
      return;
    }

    if (id) {
      setActive(id);
    }
  };

  return (
    <div className={styles.content}>
      {tabs.map((tab) => (
        <ul className={styles.tab} key={tab.id} onClick={tabClickHandler}>
          <li id={tab.id}>
            {active === tab.id ? (
              <i className="ri-arrow-down-s-fill"></i>
            ) : (
              <i className="ri-arrow-right-s-fill"></i>
            )}

            {tab.title}
          </li>

          <ul
            className={`${styles.files} ${
              active === tab.id ? styles.active : ""
            }`}
          >
            {tab.files.map((file) => (
              <li
                key={file.id}
                className={pathname === file.url ? styles.active : undefined}
              >
                {file.url ? (
                  <Link href={file.url}>
                    {file.icon}

                    {file.title}
                  </Link>
                ) : (
                  <p>
                    {file.icon}

                    {file.title}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
}
export type { File, Tab, SidebarProps };
