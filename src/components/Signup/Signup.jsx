import { useState, useRef } from 'react'
import { CustomInput, Button } from '../../components'

export function Signup(props) {
	const [name, setName] = useState('')
	const [nickname, setNickname] = useState('')
	const [email, setEmail] = useState('')
	const [gender, setGender] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const nameRef = useRef()
	const nicknameRef = useRef()
	const emailRef = useRef()
	const genderRef = useRef()
	const passwordRef = useRef()
	const confirmPasswordRef = useRef()

	const handleNameChange = (e) => setName(e.target.value)
	const handleNicknameChange = (e) => setNickname(e.target.value)
	const handleEmailChange = (e) => setEmail(e.target.value)
	const handleGenderChange = (e) => setGender(e.target.value)
	const handlePasswordChange = (e) => setPassword(e.target.value)
	const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

	const handleSubmit = (e) => {
		e.preDefault()
		const nameValue = nameRef.current.value
		const nicknameValue = nicknameRef.current.value
		const emailValue = emailRef.current.value
		const genderValue = genderRef.current.value
		const passwordValue = passwordRef.current.value
		const confirmPasswordValue = confirmPasswordRef.current.value

		if (passwordValue !== confirmPasswordValue) {
			alert('Пароли не совпадают')
			return
		}

		props.onSubmit(
			nameValue,
			nicknameValue,
			emailValue,
			genderValue,
			passwordValue
		)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Имя:</label>
				<CustomInput
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleNameChange}
					ref={nameRef}
					required
				/>
			</div>
			<div>
				<label htmlFor="nickname">Ник:</label>
				<CustomInput
					type="text"
					id="nickname"
					name="nickname"
					value={nickname}
					onChange={handleNicknameChange}
					ref={nicknameRef}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Почта:</label>
				<CustomInput
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
					ref={emailRef}
					required
				/>
			</div>
			<div>
				<label htmlFor="gender">Пол:</label>
				<CustomInput
					type="radio"
					id="male"
					name="gender"
					value="male"
					onChange={handleGenderChange}
					ref={genderRef}
					required
				/>
				<label htmlFor="male">Мужской</label>
				<CustomInput
					type="radio"
					id="female"
					name="gender"
					value="female"
					onChange={handleGenderChange}
					ref={genderRef}
					required
				/>
				<label htmlFor="female">Женский</label>
			</div>
			<div>
				<label htmlFor="password">Пароль:</label>
				<CustomInput
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
					ref={passwordRef}
					required
				/>
			</div>
			<div>
				<label htmlFor="confirmPassword">Повторить пароль:</label>
				<CustomInput
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
					ref={confirmPasswordRef}
					required
				/>
			</div>
			<div>
				<Button type="submit">Зарегистрироваться</Button>
			</div>
		</form>
	)
}
