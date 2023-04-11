import { useEffect, useState } from 'react'

const useFormSpree = (formSpreeId: string) => {
	const [state, setState] = useState({
		submitting: false,
		succeeded: false,
		errored: false,
		message: ""
	})

	const handleSubmit = async (data: FormData) => {
		setState(prev => ({ ...prev, submitting: true }))
		try {

			const res = await fetch(`https://formspree.io/f/${formSpreeId}`, {
				method: 'POST',
				body: data,
				headers: {
					'Accept': 'application/json'

				}
			})
			let success = true;
			if (res.ok) {
				setState(prev => ({
					...prev,
					submitting: false,
					succeeded: true,
					message: "Thanks for being awesome! I have received your message and would like to thank you for writing to me"
				}))


			} else {
				let message = "";
				const data = await res.json()
				if (data.hasOwnProperty('errors')) {
					message = data["errors"].map((error: any) => error["message"]).join(", ")
				} else {
					message = "Oops! There was a problem submitting the form"
				}

				setState(prev => ({ ...prev, submitting: false, errored: true, message }))
				success = false
			}
			return success
		} catch (error: any) {
			console.log("============ Contact Me On me@thereactivedeveloper.pro ================");
			console.log(error?.message);
			console.log("=======================================================================");

			setState(prev => ({ ...prev, submitting: false, errored: true, message: "Oops! There was a problem submitting the form" }))
			return false;
		}
	}

	const resetSpreeState = () => {
		setState({
			submitting: false,
			succeeded: false,
			errored: false,
			message: ""
		})
	}

	useEffect(() => {

		return () => {
			resetSpreeState()
		}
	}, [])


	return { state, handleSubmit, resetSpreeState }

}

export default useFormSpree