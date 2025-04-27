import styles from "./SiteNav.module.scss";

export function SiteNav() {
    return (
        <nav>
            <menu className={styles.menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
            </menu>
        </nav>
    );
}
