import { LinkItem } from './LinkItem';

export const Header = () => (
	<header className='bg-gray-200 mb-4 container mx-auto px-4 '>
		<nav className='flex flex-wrap items-center justify-between p-4'>
			<div className='lg:order-2 w-auto lg:w-1/5 lg:text-center'>
				<a className='text-xl text-indigo-600 font-semibold font-heading' href='#'>
					Cool content
				</a>
			</div>
			<div className='navbar-menu  lg:order-1 lg:block w-full lg:w-2/5'>
				<LinkItem href='/' title='Home' />
				<LinkItem href='/about' title='About' />
				<LinkItem href='/api/users' title=' api' />
			</div>
			<div className='navbar-menu  lg:order-3 lg:block w-full lg:w-2/5 lg:text-right'>
				<LinkItem href='/' title='Link' />
				<LinkItem href='/' title='Link' />
				<LinkItem href='/' title='Link' />
			</div>
		</nav>
	</header>
);
