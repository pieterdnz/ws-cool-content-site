import { IProfile } from '../interfaces';

export const Profile = ({ title, description, imageUrl }: IProfile) => (
	<div className='md:w-1/3 p-8'>
		<img className='w-1/3 mx-auto mb-4 rounded-full' src={`${imageUrl}`} alt='' />
		<h3 className='text-xl mb-1 font-semibold font-heading'>title</h3>
		<span>{title}</span>
		<p className='mt-4 text-gray-400 leading-relaxed'>{description}</p>
	</div>
);
