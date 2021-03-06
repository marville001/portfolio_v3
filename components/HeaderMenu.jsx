import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { useAuth } from '../contexts/auth.context'

const HeaderMenu = ({ isOpen, closeModal }) => {
  const authContext = useAuth()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="absolute top-[80px] right-0 z-[999] w-full sm:w-[400px]"
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
            <div className="flex min-w-[200px] flex-col items-start divide-y-[0.2px] divide-slate-700 bg-white shadow dark:bg-dim-dark">
              <Link href="/about-me">
                <a
                  onClick={closeModal}
                  className="w-full border-0  p-4 py-2 text-left text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white  dark:text-white"
                >
                  About Me
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="w-full border-0 p-4 py-2  text-left text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white">
                  Portfolio
                </a>
              </Link>
              <Link href="/blogs">
                <a
                  onClick={closeModal}
                  className="w-full border-0 p-4 py-2 text-left  text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Blogs
                </a>
              </Link>
              <Link href="/book-notes">
                <a
                  onClick={closeModal}
                  className="w-full border-0 p-4 py-2 text-left  text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Book Notes
                </a>
              </Link>
              <Link href="/contact">
                <a
                  onClick={closeModal}
                  className="w-full border-0 p-4 py-2 text-left  text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Contact
                </a>
              </Link>

              <a
                href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
                target="_blank"
                onClick={closeModal}
                className="w-full border-0 p-4 py-2 text-left  text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white"
              >
                Hire Me
              </a>

              {authContext.user?.uid && (
                <button
                  onClick={() => {
                    closeModal()
                    authContext.logoutUser()
                  }}
                  className="w-full border-0 p-4 py-2 text-left  text-dark outline-none ring-0 hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Log Out
                </button>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HeaderMenu
