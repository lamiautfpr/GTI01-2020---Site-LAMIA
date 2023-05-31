const Cover = () => {
	return (
		<div className="h-screen flex items-center flex-col justify-center p-1">
			<h1 className="text-center text-7xl font-bold text-primary-900 mb-4">LAMIA</h1>
			<h3 className="text-center text-2xl  font-bold text-primary-900 mb-1">LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA</h3>
			<p className="text-center text-xl font-normal text-secondary-900">UTFPR Campus Santa Helena</p>
		</div>
	);
}

const Home = () => {
	return (
		<>
		<Cover/>
		<main className="bg-primary-100 flex flex-col items-center justify-center">
			
		</main>
		</>
	);
}

export default Home;