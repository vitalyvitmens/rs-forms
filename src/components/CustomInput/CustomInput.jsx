import { forwardRef } from 'react'

export const CustomInput = forwardRef((props, ref) => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<span>{props.description}</span>
			<br />
			<input
				{...props}
				ref={ref}
				style={{
					borderRadius: props.radius + 'px',
					fontSize: props.size + 'px',
				}}
			/>
		</div>
	)
})
