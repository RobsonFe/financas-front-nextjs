import React from 'react';
import Footer from '../footer';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen p-8 flex flex-col">
			<main >
				{children}
			</main>
			<Footer/>
		</div>
	);
};

export default Layout;