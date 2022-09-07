import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { FaBook, FaHashtag, FaHome, FaRegAddressBook, FaRegUser } from 'react-icons/fa'
import { useAuth } from '../contexts/auth.context'

const ProfileMenu = () => {
  
  const authContext = useAuth()

  return (
    <Menu
      as="div"
      className="relative inline-block text-left ring-0 focus:ring-0 "
    >
      <div>
        <Menu.Button className="">
          <div className="cursor-pointer rounded-full bg-primary dark:bg-dim-dark p-2 text-sm text-white">
            MM
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
        <Menu.Items className="_shadow sshadow-lg absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dim-dark focus:outline-none">
          <MenuItem title="My Dashboard" to="/admin/home" icon={FaHome} />
          <MenuItem title="My Profile" to="/admin/profile" icon={FaRegUser} />
          <MenuItem title="My Blogs" to="/admin/blogs" icon={FaRegAddressBook} />
          <MenuItem title="Book Notes" to="/admin/book-notes" icon={FaBook} />
          <MenuItem title="All Tags" to="/admin/tags" icon={FaHashtag} />
        
          <div className="px-1 py-1 mt-5">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={authContext.logoutUser}
                  className={`${
                    active ? 'bg-primary  text-white' : 'text-gray-900 dark:text-white'
                  } group flex w-full items-center rounded-md px-2 py-1 justify-center`}
                >
                  Log Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const MenuItem = ({ to, title, icon: Icon }) => (
  <div className="px-1 py-1 ">
    <Menu.Item>
      {({ active }) => (
        <Link href={to}>
          <a
            className={`${
              active ? 'bg-primary text-white' : 'text-gray-900 dark:text-white'
            } group flex w-full items-center rounded-md px-2 py-1 gap-3`}
          >
            <Icon />
            <span>{title}</span>
          </a>
        </Link>
      )}
    </Menu.Item>
  </div>
)

export default ProfileMenu
