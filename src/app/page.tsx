import styles from "./index.module.css";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
	const session = await getServerAuthSession();

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					unnamed bracket website
				</h1>
				<div className={styles.cardRow}>
					<div className={styles.card}>
						<img src={session?.user.image as string} />
						{session?.user.name}
					</div>
				</div>
			</div>
		</main>
	);
}
