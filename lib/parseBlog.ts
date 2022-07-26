
const parseBlog = (blog: string) => {
	return blog.toString().replaceAll('<p><br></p>', '')
}

export default parseBlog;