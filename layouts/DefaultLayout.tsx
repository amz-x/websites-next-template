import React from 'react';
import Head from 'next/head';

// Components
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

// SASS
import 'styles/main.scss';

interface IDefaultLayoutProps {
	title: string;
	description?: string;
	className?: string;
	children: any;
}

export const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = (props: IDefaultLayoutProps) => (
	<React.Fragment>
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="author" content="" />
			<meta name="description" content="" />
			<title>{props.title}</title>
		</Head>
		<main className="main-content" role="main">
			<Header />
			<section className={`page ${props.className} `}>
				{props.children}
			</section>
			<Footer />
		</main>
	</React.Fragment>
);
