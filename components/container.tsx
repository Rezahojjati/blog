import styles from "../styles/Home.module.css";

type props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Container({ children }: props) {
  return <div className={styles.container}>{children}</div>;
}
