import { PropsWithChildren } from "react";

import styles from "./Gallery.module.scss";

export function Gallery({ children }: PropsWithChildren) {
  return (
    <ul className={styles.root}>
      {children}
    </ul>
  );
}