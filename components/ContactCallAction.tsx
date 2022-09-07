import Link from 'next/link'
import React from 'react'

const ContactCallAction = () => {
	return (
		<div className='section py-16'>
			<div className="container">

				<div className="bg-accent min-h-44 p-5 py-16 rounded-lg max-w-2xl mx-auto flex items-center justify-center flex-col">
					<h2 className="text-4xl text-white font-bold my-8">Lets Work together</h2>
					<p className="text-lg">Do you want to have a project done?. I am ready to provide my expertise!</p>
					<Link href="/contact">
						<a className='py-2 px-8 text-lg bg-white text-accent mt-5 hover:bg-opacity-90 transition-all duration-150 ease-linear hover:tracking-widest rounded-full'>Get In Touch</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContactCallAction