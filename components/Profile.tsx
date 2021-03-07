import { IProfile } from '../interfaces';

export const Profile = ({ name, title, description, imageUrl }: IProfile) => (
	<div className='md:w-1/3'>
		<img className='mx-auto mb-4 rounded-full' src={`${imageUrl}`} alt='' />
		<h3 className='text-xl mb-1 font-semibold font-heading'>{name}</h3>
		<span>{title}</span>
		<p className='mt-4 text-gray-400 leading-relaxed'>{description}</p>
	</div>
);
