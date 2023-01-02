import { useState } from "react"

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("")
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

	const [enteredEmail, setEnteredEmail] = useState("")
	const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ""
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

	const enteredEmailIsValid = enteredEmail.includes("@")
	const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched

	let formIsValid = false
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value)
	}

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value)
	}

	const nameInputBlurHandler = (e) => {
		setEnteredNameIsTouched(true)
	}

	const emailInputBlurHandler = (e) => {
		setEnteredEmailIsTouched(true)
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
		setEnteredEmail("")
		setEnteredEmailIsTouched(false)
	}

	const validInputClass = nameInputIsInvalid
		? "form-control invalid"
		: "form-control"

	const emailInputClass = enteredEmailIsValid
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
			<div className={emailInputClass}>
				<label htmlFor='email'>Your e-mail</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && (
					<p className='error-text'>e-mail address isn't correct</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
