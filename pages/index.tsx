import Link from 'next/link';
import Layout from '../components/Layout';
//import { GraphQLClient, gql } from 'graphql-request';
//import { Post } from '../components/Post';
//import { IPost } from '../interfaces';

const IndexPage = () => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<h1 className='text-xl text-purple-600'>Hello to the cool content nextjs website 👋</h1>
		<p className='text-base py-4'>
			<Link href='/about'>
				<a>About</a>
			</Link>
		</p>
	</Layout>
);

export default IndexPage;
