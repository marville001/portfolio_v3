import { addDoc, collection, doc, getDocs, query, updateDoc, orderBy, where, getDoc, OrderByDirection } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"
import { IProject } from "../types/project"


class Projects {
	projectsCollection = collection(firestore, 'projects')

	async getAllProjects(order_by = "id", order: OrderByDirection = "asc") {
		try {
			const projectsQuery = query(this.projectsCollection, orderBy(order_by, order))
			const querySnapshot = await getDocs(projectsQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			return data
		} catch (error) {
			console.log("GET ALL PROJECTS ERROR", error);
		}

	}

	async getProjectById(id: string) {
		try {
			const projectRef = doc(firestore, 'projects', id)
			const projectSnap = await getDoc(projectRef);

			if (projectSnap.exists()) {
				return { id, ...projectSnap.data() }
			} else {
				return null;
			}
		} catch (error) {
			console.log("GET BY ID ERROR", error);
		}
	}

	async getProjectBySlug(slug: string) {
		try {
			const projectQuery = query(this.projectsCollection, where("slug", "==", slug))
			const querySnapshot = await getDocs(projectQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			if (data.length > 0)
				return data[0]

			return null

		} catch (error) {
			console.log("GET BY SLUG ERROR", error);
		}
	}

	async createProject(project: IProject) {
		try {
			const dbInstance = collection(firestore, 'projects')
			return await addDoc(dbInstance, project)
		} catch (error) {
			console.log("CREATE ERROR", error);
		}


	}

	async updateProject(project: any, id: string) {
		try {
			const docRef = doc(firestore, "projects", id);
			await updateDoc(docRef, project)
		} catch (error) {
			console.log("UPDATE ERROR", error);
		}
	}

}

export default new Projects()