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
import projectsModel from '../../../models/projects.model.ts'
import toast from 'react-hot-toast'
import { IProject } from '../../../types/project'

type Inputs = {
	name: string
	description: string
	intro: string
	tag: string
	draft: boolean
	featured: boolean
	archived: boolean
	website: boolean
	github: boolean
}


const UpdateProject: NextPage = ({ project }: any) => {
	const [loadedProject, setLoadedProject] = useState<IProject | null>(null)
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

	const handleUpdateProject: SubmitHandler<Inputs> = async (data: any) => {
		if (!content || content === '') {
			setError('description', { message: 'Project description is required' })
			return
		}

		const updatedProject: IProject = {
			name: data.name,
			intro: data.intro,
			description: content.toString().replaceAll('<p><br></p>', ''),
			updatedAt: serverTimestamp(),
			// draft: data.draft,
			// featured: data.featured,
			// archived: data.archived,
			website: data.website,
			github: data.github,
			tag: data.tag,
			slug: loadedProject?.slug ?? "",
			images: [image],
			...state
		}

		if (updatedProject.description === '') {
			setError('description', { message: 'Project description is required' })
			return
		}
		
		const notification = toast.loading("Updating Project!")
		setUpdating(true)
		try {

			await projectsModel.updateProject(updatedProject, loadedProject?.id ?? "");
			setUpdating(false)
			toast.success("Project Updated Successfully!", { id: notification })
			// router.push('/admin/projects')
		} catch (error) {
			setUpdating(false)
			console.log(error);

			toast.success("An error occurred. Check console log", { id: notification })
		}
	}

	useEffect(() => {
		const p = typeof project === "string" ? JSON.parse(project) : {}

		if (p?.name) {
			setLoadedProject(p);
			setValue("name", p.name)
			setValue("intro", p.intro)
			setValue("draft", p.draft)
			setValue("featured", p.featured)
			setValue("archived", p.archived)
			setValue("github", p.github)
			setValue("website", p.website)
			setValue("tag", p.tag)
			setImage(p.images[0])
			setContent(p.description)

			setState({
				draft: p.draft ?? false,
				featured: p.featured ?? false,
				archived: p.archived ?? false
			})
		}
	}, [project])

	return (
		<ContainerBlock>
			<AdminWrapper>
				{
					loadedProject?.name &&
					<div className="_shadow2 relative  mx-auto my-12 flex flex-col items-center rounded-2xl   bg-white dark:bg-dim-dark p-6">
						<Link href="/admin/projects">
							<a className="absolute dark:text-white top-2 left-2 cursor-pointer rounded-lg p-4 hover:bg-gray-100 dark:hover:text-dark">
								<FaChevronLeft />
							</a>
						</Link>
						<div className="self-start mt-8 w-full">
							<h2 className="text-3xl font-bold text-center dark:text-white">Update Project</h2>
						</div>

						<form onSubmit={handleSubmit(handleUpdateProject)} className="flex flex-col md:flex-row my-16 w-full">
							<div className="w-full md:w-[300px] dark:bg-dark dark:text-white rounded-md shadow h-min p-5">
								<h2 className='font-bold mb-2'>Settings</h2>
								<hr className='mb-3' />
								<label htmlFor="isDraft" className='flex items-center space-x-3 mt-4'>
										<input
											checked={state.draft} onChange={e =>setState(prev=>({...prev, draft: e.target.checked}))}
											type="checkbox" className='h-5 w-5' name="" id="isDraft" />
									<span>Save as draft</span>
								</label>
								<label htmlFor="isFeatured" className='flex items-center space-x-3 mt-4'>
									<input checked={state.featured} onChange={e =>setState(prev=>({...prev, featured: e.target.checked}))}
									 type="checkbox" className='h-5 w-5' name="" id="isFeatured" />
									<span>Featured Project</span>
								</label>
								<label htmlFor="isArchived" className='flex items-center space-x-3 mt-4'>
										<input
											checked={state.archived} onChange={e =>setState(prev=>({...prev, archived: e.target.checked}))}
											type="checkbox" className='h-5 w-5' name="" id="isArchived" />
									<span>Archived Project</span>
								</label>
							</div>

							<div

								className="my-6 w-full p-4"
							>
								{/*  Project Image */}
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
											alt="Project"
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
										Choose Project Image
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
										placeholder="Project Name"
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

								{/* Title */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Intro
									</label>
									<input
										type="text"
										placeholder="Project Intro"
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

								{/* Tag */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Tag
									</label>
									<input
										type="text"
										placeholder="Eg. Reactjs"
										className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
										{...register('tag')}
									/>
								</div>

								{/* Demo Link */}
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="intro" className="dark:text-white">
										Demo Link
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
										Project Description
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
										'Update Project'
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
	const projects = await projectsModel.getAllProjects() ?? []

	const paths = projects.map(project => ({
		params: { id: project.id }
	}))
	return {
		paths,
		fallback: true // true or false or 'blocking'
	};
}


export const getStaticProps: GetStaticProps = async (context: any) => {
	try {
		const { id } = context.params;
		const project = await projectsModel.getProjectById(id);

		if (!project) return { notFound: true };

		return {
			props: { project: JSON.stringify(project) },
			revalidate: 60, // after 60seconds.. it will revalidate the old cache
		};
	} catch (error) {
		return {
			props: { project: {} },
		};
	}
}

export default UpdateProject
