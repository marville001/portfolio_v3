
const errors: { [key: string]: string } = {
	"auth/invalid-custom-token": "Got Invalid Auth Token. Please login again",
	"auth/user-not-found": "Invalid Credentials",
	"auth/wrong-password": "Invalid Credentials",
}

const firebaseParseError = (error: { code: string }) => {
	return errors[error.code] || "An error occurred"
}


export default firebaseParseError;