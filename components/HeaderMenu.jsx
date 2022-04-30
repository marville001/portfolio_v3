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
            <div className="flex min-w-[150px] flex-col items-start divide-y-[0.2px] divide-slate-700 rounded-2xl bg-white p-4 dark:bg-dim-dark">
              <Link href="/about-me">
                <a
                  onClick={closeModal}
                  className="w-full border-0 outline-none ring-0 py-2 text-left text-dark hover:bg-dim-dark hover:text-white  dark:text-white"
                >
                  About Me
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="w-full border-0 outline-none ring-0 py-2 text-left text-dark hover:bg-dim-dark hover:text-white dark:text-white">
                  Portfolio
                </a>
              </Link>
              <Link href="/blogs">
                <a
                  onClick={closeModal}
                  className="w-full border-0 outline-none ring-0 py-2 text-left text-dark hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Blogs
                </a>
              </Link>
              <Link href="/contact">
                <a
                  onClick={closeModal}
                  className="w-full border-0 outline-none ring-0 py-2 text-left text-dark hover:bg-dim-dark hover:text-white dark:text-white"
                >
                  Contact
                </a>
              </Link>

              <a
                href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
                target="_blank"
                onClick={closeModal}
                className="w-full border-0 outline-none ring-0 py-2 text-left text-dark hover:bg-dim-dark hover:text-white dark:text-white"
              >
                Hire Me
              </a>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HeaderMenu
