import Layout from '../components/Layout';
import { Profile } from '../components/Profile';

const InfoPage = () => (
	<Layout title='Info'>
		<p>This is info page</p>
		<Profile id='1' description='It me but weird' title='Pieter Bos' imageUrl='/me.jpg' />
	</Layout>
);

export default InfoPage;
