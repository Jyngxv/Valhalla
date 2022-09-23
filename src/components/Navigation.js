/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'App Platform', href: 'https://naver.com', current: true },
  { name: 'Pet MBTI', href: '#', current: false },
  { name: 'Brand Guide', href: '#', current: false },
  { name: 'Career', href: 'https://www.notion.so/pood/2ba504ad6d42438b8c64d23a9ed24e69', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="px-24 md:px-0 py-[28px] overflow-y-hidden bg-white md:py-32 md:h-auto container">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto lg:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block w-6 h-6" aria-hidden="true" /> : <Bars3Icon className="block w-6 h-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 lg:items-stretch lg:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img className="block w-auto h-32 lg:hidden" src="img/logo.png" alt="POOD" />
                  <img className="hidden w-auto h-32 lg:block" src="img/logo.png" alt="POOD" />
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-primary' : 'text-black hover:bg-gray-700 hover:text-primary font-Jakarta',
                          'px-16 py-12 rounded-xl text-sm2 font-bold font-Jakarta'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <button className="hidden lg:block px-24 py-12 align-middle bg-[#1279ff] hover:bg-[#4897ff] rounded-8">
                  <div className="flex flex-row">
                    <div className="flex justify-center my-auto">
                      <img className="w-16" src="img/apple.png" />
                    </div>
                    <div className="flex justify-center px-8 my-auto">
                      <img className="w-16" src="img/google.png" />
                    </div>
                    <div className="">
                      <a className="font-bold text-white font-Jakarta text-sm2" href="https://pood.onelink.me/kQDJ/mqn86vma" target="_blank" rel="noreferrer">
                        Download
                      </a>
                    </div>
                  </div>
                </button>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute left-0 w-screen top-72 z-[999] overflow-y-hidden bg-white lg:hidden px-24 pt-16 pb-24 shadow-xl">
            <div className="relative px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-primary' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-16 rounded-md text-md3 font-bold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="pt-24">
                <button className="w-full px-24 py-20 align-middle bg-[#1279ff] hover:bg-[#4897ff] rounded-full shadow-xl">
                  <div className="flex flex-row justify-center ">
                    <div className="flex justify-center my-auto">
                      <img className="w-20" src="img/apple.png" />
                    </div>
                    <div className="flex justify-center px-8 my-auto">
                      <img className="w-20" src="img/google.png" />
                    </div>
                    <div className="">
                      <a className="text-base font-bold text-white font-Jakarta" href="https://pood.onelink.me/kQDJ/mqn86vma" target="_blank" rel="noreferrer">
                        App Download
                      </a>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
