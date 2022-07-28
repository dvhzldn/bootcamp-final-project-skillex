import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SkillEx</title>
				<meta name="description" content="SkillEx " />
				<link rel="icon" href="/LightBulbFAVICON.ico" />
			</Head>
			<Menu />
		</div>
	);
}
