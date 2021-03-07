import { resolveHref } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';

interface IProps {
	href: string;
	title: string;
	className?: string;
}

export const LinkItem = ({ href, title, className = '' }: IProps) => {
	//handle external link
	if (href.startsWith('http')) {
		return (
			<a
				target='_blank'
				href={href}
				className={`mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600 ${className}`}
			>
				{title}
			</a>
		);
	}
	//handle next route
	return (
		<Link href={href}>
			<a className={`mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600 ${className}`}>
				{title}
			</a>
		</Link>
	);
};
