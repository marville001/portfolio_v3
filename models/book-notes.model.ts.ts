import { addDoc, collection, doc, getDocs, query, updateDoc, orderBy, where, getDoc, OrderByDirection } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"
import { IBookNote } from "../types/book-notes"

class BookNote {
	bookNoteCollection = collection(firestore, 'book-notes')

	async getAllBookNotes(order_by = "id", order: OrderByDirection = "asc") {
		try {
			const bookNotesQuery = query(this.bookNoteCollection, orderBy(order_by, order))
			const querySnapshot = await getDocs(bookNotesQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			return data
		} catch (error) {
			console.log("GET ALL BOOK NOTES ERROR", error);
		}

	}

	async getBookNoteById(id: string) {
		try {
			const bookNoteRef = doc(firestore, 'book-notes', id)
			const bookNoteSnap = await getDoc(bookNoteRef);

			if (bookNoteSnap.exists()) {
				return { id, ...bookNoteSnap.data() }
			} else {
				return null;
			}
		} catch (error) {
			console.log("GET BY ID ERROR", error);
		}
	}

	async getBookNoteBySlug(slug: string) {
		try {
			const bookNoteQuery = query(this.bookNoteCollection, where("slug", "==", slug))
			const querySnapshot = await getDocs(bookNoteQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			if (data.length > 0)
				return data[0]

			return null

		} catch (error) {
			console.log("GET BY SLUG ERROR", error);
		}
	}

	async createBookNote(bookNote: IBookNote) {
		try {
			const dbInstance = collection(firestore, 'book-notes')
			return await addDoc(dbInstance, bookNote)
		} catch (error) {
			console.log("CREATE ERROR", error);
		}


	}

	async updateBookNote(bookNote: any, id: string) {
		try {
			const docRef = doc(firestore, "book-notes", id);
			await updateDoc(docRef, bookNote)
		} catch (error) {
			console.log("UPDATE ERROR", error);
		}
	}

}

export default new BookNote()