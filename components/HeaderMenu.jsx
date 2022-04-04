import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

const HeaderMenu = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="absolute top-28 right-10 z-10"
        onClose={closeModal}
      >
        <div className="lg:hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className='flex flex-col min-w-[150px] items-start bg-white dark:bg-dim-dark p-4 rounded-2xl divide-y-[0.2px] divide-slate-700'>
              <Link href="/about-me">
                <a className="py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white w-full  text-left">
                  About Me
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white w-full text-left">
                  Portfolio
                </a>
              </Link>
              <Link href="/blogs">
                <a className="py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white w-full text-left">
                  Blogs
                </a>
              </Link>
              <Link href="/contact">
                <a className="py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white w-full text-left">
                  Contact
                </a>
              </Link>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HeaderMenu
