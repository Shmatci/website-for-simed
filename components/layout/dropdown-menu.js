import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DropMenu() {
    const links = [
        { name: 'POC Blood Tests', href: '/poc-blood-tests', disabled: false },
        { name: 'EarWell', href: 'https://www.earwellclinics.com', disabled: false },
        { name: 'Self Health Tests', href: '/self-health-tests', disabled: false },
    ]
    return (
        <Menu>
            <Menu.Button>3T's</Menu.Button>
            <Menu.Items className="focus:outline-none absolute origin-top-right w-56 divide-y divide-gray-100">
                <div className='p-1'>
                {links.map(link => (
                    <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                        <button
                            className={`${active && 'bg-blue-500'} w-full rounded-md p-2`}
                            href='/poc'
                            >
                            {link.name}
                        </button>
                    )}
                </Menu.Item>
                ))}
                </div>
            </Menu.Items>
        </Menu>
    )
}