import { Menu, Transition } from '@headlessui/react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronLeft, FaRegImage, FaSpinner, FaTimes } from 'react-icons/fa'
import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'
import { useBlogs } from '../../../contexts/blogs.context'
import fileUploader from '../../../lib/fileUploader'
import { postToJSON } from '../../../lib/firebase'
import { firestore } from '../../../lib/firebaseConfig'
import { Blog } from '../../../types/blog'
import blogsModel from "../../../models/blogs.model"

type Inputs = {
	title: string
	blog: string
	intro: string
}

const ReadBlogs: NextPage = ({ blog }: any) => {
	const [loadedBlog, setLoadedBlog] = useState<Blog | null>(null)
	const [uploading, setUploading] = useState(false)
	const [cover, setCover] = useState('');
	const [content, setContent] = useState("<p></p>")
	const [isDraft, setIsDraft] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
		clearErrors,
		reset,
	} = useForm<Inputs>()
	const blogsContext = useBlogs()
	const router = useRouter()

	const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		if (files!.length === 0) return

		try {
			setUploading(true)
			const data = await fileUploader(files![0])
			setCover(data)
			setUploading(false)
		} catch (error) {
			setUploading(false)
		}
	}

	const handleUpdateBlog: SubmitHandler<Inputs> = async (data: any) => {
		if (!content || content === '') {
			setError('blog', { message: 'Blog content is required' })
			return
		}

		console.log("================");

		console.log(data);


		const updatedBlog: Blog = {
			title: data.title,
			intro: data.intro,
			draft: isDraft,
			blog: content.toString().replaceAll('<p><br></p>', ''),
			updatedAt: serverTimestamp(),
		}

		if (cover) updatedBlog.cover = cover

		if (updatedBlog.blog === '') {
			setError('blog', { message: 'Blog content is required' })
			return
		}

		const response = await blogsContext.updateBlog(updatedBlog, (loadedBlog?.id || ""))
		if (response.success) {
			// router.push('/admin/blogs')
		}
	}

	useEffect(() => {
		const b = typeof blog === "string" ? JSON.parse(blog) : {}	

		if (b?.title) {
			setLoadedBlog(b);
			setValue("title", b.title)
			setValue("intro", b.intro)
			setCover(b.cover)
			setContent(b.blog)
			setIsDraft(b.draft)
		}
	}, [blog])

	return (
		<ContainerBlock>
			<AdminWrapper>
				{
					loadedBlog?.title &&
					<div className="_shadow2 relative  mx-auto my-12 flex flex-col items-center rounded-2xl bg-white p-6">
						<Link href="/admin/blogs">
							<a className="absolute top-2 left-2 cursor-pointer rounded-lg p-4 hover:bg-gray-100">
								<FaChevronLeft />
							</a>
						</Link>
						<div className="self-start mt-8 w-full">
							<h2 className="text-3xl font-bold text-center">Update Blog</h2>
						</div>

						<form onSubmit={handleSubmit(handleUpdateBlog)} className="flex flex-col md:flex-row my-16 w-full">
							<div className="w-full md:w-[300px] dark:bg-dark rounded-md shadow h-min p-5">
								<h2 className='font-bold mb-2'>Settings</h2>
								<hr className='mb-3' />
								<label htmlFor="isDraft" className='flex items-center space-x-3 mt-3'>
									<input checked={isDraft} onChange={e => setIsDraft(e.target.checked)} type="checkbox" className='h-5 w-5' name="" id="isDraft" />
									<span>Save as draft</span>
								</label>
							</div>

							<div

								className="my-6 w-full p-4"
							>
								{/* Blog Cover Image */}
								{cover ? (
									<div className="relative">
										<div
											onClick={() => setCover('')}
											className="absolute right-2 top-2 cursor-pointer rounded-lg bg-white p-2"
										>
											<FaTimes className="text-xl" />
										</div>
										<img
											src={cover}
											alt="Cover Blog"
											className="h-auto max-h-[400px] w-full rounded-lg object-cover"
										/>
									</div>
								) : (
									<div className="flex gap-2">
										<Menu
											as="div"
											className="relative z-[542] inline-block text-left ring-0 focus:ring-0"
										>
											<div>
												<Menu.Button className="">
													<div className="flex cursor-pointer items-center gap-2 rounded-full border py-1 px-4 hover:bg-gray-200">
														<FaRegImage className="text-xl" />
														<span className="font-semibold opacity-75">
															Add Cover
														</span>
													</div>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="_shadow absolute left-0 mt-2 flex h-[150px] w-[300px] origin-top-right items-center justify-center divide-y divide-gray-100 rounded-md bg-white focus:outline-none">
													<div className="mt-5 px-1 py-1">
														<label
															htmlFor="cover-uploader"
															className={`cursor-pointer border bg-white ${uploading && 'cursor-not-allowed'
																}  flex  items-center justify-start gap-2 rounded-full bg-primary px-8 py-3 text-white`}
														>
															{uploading && (
																<FaSpinner className="animate-spin text-lg" />
															)}
															Choose An Image
															<input
																type="file"
																name=""
																disabled={uploading}
																className="hidden"
																id="cover-uploader"
																accept="image/png, image/jpeg"
																onChange={handleImageChange}
															/>
														</label>
													</div>
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
								)}

								{/* Title */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="title" className="text-sm">
										Blog Title
									</label>
									<input
										type="text"
										placeholder="Blog Title"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.title && 'ring-1 ring-red-400'
											}`}
										{...register('title', {
											required: {
												value: true,
												message: 'Title is required',
											}
										})}
									/>
									{errors.title && (
										<span className="text-sm text-red-600">
											{errors.title.message}
										</span>
									)}
								</div>

								{/* Title */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="text-sm">
										Blog Intro
									</label>
									<input
										type="text"
										placeholder="Blog Intro"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.title && 'ring-1 ring-red-400'
											}`}
										{...register('intro', {
											required: {
												value: true,
												message: 'Intro is required',
											},
										})}
									/>
									{errors.intro && (
										<span className="text-sm text-red-600">
											{errors.intro.message}
										</span>
									)}
								</div>

								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Blog Content
									</label>
									<ReactQuillEditor
										hasErrors={
											errors?.blog?.message
												? errors?.blog?.message?.length > 0
												: false
										}
										value={content}
										handleChange={text => { setContent(text); clearErrors('blog'); }}
									/>
									{errors.blog && (
										<span className="text-sm text-red-600">
											{errors.blog.message}
										</span>
									)}
								</div>

								<button
									disabled={blogsContext.updating}
									className=" mt-4 flex w-full justify-center rounded-lg border border-primary bg-primary py-3
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
								>
									{blogsContext.updating ? (
										<FaSpinner className="animate-spin" />
									) : (
										'Update Blog'
									)}
								</button>
							</div>
						</form>
					</div>
				}
			</AdminWrapper>
		</ContainerBlock>
	)
}

export async function getStaticPaths() {
	const blogs = await blogsModel.getAllBlogs() ?? []

	const paths = blogs.map(blog => ({
		params: { id: blog.id }
	}))
	return {
		paths,
		fallback: true // true or false or 'blocking'
	};
}


export const getStaticProps: GetStaticProps = async (context: any) => {
	try {
		const { id } = context.params;
		const blog = await blogsModel.getBlogById(id);

		if (!blog) return { notFound: true };

		return {
			props: { blog: JSON.stringify(blog) },
			revalidate: 60, // after 60seconds.. it will revalidate the old cache
		};
	} catch (error) {
		return {
			props: { blogs: {} },
		};
	}
}

export default ReadBlogs
