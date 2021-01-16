import Link from "next/link";

const Index = () => {
	return (
		<div className='main'>
			<Link href='/birds'>
				<a>Birds Example</a>
			</Link>
			<Link href='/datapoints'>
				<a>Boxes Example</a>
			</Link>
		</div>
	);
};

export default Index;
