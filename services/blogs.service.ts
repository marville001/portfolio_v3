import { addDoc, collection, doc, getDocs, query, updateDoc } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"
import { Blog } from "../types/blog"

export const getAllBlogsService = async () => {
	try {
		const dbInstance = collection(firestore, 'blogs')
		const blogsQuery = query(dbInstance)
		const querySnapshot = await getDocs(blogsQuery)

		const data = querySnapshot.docs.map((doc) => postToJSON(doc))

		return data
	} catch (error) {
		console.log("GET ALL ERROR", error);
	}

}

export const getBlogByIdService = async () => {
	try {
	} catch (error) {
		console.log("GET BY ID ERROR", error);
	}
}

export const getBlogBySlugsService = async () => {
	try {
	} catch (error) {
		console.log("GET BY SLUG ERROR", error);
	}
}

export const createBlogService = async (blog: Blog) => {
	try {
		const dbInstance = collection(firestore, 'blogs')
		await addDoc(dbInstance, blog)
	} catch (error) {
		console.log("CREATE ERROR", error);
	}


}

export const updateBlogService = async (blog: any, id: string) => {
	try {
		const docRef = doc(firestore, "blogs", id);
		await updateDoc(docRef, blog)
	} catch (error) {
		console.log("UPDATE ERROR", error);
	}
}