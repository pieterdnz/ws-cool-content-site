import { LinkItem } from './LinkItem';
//Simple header for navigation
export const Header = () => (
	<header className='bg-purple-200'>
		<div className='mb-4 container mx-auto px-4 '>
			<nav className='flex flex-wrap items-center justify-between py-4'>
				<div className='lg:order-2 w-auto lg:w-1/5 lg:text-center'>
					<LinkItem href='/' title='Cool content' className='text-2xl' />
				</div>
				<div className='lg:order-1 lg:block w-full lg:w-2/5'>
					<LinkItem href='/' title='Home' />
					<LinkItem href='/about' title='About' />
					<LinkItem href='/info' title='Info' />
					<LinkItem href='/content' title='Content' />
				</div>
				<div className='lg:order-3 lg:block w-full lg:w-2/5 lg:text-right'>
					<LinkItem href='/' title='Link' />
					<LinkItem href='/' title='Link' />
					<LinkItem href='/' title='Link' />
				</div>
			</nav>
		</div>
	</header>
);
