import useInput from "../hooks/use-input"

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "")

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"))

	let formIsValid = false
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (!enteredNameIsValid) {
			return
		}

		console.log(enteredName)

		resetNameInput()

		resetEmailInput()
	}

	const validInputClass = nameInputHasError
		? "form-control invalid"
		: "form-control"

	const emailInputClass = emailInputHasError
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={validInputClass}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>The input can't be empty</p>
				)}
			</div>
			<div className={emailInputClass}>
				<label htmlFor='email'>Your e-mail</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
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
