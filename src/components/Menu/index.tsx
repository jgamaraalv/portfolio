"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./menu.module.css";

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
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
          _about-me
        </Link>
      </li>
      <li className={styles.disabled}>
        <Link
          href="/articles"
          className={pathname === "/articles" ? styles.active : undefined}
          aria-disabled={true}
        >
          _articles
        </Link>
      </li>
      <li>
        <a
          href="mailto:hello@vequiato.dev"
          className={pathname === "/contact" ? styles.active : undefined}
          target="_blank"
        >
          _contact-me
        </a>
      </li>
    </ul>
  );
}
