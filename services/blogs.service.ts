import { collection, getDocs, query } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"

export const getAllBlogsService = async () => {
	const dbInstance = collection(firestore, 'blogs')
	const blogsQuery = query(dbInstance)
	const querySnapshot = await getDocs(blogsQuery)

	const data = querySnapshot.docs.map((doc) => postToJSON(doc))

	return data

}

export const getBlogByIdService = async () => {

}

export const getBlogBySlugsService = async () => {

}

export const createBlogService = async () => {

}

export const updateBlogService = async () => {

}