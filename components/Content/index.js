import React from "react";
import Header from "./Header/Header";
import styles from "./Content.module.scss";
import { useContext } from "react";
import { StoreContext } from "../store/StateProvider";
export default function index() {
	return (
		<div className={styles.content}>
			<Header />
			<MainSection />
		</div>
	);
}

const MainSection = () => {
	const { state, actions } = useContext(StoreContext);
	return (
		<div className={styles.mainContent}>
			<aside className={styles.leftAside}>
				<button onClick={actions.fetchQuakeData}>Earth Quakes</button>
				<button onClick={actions.asyncDecrement}>UFOS</button>
			</aside>
			<section className={styles.middleSection}></section>
			<aside className={styles.rightAside}></aside>
		</div>
	);
};
