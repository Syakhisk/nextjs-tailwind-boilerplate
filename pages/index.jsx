import Layout from "../components/Layout";

const Home = (props) => {
	return (
		<Layout>
			{/* <div style={{marginBottom: 2000}}> */}
			<div>
				<h1 className='text-5xl font-extrabold'>Hello, mamank!</h1>
				<h1 className='text-5xl font-bold'>Hello, mamank!</h1>
				<h1 className='text-5xl font-sans'>Hello, mamank!</h1>
				<h1 className='text-5xl font-thin'>Hello, mamank!</h1>
				<h1 className='text-5xl font-serif'>Hello, mamank!</h1>
				<h1 className='text-5xl font-body'>Hello, mamank!</h1>
			</div>
		</Layout>
	);
};

// Home.getInitialProps = () => {
// 	return { state: "" };
// };

export default Home;
