import { PrimaryButton } from "./PrimaryButton";

import styles from "./Product.module.scss";

type ProductProps = {
    pictureUrl: string;
    price: number;
    description: string;
};
export function Product({ pictureUrl, price, description }: ProductProps) {
    return (
        <li className={styles.root}>
            <img className={styles.coverImage} src={pictureUrl} alt="" />
            <span>{price}₪</span>
            <p>{description}</p>
            <PrimaryButton className={styles.callToAction}>Add to cart</PrimaryButton>
        </li>
    );
}
