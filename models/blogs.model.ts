import { addDoc, collection, doc, getDocs, query, updateDoc, orderBy, where, getDoc, OrderByDirection } from "firebase/firestore"
import { postToJSON } from "../lib/firebase"
import { firestore } from "../lib/firebaseConfig"
import { Blog } from "../types/blog"


class Blogs {
	blogsRef = collection(firestore, 'blogs')

	async getAllBlogs(order_by = "id", order:OrderByDirection  = "asc") {
		try {
			const blogsQuery = query(this.blogsRef, orderBy(order_by, order))
			const querySnapshot = await getDocs(blogsQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			return data
		} catch (error) {
			console.log("GET ALL ERROR", error);
		}

	}

	async getBlogById(id: string) {
		try {
			const docRef = doc(firestore, 'blogs', id)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {

				return docSnap.data()
			} else {
				return null;
			}
		} catch (error) {
			console.log("GET BY ID ERROR", error);
		}
	}

	async getBlogBySlugs(slug: string) {

		console.log(slug);

		try {
			const blogsQuery = query(this.blogsRef,  where("slug", "==", slug))
			const querySnapshot = await getDocs(blogsQuery)

			const data = querySnapshot.docs.map((doc) => postToJSON(doc))

			console.log(data);
			

			if (data.length > 0)
				return data[0]

			return null

		} catch (error) {
			console.log("GET BY SLUG ERROR", error);
		}
	}

	async createBlog(blog: Blog) {
		try {
			const dbInstance = collection(firestore, 'blogs')
			await addDoc(dbInstance, blog)
		} catch (error) {
			console.log("CREATE ERROR", error);
		}


	}

	async updateBlog(blog: any, id: string) {
		try {
			const docRef = doc(firestore, "blogs", id);
			await updateDoc(docRef, blog)
		} catch (error) {
			console.log("UPDATE ERROR", error);
		}
	}

}

export default new Blogs()