import { forwardRef } from 'react'
import styles from './CustomSelect.module.css'

export const CustomSelect = forwardRef((props, ref) => {
	return (
		<div className={styles.customSelect}>
			<label className={styles.lable} htmlFor={props.id}>
				{props.label}
			</label>
			<select
				className={styles.selectField}
				{...props}
				ref={ref}
				name={props.name}
				id={props.id}
			>
				<option value="Default">Default</option>
				<option value="Filled">Filled</option>
				<option value="Unstyled">Unstyled</option>
			</select>
		</div>
	)
})
