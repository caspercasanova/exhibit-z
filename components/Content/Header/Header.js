import React from "react";
import styles from "./Header.module.css";
export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<div className={styles.title}>Welcome To</div>
				<div className={styles.xhbitZ}>Exhibit Z</div>
			</div>
			<nav>
				<button>About</button>
			</nav>
		</header>
	);
}
