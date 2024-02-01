import { useState, useRef } from 'react'
import { CustomInput, Button, CustomSelect } from '../../components'
import styles from './Signup.module.css'

export function Signup({ onSubmit }) {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		name: '',
		nickname: '',
		email: '',
		gender: '',
		password: '',
		confirmPassword: '',
	})

	const formConfigInputsRef = useRef(null)
	const [configInputs, setConfigInputs] = useState({
		placeholder: 'Your name',
		label: 'Name',
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
		onSubmit(
			inputs.name,
			inputs.nickname,
			inputs.email,
			inputs.gender,
			inputs.password,
			inputs.confirmPassword
		)
		formRef.current.reset()
		setInputs({
			name: '',
			nickname: '',
			email: '',
			gender: '',
			password: '',
			confirmPassword: '',
		})
	}

	const inputsStyle = configInputs.error
		? styles.inputFieldError
		: configInputs.variant === 'Default'
		? styles.inputField
		: configInputs.variant === 'Filled'
		? styles.inputFilled
		: styles.inputUnstyled

	return (
		<div className={styles.signup}>
			<div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<CustomInput
						label={configInputs.label}
						className={inputsStyle}
						required={configInputs.asterisk}
						type="text"
						id="name"
						name="name"
						placeholder={configInputs.placeholder}
						value={inputs.name}
						description={configInputs.description}
						error={configInputs.error}
						variant={configInputs.variant}
						radius={configInputs.radius}
						size={configInputs.size}
						disabled={configInputs.disabled}
						onChange={handleChange}
					/>
					<CustomInput
						label="Nickname"
						className={inputsStyle}
						required={configInputs.asterisk}
						type="text"
						id="nickname"
						name="nickname"
						placeholder="Your nickname"
						value={inputs.nickname}
						description={configInputs.description}
						error={configInputs.error}
						variant={configInputs.variant}
						radius={configInputs.radius}
						size={configInputs.size}
						disabled={configInputs.disabled}
						onChange={handleChange}
					/>
					<CustomInput
						label="Email"
						className={inputsStyle}
						required={configInputs.asterisk}
						type="email"
						id="email"
						name="email"
						placeholder="Your email"
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
						label="Gender"
						className={inputsStyle}
						required={configInputs.asterisk}
						type="text"
						id="gender"
						name="gender"
						placeholder="Your gender"
						value={inputs.gender}
						description={configInputs.description}
						error={configInputs.error}
						variant={configInputs.variant}
						radius={configInputs.radius}
						size={configInputs.size}
						disabled={configInputs.disabled}
						onChange={handleChange}
					/>
					<CustomInput
						label="Password"
						className={inputsStyle}
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
					<CustomInput
						label="Confirm Password"
						className={inputsStyle}
						required={configInputs.asterisk}
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Your confirm password"
						value={inputs.confirmPassword}
						description="This is the confirm password field"
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
