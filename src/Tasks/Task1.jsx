import { Signin } from '../components'

export function Task1() {
	const onSubmit = (email, password) => {
		console.log(email, password)
	}

	return (
		<div>
			<Signin onSubmit={onSubmit} />
		</div>
	)
}
