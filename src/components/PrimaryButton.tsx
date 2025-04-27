import { PropsWithChildren } from "react";

import styles from "./PrimaryButton.module.scss";

type PrimaryButtonProps = PropsWithChildren<{
    className?: string,
}>;

export function PrimaryButton({ className, children }: PrimaryButtonProps) {
    return (
        <button className={`${styles.root}${className ? ` ${className}` : ""}`}>{children}</button>
    );
}
