import { IPost } from '../interfaces';

export const Post = ({ title, date, excerpt, coverImage }: IPost) => (
	<div className='w-full lg:w-1/3 px-4 mb-8'>
		<div className='h-full pb-6 rounded-md overflow-hidden shadow'>
			<img className='mx-auto mb-4 overflow-hidden' src={coverImage.url} alt='' />
			<div className='px-8'>
				<h3 className='text-xl mb-1 font-semibold font-heading '>{title}</h3>
				<span>{date}</span>
				<p>{excerpt}</p>
			</div>
		</div>
	</div>
);
