import { forwardRef } from 'react'
import styles from './CustomInput.module.css'

export const CustomInput = forwardRef((props, ref) => {
	const asteriskStyle = {
		color: 'red',
		marginLeft: '2px',
	}

	return (
		<div className={styles.customInput}>
			<label className={styles.lable} htmlFor={props.id}>
				{props.label}
				{props.required && <span style={asteriskStyle}>*</span>}
			</label>
			<span className={styles.description}>{props.description}</span>
			<input
				className={styles.inputField}
				{...props}
				ref={ref}
				style={{
					borderRadius: props.radius + 'px',
					fontSize: props.size + 'px',
				}}
			/>
			<span className={styles.error}>{props.error}</span>
		</div>
	)
})
