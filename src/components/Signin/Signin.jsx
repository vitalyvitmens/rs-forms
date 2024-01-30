import { useState, useRef } from 'react'
import { CustomInput, Button } from '../../components'

export function Signin(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [placeholder, setPlaceholder] = useState('You email')
	const [label, setLabel] = useState('Email')
	const [description, setDescription] = useState('Input description')
	const [radius, setRadius] = useState(5)
	const [size, setSize] = useState(16)
	const [disabled, setDisabled] = useState(false)

	const emailRef = useRef()
	const passwordRef = useRef()

	const handleEmailChange = (e) => setEmail(e.target.value)
	const handlePasswordChange = (e) => setPassword(e.target.value)
	const handlePlaceholderChange = (e) => setPlaceholder(e.target.value)
	const handleLabelChange = (e) => setLabel(e.target.value)
	const handleDescriptionChange = (e) => setDescription(e.target.value)
	const handleBorderRadiusChange = (e) => setRadius(e.target.value)
	const handleFontSizeChange = (e) => setSize(e.target.value)
	const handleDisabledChange = (e) => setDisabled(e.target.checked)

	const handleSubmit = (e) => {
		e.preventDefault()
		const emailValue = emailRef.current.value
		const passwordValue = passwordRef.current.value

		props.onSubmit(emailValue, passwordValue)
	}

	return (
		<div className="App">
			<h3>Настраиваемый инпут</h3>
			<form onSubmit={handleSubmit}>
				<CustomInput
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
					ref={emailRef}
					required
					placeholder={placeholder}
					label={label}
					description={description}
					radius={radius}
					size={size}
					disabled={disabled}
				/>
				<CustomInput
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
					ref={passwordRef}
					required
					placeholder="You password"
					label="Пароль"
					description="Это поле для ввода пароля"
					radius={10}
					size={20}
					disabled={false}
				/>
				<Button type="submit">Отправить</Button>
			</form>

			<div className="settings">
				<h3>Настройки инпута</h3>
				<div>
					<label htmlFor="placeholder">Placeholder:</label>
					<input
						type="text"
						id="placeholder"
						name="placeholder"
						value={placeholder}
						onChange={handlePlaceholderChange}
					/>
				</div>
				<div>
					<label htmlFor="label">Label:</label>
					<input
						type="text"
						id="label"
						name="label"
						value={label}
						onChange={handleLabelChange}
					/>
				</div>
				<div>
					<label htmlFor="description">Description:</label>
					<input
						type="text"
						id="description"
						name="description"
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<div>
					<label htmlFor="radius">Radius:</label>
					<input
						type="range"
						id="radius"
						name="radius"
						min="0"
						max="20"
            step="5"
						value={radius}
						onChange={handleBorderRadiusChange}
					/>
				</div>
				<div>
					<label htmlFor="size">Size:</label>
					<input
						type="range"
						id="size"
						name="size"
						min="10"
						max="30"
            step="5"
						value={size}
						onChange={handleFontSizeChange}
					/>
				</div>
				<div>
					<label htmlFor="disabled">Disabled:</label>
					<input
						type="checkbox"
						id="disabled"
						name="disabled"
						checked={disabled}
						onChange={handleDisabledChange}
					/>
				</div>
			</div>
		</div>
	)
}
