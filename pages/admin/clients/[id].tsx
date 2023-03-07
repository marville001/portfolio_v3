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
import clientsModel from '../../../models/clients.model.ts'
import toast from 'react-hot-toast'
import { IClient } from '../../../types/client'

type Inputs = {
	name: string
	description: string
	website: string
	draft: boolean
	featured: boolean
	archived: boolean
}


const UpdateClient: NextPage = ({ client }: any) => {
	const [loadedClient, setLoadedClient] = useState<IClient | null>(null)
	const [uploading, setUploading] = useState(false)
	const [updating, setUpdating] = useState(false)
	const [image, setImage] = useState('')
	const [content, setContent] = useState("<p></p>");

	const [state, setState] = useState({
		draft: false,
		featured: false,
		archived: false
	})

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

	const handleUpdateClient: SubmitHandler<Inputs> = async (data: any) => {
		if (!content || content === '') {
			setError('description', { message: 'Client description is required' })
			return
		}

		const updatedClient: IClient = {
			name: data.name,
			description: content.toString().replaceAll('<p><br></p>', ''),
			updatedAt: serverTimestamp(),
			website: data.website,
			slug: loadedClient?.slug ?? "",
			image,
			...state
		}

		if (updatedClient.description === '') {
			setError('description', { message: 'Client description is required' })
			return
		}

		const notification = toast.loading("Updating Client!")
		setUpdating(true)
		try {

			await clientsModel.updateClient(updatedClient, loadedClient?.id ?? "");
			setUpdating(false)
			toast.success("Client Updated Successfully!", { id: notification })
		} catch (error) {
			setUpdating(false)
			console.log(error);

			toast.success("An error occurred. Check console log", { id: notification })
		}
	}

	useEffect(() => {
		const p = typeof client === "string" ? JSON.parse(client) : {}

		if (p?.name) {
			setLoadedClient(p);
			setValue("name", p.name)
			setValue("draft", p.draft)
			setValue("featured", p.featured)
			setValue("archived", p.archived)
			setValue("website", p.website)
			setImage(p.image)
			setContent(p.description)

			setState({
				draft: p.draft ?? false,
				featured: p.featured ?? false,
				archived: p.archived ?? false
			})
		}
	}, [client])

	console.log(client);
	

	return (
		<ContainerBlock>
			<AdminWrapper>
				{
					loadedClient?.name &&
					<div className="_shadow2 relative  mx-auto my-12 flex flex-col items-center rounded-2xl   bg-white dark:bg-dim-dark p-6">
						<Link href="/admin/clients">
							<a className="absolute dark:text-white top-2 left-2 cursor-pointer rounded-lg p-4 hover:bg-gray-100 dark:hover:text-dark">
								<FaChevronLeft />
							</a>
						</Link>
						<div className="self-start mt-8 w-full">
							<h2 className="text-3xl font-bold text-center dark:text-white">Update Client</h2>
						</div>

						<form onSubmit={handleSubmit(handleUpdateClient)} className="flex flex-col md:flex-row my-16 w-full">
							<div className="w-full md:w-[300px] dark:bg-dark dark:text-white rounded-md shadow h-min p-5">
								<h2 className='font-bold mb-2'>Settings</h2>
								<hr className='mb-3' />
								<label htmlFor="isDraft" className='flex items-center space-x-3 mt-4'>
									<input
										checked={state.draft} onChange={e => setState(prev => ({ ...prev, draft: e.target.checked }))}
										type="checkbox" className='h-5 w-5' name="" id="isDraft" />
									<span>Save as draft</span>
								</label>
								<label htmlFor="isFeatured" className='flex items-center space-x-3 mt-4'>
									<input checked={state.featured} onChange={e => setState(prev => ({ ...prev, featured: e.target.checked }))}
										type="checkbox" className='h-5 w-5' name="" id="isFeatured" />
									<span>Featured Client</span>
								</label>
								<label htmlFor="isArchived" className='flex items-center space-x-3 mt-4'>
									<input
										checked={state.archived} onChange={e => setState(prev => ({ ...prev, archived: e.target.checked }))}
										type="checkbox" className='h-5 w-5' name="" id="isArchived" />
									<span>Archived Client</span>
								</label>
							</div>

							<div

								className="my-6 w-full p-4"
							>
								{/*  Client Image */}
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
											alt="Client"
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
										Choose Client Image
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
										placeholder="Client Name"
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

								{/* Client Website */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Client Website
									</label>
									<input
										type="text"
										placeholder="www.example.com"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
										{...register('website')}
									/>
								</div>

								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="" className="dark:text-white">
										Client Description
									</label>
									<ReactQuillEditor
										hasErrors={
											errors?.description?.message
												? errors?.description?.message?.length > 0
												: false
										}
										value={content}
										handleChange={text => { setContent(text); clearErrors('description'); }}
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
										'Update Client'
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
	const clients = await clientsModel.getAllClients() ?? []

	const paths = clients.map(client => ({
		params: { id: client.id }
	}))
	return {
		paths,
		fallback: true // true or false or 'blocking'
	};
}


export const getStaticProps: GetStaticProps = async (context: any) => {
	try {
		const { id } = context.params;
		const client = await clientsModel.getClientById(id);

		if (!client) return { notFound: true };

		return {
			props: { client: JSON.stringify(client) },
			revalidate: 60, // after 60seconds.. it will revalidate the old cache
		};
	} catch (error) {
		return {
			props: { client: {} },
		};
	}
}

export default UpdateClient
