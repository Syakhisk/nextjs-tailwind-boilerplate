import Head from "next/head";

export default function Layout(props) {
	const {
		headTitle = "Next App",
		pageTitle = "Page Title",
		noTitle = false,
		children,
		...rest
	} = props;

	return (
		<>
			<Head>
				<title>{headTitle}</title>
			</Head>

			<main {...rest} className='max-w-6xl mx-auto'>
				{!noTitle && <header>{pageTitle}</header>}
				<div className='relative'>{children}</div>
				<footer>footer</footer>
			</main>
		</>
	);
}
