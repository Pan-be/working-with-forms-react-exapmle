import useForm from "../hooks/use-form"

const BasicForm = (props) => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	const {
		value: enteredName,
		isValid: nameIsValid,
		hasError: nameInputHasError,
		inputHandler: inputNameHandler,
		blurHandler: nameBlurHandler,
		reset: nameReset,
	} = useForm((value) => value.trim() !== "")

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		hasError: lastNameInputHasError,
		inputHandler: inputLastNameHandler,
		blurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useForm((value) => value.trim() !== "")

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailInputHasError,
		inputHandler: inputEmailHandler,
		blurHandler: emailBlurHandler,
		reset: emailReset,
	} = useForm((value) => value.match(validRegex))

	let formIsValid = false
	if (nameIsValid && lastNameIsValid && !emailIsValid) {
		formIsValid = true
	}

	const formSubmitHandler = (e) => {
		e.preventDefault()

		if (!nameIsValid && !lastNameIsValid && !emailIsValid) {
			return
		}

		console.log(enteredName)
		nameReset()
		lastNameReset()
		emailReset()
	}

	const validInputClass = nameInputHasError
		? "form-control invalid"
		: "form-control"

	const lastNamealidInputClass = lastNameInputHasError
		? "form-control invalid"
		: "form-control"

	const emailValidInputClass = emailInputHasError
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={validInputClass}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onChange={inputNameHandler}
						onBlur={nameBlurHandler}
						value={enteredName}
					/>
					{nameInputHasError && (
						<p className='error-text'>Name field cann't be empty!</p>
					)}
				</div>
				<div className={lastNamealidInputClass}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						onChange={inputLastNameHandler}
						onBlur={lastNameBlurHandler}
						value={enteredLastName}
					/>
					{lastNameInputHasError && (
						<p className='error-text'>Name field cann't be empty!</p>
					)}
				</div>
			</div>
			<div className={emailValidInputClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					onChange={inputEmailHandler}
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

export default BasicForm
