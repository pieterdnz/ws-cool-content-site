//Mock footer
export const Footer = () => (
	<footer className='bg-purple-200 fixed bottom-0 left-0 right-0'>
		<div className='container mx-auto px-4 '>
			<div className=' flex flex-wrap items-center justify-between p-4 '>
				<div className='w-full lg:w-auto lg:mr-6 lg:mb-0 text-center'>© 2021 DNZ</div>
				<div className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
					<div className='hidden lg:block mx-auto lg:mx-0 lg:ml-auto'>
						<a className='inline-block mt-0 text-blue-900 hover:text-indigo-600' href='#'>
							Products
						</a>
						<a className='inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600' href='#'>
							Team
						</a>
						<a className='inline-block mt-0 ml-8 text-blue-900 hover:text-indigo-600' href='#'>
							Customers
						</a>
					</div>
					<div className='hidden lg:flex justify-center space-x-6 mt-4 lg:mt-0 lg:ml-8'>
						<a href='#'>
							<svg
								className='text-indigo-600 w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								></path>
							</svg>
						</a>
						<a href='#'>
							<svg
								className='text-indigo-600 w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
