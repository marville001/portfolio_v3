import Link from 'next/link'
import { ReactNode } from 'react'


type Props = {
	children: ReactNode
}
const SidebarWrapper = ({ children }: Props) => {
	return (
		<div className="flex my-12 gap-5">
			<div className="w-48 h-56 min-w-[200px] flex flex-col items-center bg-pale-orange text-black rounded-lg p-5">
				<div>
					<Link href="/admin/home">
						<a
							className={`font-bold flex w-full items-center gap-3 rounded-md px-2 py-1`}
						>
							My Dashboard
						</a>
					</Link>

				</div>
				<div>
					<Link href="/admin/projects">
						<a
							className={`font-bold flex w-full items-center gap-3 rounded-md px-2 py-1`}
						>
							My Projects
						</a>
					</Link>
				</div>
				<div>
					<Link href="/admin/blogs">
						<a
							className={`font-bold flex w-full items-center gap-3 rounded-md px-2 py-1`}
						>
							My Blogs
						</a>
					</Link>
				</div>
				<div>
					<Link href="/admin/book-notes">
						<a
							className={`font-bold flex w-full items-center gap-3 rounded-md px-2 py-1`}
						>
							Book Notes
						</a>
					</Link>
				</div>
			</div>
			{children}
		</div>
	)
}

export default SidebarWrapper