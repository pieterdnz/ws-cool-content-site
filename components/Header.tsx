import { LinkItem } from './LinkItem';
//Simple header for navigation
export const Header = () => (
	<header className='bg-purple-200'>
		<div className='mb-4 container mx-auto px-4 '>
			<nav className='flex flex-wrap items-center justify-between py-4'>
				<div className='lg:order-2 w-auto lg:w-1/5 lg:text-center'>
					<LinkItem href='/' title='Cool content' className='text-2xl' />
				</div>
				<div className='navbar-menu  lg:order-1 lg:block w-full lg:w-2/5'>
					<LinkItem href='/' title='Home' />
					<LinkItem href='/about' title='About' />
					<LinkItem
						href='https://api-eu-central-1.graphcms.com/v2/ckluw3qe12i8001xn04g57eae/master'
						title='GraphCms API'
					/>
				</div>
				<div className='navbar-menu  lg:order-3 lg:block w-full lg:w-2/5 lg:text-right'>
					<LinkItem href='/' title='Link' />
					<LinkItem href='/' title='Link' />
					<LinkItem href='/' title='Link' />
				</div>
			</nav>
		</div>
	</header>
);
