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
      <li>
        <Link
          href="/projects"
          className={pathname === "/projects" ? styles.active : undefined}
        >
          _projects
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={pathname === "/contact" ? styles.active : undefined}
        >
          _contact-me
        </Link>
      </li>
    </ul>
  );
}
