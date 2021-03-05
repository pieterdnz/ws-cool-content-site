import Link from 'next/link';
import Layout from '../components/Layout';
import { GraphQLClient, gql } from 'graphql-request';
import { Post } from '../components/Post';
import { IPost } from '../interfaces';

const IndexPage = ({ posts }: { posts: IPost[] }) => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<h1 className='text-xl text-purple-600'>Hello to the cool content nextjs website 👋</h1>
		<p className='text-base py-4'>
			<Link href='/about'>
				<a>About</a>
			</Link>
		</p>
		<div className='flex flex-wrap -mx-4 text-center'>
			{posts.map((item) => (
				<Post key={item.id} {...item} />
			))}
		</div>
	</Layout>
);

export async function getStaticProps() {
	console.log(process.env);
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

	const { posts } = await graphcms.request(
		gql`
			query GetPosts {
				posts {
					id
					title
					excerpt
					date
					content {
						html
					}
					coverImage {
						url
					}
				}
			}
		`
	);

	return {
		props: {
			posts,
		},
	};
}

export default IndexPage;
