import { useState, useRef } from 'react'
import { CustomInput, Button, CustomSelect } from '../../components'
import styles from './Signin.module.css'

export function Signin() {
	const formRef = useRef(null)
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const [placeholder, setPlaceholder] = useState('Your email')
	const [label, setLabel] = useState('Email')
	const [description, setDescription] = useState('')
	const [error, setError] = useState(null)
	const [variant, setVariant] = useState('Default')
	const [radius, setRadius] = useState(5)
	const [size, setSize] = useState(16)
	const [disabled, setDisabled] = useState(false)
	const [asterisk, setAsterisk] = useState(true)

	const emailRef = useRef()
	const passwordRef = useRef()

	const handlePlaceholderChange = (e) => setPlaceholder(e.target.value)
	const handleLabelChange = (e) => setLabel(e.target.value)
	const handleDescriptionChange = (e) => setDescription(e.target.value)
	const handleErrorChange = (e) => setError(e.target.value)
	const handleVariantChange = (e) => setVariant(e.target.value)
	const handleBorderRadiusChange = (e) => setRadius(e.target.value)
	const handleFontSizeChange = (e) => setSize(e.target.value)
	const handleDisabledChange = () => setDisabled((prev) => !prev)
	const handleAsteriskChange = () => setAsterisk((prev) => !prev)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('####: submit', inputs)
		formRef.current.reset()
		setInputs({})
	}

	return (
		<div className={styles.signin}>
			<div>
				<form ref={formRef} onChange={handleChange} onSubmit={handleSubmit}>
					<CustomInput
						label={label}
						className={
							variant === 'Default'
								? styles.inputField
								: variant === 'Filled'
								? styles.inputFilled
								: styles.inputUnstyled
						}
						required={asterisk}
						type="email"
						id="email"
						name="email"
						placeholder={placeholder}
						defaultValue={inputs.email}
						ref={emailRef}
						description={description}
						error={error}
						variant={variant}
						radius={radius}
						size={size}
						disabled={disabled}
					/>
					<CustomInput
						label="Password"
						required={asterisk}
						type="password"
						id="password"
						name="password"
						placeholder="Your password"
						defaultValue={inputs.password}
						ref={passwordRef}
						description="This is the password field"
						error={error}
						variant={variant}
						radius={radius}
						size={size}
						disabled={false}
					/>
					<Button type="submit">Отправить</Button>
				</form>
			</div>

			<div className={styles.settings}>
				<CustomInput
					label="Placeholder"
					type="text"
					id="placeholder"
					name="placeholder"
					placeholder="Placeholder"
					value={placeholder}
					radius={5}
					onChange={handlePlaceholderChange}
				/>
				<CustomInput
					label="Label"
					type="text"
					id="label"
					name="label"
					placeholder="Label"
					value={label}
					radius={5}
					onChange={handleLabelChange}
				/>
				<CustomInput
					label="Description"
					type="text"
					id="description"
					name="description"
					placeholder="Description"
					radius={5}
					onChange={handleDescriptionChange}
				/>
				<CustomInput
					label="Error"
					type="text"
					id="error"
					name="error"
					placeholder="Error"
					radius={5}
					onChange={handleErrorChange}
				/>
				<CustomSelect
					label="Variant"
					type="select"
					id="variant"
					name="variant"
					value={variant}
					onChange={handleVariantChange}
				/>
				<CustomInput
					label="Radius"
					type="range"
					id="radius"
					name="radius"
					min="0"
					max="15"
					step="5"
					value={radius}
					onChange={handleBorderRadiusChange}
				/>
				<CustomInput
					label="Size"
					type="range"
					id="size"
					name="size"
					min="12"
					max="28"
					step="4"
					value={size}
					onChange={handleFontSizeChange}
				/>
				<CustomInput
					className={styles.toggle}
					label="Disabled"
					type="checkbox"
					id="disabled"
					name="disabled"
					checked={disabled}
					onChange={handleDisabledChange}
				/>
				<CustomInput
					className={styles.toggle}
					label="With asterisk"
					type="checkbox"
					id="asterisk"
					name="asterisk"
					checked={asterisk}
					onChange={handleAsteriskChange}
				/>
			</div>
		</div>
	)
}
