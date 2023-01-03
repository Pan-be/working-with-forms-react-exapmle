import { useState } from "react"

const useForm = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState("")
	const [isTouched, setIsTouched] = useState(false)

	const inputHandler = (e) => {
		setEnteredValue(e.target.value)
	}

	const blurHandler = () => {
		setIsTouched(true)
	}

	const isValid = validateValue(enteredValue)
	const hasError = !isValid && isTouched

	const reset = () => {
		setEnteredValue("")
		setIsTouched(false)
	}

	return {
		value: enteredValue,
		isValid,
		hasError,
		inputHandler,
		blurHandler,
		reset,
	}
}

export default useForm
