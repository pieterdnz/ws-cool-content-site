import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { LinkItem } from './LinkItem';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
	children?: ReactNode;
	menuItems?: ReactNode;
	title?: string;
};

const Layout = ({ children, menuItems, title = 'This is the default title' }: Props) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<Header />
		<div className='container mx-auto px-4'>{children}</div>
		<Footer />
	</>
);

export default Layout;
