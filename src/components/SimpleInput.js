import { useRef, useState } from "react"

const SimpleInput = (props) => {
	const nameInputRef = useRef()
	const [enteredName, setEnteredName] = useState("")
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (enteredName.trim() == "") {
			setEnteredNameIsValid(false)
			return
		}

		setEnteredNameIsValid(true)
		console.log(enteredName)
		const enteredValue = nameInputRef.current.value
		console.log(`from ref ${enteredValue}`)

		setEnteredName("")
	}

	const validInputClass = enteredNameIsValid
		? "form-control"
		: "form-control invalid"

	return (
		<form onSubmit={onSubmitHandler}>
			<div className={validInputClass}>
				<label htmlFor='name'>Your Name</label>
				<input
					ref={nameInputRef}
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{!enteredNameIsValid && (
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
