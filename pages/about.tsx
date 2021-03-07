import Layout from '../components/Layout';

import { GraphQLClient, gql } from 'graphql-request';
import { IPage } from '../interfaces';

const AboutPage = ({ page }: { page: IPage }) => (
	<Layout title='About'>
		<div className='py-2'>
			<h2 className='text-xl border-b-2 border-purple-600 text-purple-600 pb-2 mb-2'>
				{page.title}
			</h2>
			<strong>{page.subtitle}</strong>
			<div dangerouslySetInnerHTML={{ __html: page.content.html }}></div>
		</div>
	</Layout>
);

export async function getStaticProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

	const { page } = await graphcms.request(gql`
		{
			page(where: { slug: "about" }) {
				title
				subtitle
				slug
				content {
					html
				}
			}
		}
	`);
	//console.log(page);

	return {
		props: { page },
	};
}

export default AboutPage;
