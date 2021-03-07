import Layout from '../components/Layout';
import { Profile } from '../components/Profile';

const InfoPage = () => (
	<Layout title='Info'>
		<Profile
			name='Pieter Bos'
			description='It me but weird'
			title='Front-end developer'
			imageUrl='/me.jpg'
		/>
	</Layout>
);

export default InfoPage;
