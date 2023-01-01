import { useState } from "react"

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("")
	const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

	const [enteredMail, setEnteredMail] = useState("")
	const [enteredMailIsTouched, setEnteredMailIsTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ""
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

	const enteredMailIsValid = enteredMail.includes("@")
	const enteredMailIsInvalid = !enteredMailIsValid && enteredMailIsTouched

	let formIsValid = false
	if (enteredNameIsValid) {
		formIsValid = true
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value)
	}

	const mailInputChangeHandler = (e) => {
		setEnteredMail(e.target.value)
	}

	const nameInputBlurHandler = (e) => {
		setEnteredNameIsTouched(true)
	}

	const mailInputBlurHandler = (e) => {
		setEnteredMailIsTouched(true)
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
		setEnteredMail("")
		setEnteredMailIsTouched(false)
	}

	const validInputClass = nameInputIsInvalid
		? "form-control invalid"
		: "form-control"

	const mailInputClass = enteredMailIsTouched
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
			<div className={mailInputClass}>
				<label htmlFor='email'>Your e-mail</label>
				<input
					type='email'
					id='email'
					onChange={mailInputChangeHandler}
					onBlur={mailInputBlurHandler}
					value={enteredMail}
				/>
				{nameInputIsInvalid && (
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
