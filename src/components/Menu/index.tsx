"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./menu.module.css";

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className={styles.list} aria-label="Main menu">
      <li>
        <Link href="/" className={pathname === "/" ? styles.active : undefined}>
          _hello
        </Link>
      </li>
      <li>
        <Link
          href="/about/bio"
          className={pathname.includes("/about") ? styles.active : undefined}
        >
          _about
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className={pathname === "/blog" ? styles.active : undefined}
          aria-disabled={true}
        >
          _blog
        </Link>
      </li>
      <li>
        <a
          href="mailto:hello@vequiato.dev"
          className={pathname === "/contact" ? styles.active : undefined}
          target="_blank"
        >
          _contact
        </a>
      </li>
    </ul>
  );
}
