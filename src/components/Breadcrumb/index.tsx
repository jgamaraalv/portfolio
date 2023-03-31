"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import styles from "./breadcumb.module.css";

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  const pathArray = pathname.split("/");

  const closeButtonClickHandler = () => {
    router.push(pathArray[1]);
  };

  return pathArray.length >= 3 ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>{pathArray[2]}.tsx</p>

        <button onClick={closeButtonClickHandler}>
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  ) : null;
}
