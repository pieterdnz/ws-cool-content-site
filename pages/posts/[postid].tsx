import Layout from '../../components/Layout';

import { GraphQLClient, gql } from 'graphql-request';
import { IPost } from '../../interfaces';
import { useRouter } from 'next/dist/client/router';

const PostPage = ({ post }: { post: IPost }) => {
	const router = useRouter();
	return (
		<Layout title='Post'>
			<div className='py-2'>
				<h2 className='text-xl border-b-2 border-purple-600 text-purple-600 pb-2 mb-2'>
					Post {router.query.postid} by {post.title}
				</h2>
				<div className='flex pt-10'>
					<div className='w-1/2'>
						<img src={post.coverImage.url} />
					</div>
					<div
						className='w-1/2 pl-10'
						dangerouslySetInnerHTML={{ __html: post.content.html }}
					></div>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ query }: any) {
	//get data on the server
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

	const { post } = await graphcms.request(gql`
		{
			post(where: { id: "${query.postid}" }) {
				id
				title
				date
				excerpt
				slug
				content {
					html
				}
				coverImage {
					url
				}
			}
		}
	`);

	return {
		props: { post },
	};
}

export default PostPage;
