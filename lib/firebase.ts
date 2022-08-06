import { DocumentSnapshot, serverTimestamp } from "firebase/firestore";


export function postToJSON(doc: DocumentSnapshot) {
	let data = doc.data();

	data = {
		...data,
		id: doc.id,
		createdAt: data?.createdAt ? data.createdAt.toDate() : null,
		updatedAt: data?.updatedAt ? data.updatedAt.toDate() : null,
	}

	return data;
}