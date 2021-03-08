import Layout from '../../components/Layout';

import { GraphQLClient, gql } from 'graphql-request';
import { IPost } from '../../interfaces';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const PostPage = () => {
	const router = useRouter();

	const [currentPost, setCurrentPost] = useState<IPost | null>(null);

	const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);
	//gets the data but only on the client
	useEffect(() => {
		if (!router.query.postid) return;

		async function getPost() {
			const { post } = await graphcms.request(gql`
			{
				post(where: { id: "${router.query.postid}" }) {
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
			}`);

			setCurrentPost(post);
		}
		getPost();
	}, [router]);

	if (!currentPost) return null;

	return (
		<Layout title='Post'>
			<div className='py-2'>
				<h2 className='text-xl border-b-2 border-purple-600 text-purple-600 pb-2 mb-2'>
					Post {router.query.postid} by {currentPost.title}
				</h2>
				<div className='flex pt-10'>
					<div className='w-1/2'>
						<img src={currentPost.coverImage.url} />
					</div>
					<div
						className='w-1/2 pl-10'
						dangerouslySetInnerHTML={{ __html: currentPost.content.html }}
					></div>
				</div>
			</div>
		</Layout>
	);
};

export default PostPage;
