import Link from 'next/link';

interface IProps {
	href: string;
	title: string;
	className?: string;
}

export const LinkItem = ({ href, title, className = '' }: IProps) => (
	<Link href={href}>
		<a
			className={`block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600 ${className}`}
		>
			{title}
		</a>
	</Link>
);
