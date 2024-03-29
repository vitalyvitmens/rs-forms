import { useState, useRef } from 'react'
import { CustomInput, Button, CustomSelect } from '../../components'
import styles from './Signin.module.css'

export function Signin({ onSubmit }) {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})

	const formConfigInputsRef = useRef(null)
	const [configInputs, setConfigInputs] = useState({
		placeholder: 'Your email',
		label: 'Email',
		description: '',
		error: null,
		variant: 'Default',
		radius: 5,
		size: 16,
		disabled: false,
		asterisk: true,
	})

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleConfigInputsChange = (e) => {
		if (e.target.name === 'disabled' || e.target.name === 'asterisk') {
			setConfigInputs((prev) => ({
				...prev,
				[e.target.name]: !prev[e.target.name],
			}))
		} else {
			setConfigInputs((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}))
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(inputs.email, inputs.password)
		formRef.current.reset()
		setInputs({ email: '', password: '' })
	}

	const inputsStyle = configInputs.error
		? styles.inputFieldError
		: configInputs.variant === 'Default'
		? styles.inputField
		: configInputs.variant === 'Filled'
		? styles.inputFilled
		: styles.inputUnstyled

	return (
		<div className={styles.signin}>
			<div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<CustomInput
						className={inputsStyle}
						label={configInputs.label}
						required={configInputs.asterisk}
            autoComplete="email"
						type="email"
						id="email"
						name="email"
						placeholder={configInputs.placeholder}
						value={inputs.email}
						description={configInputs.description}
						error={configInputs.error}
						variant={configInputs.variant}
						radius={configInputs.radius}
						size={configInputs.size}
						disabled={configInputs.disabled}
						onChange={handleChange}
					/>
					<CustomInput
						className={inputsStyle}
						label="Password"
						required={configInputs.asterisk}
						type="password"
						id="password"
						name="password"
						placeholder="Your password"
						value={inputs.password}
						description="This is the password field"
						error={configInputs.error}
						variant={configInputs.variant}
						radius={configInputs.radius}
						size={configInputs.size}
						disabled={configInputs.disabled}
						onChange={handleChange}
					/>
					<Button type="submit">Отправить</Button>
				</form>
			</div>

			<div className={styles.settings}>
				<form ref={formConfigInputsRef} onChange={handleConfigInputsChange}>
					<CustomInput
						label="Placeholder"
						type="text"
						id="placeholder"
						name="placeholder"
						placeholder="Placeholder"
						defaultValue={configInputs.placeholder}
						radius={5}
					/>
					<CustomInput
						label="Label"
						type="text"
						id="label"
						name="label"
						placeholder="Label"
						defaultValue={configInputs.label}
						radius={5}
					/>
					<CustomInput
						label="Description"
						type="text"
						id="description"
						name="description"
						placeholder="Description"
						radius={5}
					/>
					<CustomInput
						label="Error"
						type="text"
						id="error"
						name="error"
						placeholder="Error"
						radius={5}
					/>
					<CustomSelect
						label="Variant"
						type="select"
						id="variant"
						name="variant"
						defaultValue={configInputs.variant}
					/>
					<CustomInput
						label="Radius"
						type="range"
						id="radius"
						name="radius"
						min="0"
						max="15"
						step="5"
						defaultValue={configInputs.radius}
					/>
					<CustomInput
						label="Size"
						type="range"
						id="size"
						name="size"
						min="12"
						max="28"
						step="4"
						defaultValue={configInputs.size}
					/>
					<CustomInput
						className={styles.toggle}
						label="Disabled"
						type="checkbox"
						id="disabled"
						name="disabled"
						defaultChecked={configInputs.disabled}
					/>
					<CustomInput
						className={styles.toggle}
						label="With asterisk"
						type="checkbox"
						id="asterisk"
						name="asterisk"
						defaultChecked={configInputs.asterisk}
					/>
				</form>
			</div>
		</div>
	)
}
