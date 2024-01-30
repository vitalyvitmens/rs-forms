import { Task1 } from './Tasks/Task1'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>Forms</h1>
			<header className={styles.appHeader}>
				<Task1 />
			</header>
		</div>
	)
}
