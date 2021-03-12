import { LinkItem } from './LinkItem';
//Simple header for navigation
export const Header = () => (
	<header className='bg-purple-200'>
		<div className='mb-4 container mx-auto px-4 '>
			<nav className='flex flex-wrap items-center justify-between py-4 lg:py-0'>
				<div className='lg:order-2 w-auto lg:w-1/5 lg:text-center'>
					<LinkItem href='/' title='Cool content' className='text-2xl' />
				</div>
				<div className='lg:order-1 lg:block w-full lg:w-2/5'>
					<LinkItem href='/' title='Home' />
					<LinkItem href='/about' title='About' />
					<LinkItem href={process.env.NEXT_PUBLIC_GRAPHCMS_URL || ''} title='GraphCms API' />
				</div>
				<div className='hidden lg:inline-block lg:order-3  w-full lg:w-2/5 lg:text-right'>
					<img src='/dnz.svg' className='w-16 float-right' />
				</div>
			</nav>
		</div>
	</header>
);
