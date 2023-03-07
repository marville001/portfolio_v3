import { addDoc, collection, doc, getDocs, query, updateDoc, orderBy, where, getDoc, OrderByDirection } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"
import { IClient } from "../types/client"

class Client {
	clientsCollection = collection(firestore, 'clients')

	async getAllClients(order_by = "id", order: OrderByDirection = "asc") {
		try {
			const clientsQuery = query(this.clientsCollection, orderBy(order_by, order))
			const querySnapshot = await getDocs(clientsQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			return data
		} catch (error) {
			console.log("GET ALL CLIENTS ERROR", error);
		}

	}

	async getClientById(id: string) {
		try {
			const clientRef = doc(firestore, 'clients', id)
			const clientSnap = await getDoc(clientRef);

			if (clientSnap.exists()) {
				return { id, ...clientSnap.data() }
			} else {
				return null;
			}
		} catch (error) {
			console.log("GET BY ID ERROR", error);
		}
	}

	async getClientBySlug(slug: string) {
		try {
			const clientQuery = query(this.clientsCollection, where("slug", "==", slug))
			const querySnapshot = await getDocs(clientQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			if (data.length > 0)
				return data[0]

			return null

		} catch (error) {
			console.log("GET BY SLUG ERROR", error);
		}
	}

	async createClient(client: IClient) {
		try {
			const dbInstance = collection(firestore, 'clients')
			return await addDoc(dbInstance, client)
		} catch (error) {
			console.log("CREATE ERROR", error);
		}


	}

	async updateClient(client: any, id: string) {
		try {
			const docRef = doc(firestore, "clients", id);
			await updateDoc(docRef, client)
		} catch (error) {
			console.log("UPDATE ERROR", error);
		}
	}

}

export default new Client()