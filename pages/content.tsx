import Layout from '../components/Layout';

import { GraphQLClient, gql } from 'graphql-request';
import { IPost } from '../interfaces';
import { Post } from '../components/Post';

const ContentPage = ({ posts }: { posts: IPost[] }) => (
	<Layout title='About'>
		<div className='flex flex-wrap -mx-4 text-center'>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	</Layout>
);

export async function getServerSideProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

	const { posts } = await graphcms.request(gql`
		{
			posts {
				id
				title
				date
				excerpt
				slug
				coverImage {
					url
				}
			}
		}
	`);

	return {
		props: { posts },
	};
}

export default ContentPage;
