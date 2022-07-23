import { DocumentSnapshot, serverTimestamp } from "firebase/firestore";


export function postToJSON(doc: DocumentSnapshot) {
	let data = doc.data();

	data = {
		...data,
		id: doc.id,
	}
	
	return data;
}