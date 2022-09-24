import { serverTimestamp } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronLeft, FaSpinner, FaTimes } from 'react-icons/fa'
import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'
import fileUploader from '../../../lib/fileUploader'
import toast from 'react-hot-toast'
import bookNotesModel from '../../../models/book-notes.model.ts'
import { IBookNote } from '../../../types/book-notes'

type Inputs = {
	name: string
	author: string
	description: string
	intro: string
	draft: boolean
	subtitle: boolean
}


const UpdateBookNote: NextPage = ({ bookNote }: any) => {
	const [loadedBookNote, setLoadedBookNote] = useState<IBookNote | null>(null)
	const [uploading, setUploading] = useState(false)
	const [updating, setUpdating] = useState(false)
	const [image, setImage] = useState('')
	const [description, setDescription] = useState("<p></p>")

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		setError,
		clearErrors,
	} = useForm<Inputs>()

	const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		if (files!.length === 0) return

		try {
			setUploading(true)
			const data = await fileUploader(files![0])
			setImage(data)
			setUploading(false)
		} catch (error) {
			setUploading(false)
		}
	}

	const handleUpdateBookNote: SubmitHandler<Inputs> = async (data: any) => {
		if (!description || description === '') {
			setError('description', { message: 'Book Note description is required' })
			return
		}

		const updatedBookNote: IBookNote = {
			name: data.name,
			intro: data.intro,
			description: description.toString().replaceAll('<p><br></p>', ''),
			updatedAt: serverTimestamp(),
			draft: data.draft,
			author: data.author,
			subtitle: data.subtitle,
			slug: loadedBookNote?.slug ?? "",
			image: image,
		}

		if (updatedBookNote.description === '') {
			setError('description', { message: 'Book Note description is required' })
			return
		}

		const notification = toast.loading("Updating Book Note!")
		setUpdating(true)
		try {

			await bookNotesModel.updateBookNote(updatedBookNote, loadedBookNote?.id ?? "");
			setUpdating(false)
			toast.success("Book Note Updated Successfully!", { id: notification })
		} catch (error) {
			setUpdating(false)
			console.log(error);

			toast.success("An error occurred. Check console log", { id: notification })
		}
	}

	useEffect(() => {
		const bn = typeof bookNote === "string" ? JSON.parse(bookNote) : {}

		if (bn?.name) {
			setLoadedBookNote(bn);
			setValue("name", bn.name)
			setValue("intro", bn.intro)
			setValue("draft", bn.draft)
			setValue("author", bn.author)
			setValue("subtitle", bn.subtitle)
			setImage(bn.image)
			setDescription(bn.description)
		}
	}, [bookNote])

	return (
		<ContainerBlock>
			<AdminWrapper>
				{
					loadedBookNote?.name &&
					<div className="_shadow2 relative  mx-auto my-12 flex flex-col items-center rounded-2xl   bg-white dark:bg-dim-dark p-6">
						<Link href="/admin/book-notes">
							<a className="absolute dark:text-white top-2 left-2 cursor-pointer rounded-lg p-4 hover:bg-gray-100 dark:hover:text-dark">
								<FaChevronLeft />
							</a>
						</Link>
						<div className="self-start mt-8 w-full">
							<h2 className="text-3xl font-bold text-center dark:text-white">Update Book Note</h2>
						</div>

						<form onSubmit={handleSubmit(handleUpdateBookNote)} className="flex flex-col md:flex-row my-16 w-full">
							<div className="w-full md:w-[300px] dark:bg-dark dark:text-white rounded-md shadow h-min p-5">
								<h2 className='font-bold mb-2'>Settings</h2>
								<hr className='mb-3' />
								<label htmlFor="isDraft" className='flex items-center space-x-3 mt-4'>
									<input {...register('draft')} type="checkbox" className='h-5 w-5' name="" id="isDraft" />
									<span>Save as draft</span>
								</label>
							</div>

							<div

								className="my-6 w-full p-4"
							>
								{/*  Book Image */}
								{image ? (
									<div className="relative dark:text-white">
										<div
											onClick={() => setImage('')}
											className="absolute right-2 top-2 cursor-pointer rounded-lg bg-white p-2"
										>
											<FaTimes className="text-xl" />
										</div>
										<img
											src={image}
											alt="Book"
											className="h-auto max-h-[400px] w-full rounded-lg object-cover"
										/>
									</div>
								) : (
									<label
										htmlFor="cover-uploader"
										className={`cursor-pointer ${uploading && 'cursor-not-allowed'
											}  flex  items-center border h-48 justify-center gap-2 px-8 py-3 text-accent`}
									>
										{uploading && (
											<FaSpinner className="animate-spin text-lg" />
										)}{' '}
										Choose Book Image
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
								)}

								{/* name */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="name" className="dark:text-white">
										Name
									</label>
									<input
										type="text"
										placeholder="Book Name"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.name && 'ring-1 ring-red-400'
											}`}
										{...register('name', {
											required: {
												value: true,
												message: 'Name is required',
											}
										})}
									/>
									{errors.name && (
										<span className="text-sm text-red-600">
											{errors.name.message}
										</span>
									)}
								</div>

								{/* Author */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="name" className="dark:text-white">
										Author
									</label>
									<input
										type="text"
										placeholder="Author Name"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.author && 'ring-1 ring-red-400'
											}`}
										{...register('author', {
											required: {
												value: true,
												message: 'Author Name is required',
											},
										})}
									/>
									{errors.author && (
										<span className="text-sm text-red-600">
											{errors.author.message}
										</span>
									)}
								</div>

								{/* Sub Title */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Sub Title
									</label>
									<input
										type="text"
										placeholder="..."
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.subtitle && 'ring-1 ring-red-400'
											}`}
										{...register('subtitle', {
											required: {
												value: true,
												message: 'Subtitle is required',
											},
										})}
									/>
									{errors.subtitle && (
										<span className="text-sm text-red-600">
											{errors.subtitle.message}
										</span>
									)}
								</div>

								{/* Intro */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Intro
									</label>
									<input
										type="text"
										placeholder="Book Note Intro"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.intro && 'ring-1 ring-red-400'
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
									<label htmlFor="" className="dark:text-white">
										Book Description
									</label>
									<ReactQuillEditor
										hasErrors={
											errors?.description?.message
												? errors?.description?.message?.length > 0
												: false
										}
										value={description}
										handleChange={text => { setDescription(text); clearErrors('description'); }}
									/>
									{errors.description && (
										<span className="text-sm text-red-600">
											{errors.description.message}
										</span>
									)}
								</div>

								<button
									disabled={updating}
									className=" mt-4 flex w-full justify-center rounded-lg border border-primary bg-primary py-3
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
								>
									{updating ? (
										<FaSpinner className="animate-spin" />
									) : (
										'Update Book Note'
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
	const bookNotes = await bookNotesModel.getAllBookNotes() ?? []

	const paths = bookNotes.map(bookNote => ({
		params: { id: bookNote.id }
	}))
	return {
		paths,
		fallback: true // true or false or 'blocking'
	};
}


export const getStaticProps: GetStaticProps = async (context: any) => {
	try {
		const { id } = context.params;
		const bookNote = await bookNotesModel.getBookNoteById(id);

		if (!bookNote) return { notFound: true };

		return {
			props: { bookNote: JSON.stringify(bookNote) },
			revalidate: 60, // after 60seconds.. it will revalidate the old cache
		};
	} catch (error) {
		return {
			props: { bookNote: {} },
		};
	}
}

export default UpdateBookNote
