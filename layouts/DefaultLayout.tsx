import * as React from 'react';

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

export const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = (props: IDefaultLayoutProps) => {
	return(
		<React.Fragment>
			<main className="main-content" role="main">
				<Header />
				<section className={`page ${props.className} `}>
					{props.children}
				</section>
				<Footer />
			</main>				
		</React.Fragment>
	);	
};