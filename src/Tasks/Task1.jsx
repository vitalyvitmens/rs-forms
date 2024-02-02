import { Signin, Signup } from '../components'

export function Task1() {
	const onSubmitSignin = (email, password) => {
		console.log(email, password)
	}

	const onSubmitSignup = (
		name,
		nickname,
		email,
		gender,
		password,
		confirmPassword
	) => {
		console.log(name, nickname, email, gender, password, confirmPassword)
	}

	return (
		<div>
			<Signin onSubmit={onSubmitSignin} />
			<Signup onSubmit={onSubmitSignup} />
		</div>
	)
}
