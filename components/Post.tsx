import Link from 'next/link';
import { IPost } from '../interfaces';

export const Post = ({ title, date, excerpt, coverImage, id }: IPost) => (
	<div className='w-full md:w-1/2 lg:w-1/4 px-4 mb-8'>
		<Link href={`/posts/${id}`}>
			<a>
				<div className='h-full pb-6 rounded-md overflow-hidden shadow'>
					<img className='mx-auto mb-4 overflow-hidden' src={coverImage?.url} alt='' />
					<div className='px-8'>
						<h3 className='text-xl mb-1 font-semibold font-heading '>{title}</h3>
						<span>{date}</span>
						<p>{excerpt}</p>
					</div>
				</div>
			</a>
		</Link>
	</div>
);
