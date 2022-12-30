import { useState } from "react"

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("")
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ""
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value)
	}

	const nameInputBlurHandler = (e) => {
		setEnteredNameIsTouched(true)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()

		setEnteredNameIsTouched(true)

		if (!enteredNameIsValid) {
			return
		}

		console.log(enteredName)
		setEnteredName("")
		setEnteredNameIsTouched(false)
	}

	const validInputClass = nameInputIsInvalid
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={validInputClass}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>The input can't be empty</p>
				)}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
