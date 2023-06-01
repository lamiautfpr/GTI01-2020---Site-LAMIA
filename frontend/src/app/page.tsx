import Image from 'next/image';

const Cover = () => {
	return (
		<div className="h-screen flex items-center flex-col justify-center p-1">
			<h1 className="text-center text-7xl font-bold text-primary-900 mb-4">
				LAMIA
			</h1>
			<h3 className="text-center text-2xl  font-bold text-primary-900 mb-1">
				LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA
			</h3>
			<p className="text-center text-xl font-normal text-secondary-900">
				UTFPR Campus Santa Helena
			</p>
		</div>
	);
};

interface ISectionProps {
	title: string;
	children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ title, children }) => {
	return (
		<section className="flex flex-col w-full mb-10">
			<h2 className="text-4xl font-medium text-primary-900 mb-4">{title}</h2>
			{children}

			<hr className="border bg-black-200 mt-10" />
		</section>
	);
};

const Home = () => {
	return (
		<>
			<Cover />
			<div className="w-full flex items-center justify-center">
				<main className="flex flex-col min-h-screen w-full  max-w-6xl px-1">
					<Section title="Notícias">
						<div className="flex justify-between gap-6">
							<div className="flex flex-col w-80">
								<Image
									src="/images/news-premio_ods.png"
									width={328}
									height={192}
									alt="Selo ODS 2020"
									className="mb-2"
								/>
								<div className="flex mb-4 gap-2">
									<span className="rounded-3xl py-1 px-2 font-bold bg-secondary-200 text-secondary-900">
										COVID-19
									</span>
									<span className="rounded-3xl py-1 px-2 font-bold bg-secondary-200 text-secondary-900">
										Inovação
									</span>
								</div>
								<h5 className="mb-4 text-xl leading-8 font-bold text-primary-900">
									Plataforma de Monitoramento Inteligente da COVID-19 recebe o
									prêmio Selo SESI ODS 2020
								</h5>
								<p className="mb-4 text-sm leading-5 font-normal text-black-700">
									O prêmio SESI ODS é entregue anualmente a empresas e
									instituições com projetos de alto impacto dentro da sociedade
									e focados nas...
								</p>
								<footer className="flex">
									<Image
										src="/images/avatar-thiago.png"
										width={32}
										height={32}
										alt="Avatar Thiago"
										className="mr-2 rounded-full"
									/>
									<span className="mr-4 text-base leading-7 font-normal text-black-400">
										Thiago Naves
									</span>
									<span className="text-base leading-7 font-normal text-black-400">
										7 de jan 2021
									</span>
								</footer>
							</div>
							<div className="flex flex-col w-80">
								<Image
									src="/images/news-ia_compras.png"
									width={328}
									height={192}
									alt="IA Compras"
									className="mb-2"
								/>
								<div className="flex mb-4 gap-2">
									<span className="rounded-3xl py-1 px-2 font-bold bg-secondary-200 text-secondary-900">
										Inteligência Artificial
									</span>
								</div>
								<h5 className="mb-4 text-xl leading-8 font-bold text-primary-900">
									Como a inteligência artificial faz você comprar coisas, mesmo
									sem precisar
								</h5>
								<p className="mb-4 text-sm leading-5 font-normal text-black-700">
									Varejistas do mundo todo estão usando IA (inteligência
									artificial) — sistemas de software que podem aprender por si
									mesmos — para...
								</p>
								<footer className="flex">
									<Image
										src="/images/avatar-arlete.png"
										width={32}
										height={32}
										alt="Avatar Thiago"
										className="mr-2 rounded-full"
									/>
									<span className="mr-4 text-base leading-7 font-normal text-black-400">
										Arlete Beuren
									</span>
									<span className="text-base leading-7 font-normal text-black-400">
										10 de fev 2022
									</span>
								</footer>
							</div>
							<div className="flex flex-col w-80">
								<Image
									src="/images/news-ia_criancas.png"
									width={328}
									height={192}
									alt="IA Crianças"
									className="mb-2"
								/>
								<div className="flex mb-4 gap-2">
									<span className="rounded-3xl py-1 px-2 font-bold bg-secondary-200 text-secondary-900">
										Inteligência Artificial
									</span>
								</div>
								<h5 className="mb-4 text-xl leading-8 font-bold text-primary-900">
									Por que crianças precisam de proteção contra a influência da
									Inteligência Artificial
								</h5>
								<p className="mb-4 text-sm leading-5 font-normal text-black-700">
									Algoritmos que interagem com aplicações como Alexa e que podem
									gravar os dados de voz como influenciar o desenvolvimento
									so...
								</p>
								<footer className="flex">
									<Image
										src="/images/avatar-brilhador.png"
										width={32}
										height={32}
										alt="Avatar Thiago"
										className="mr-2 rounded-full"
									/>
									<span className="mr-4 text-base leading-7 font-normal text-black-400">
										Anderson Brilhador
									</span>
									<span className="text-base leading-7 font-normal text-black-400">
										13 de mar 2022
									</span>
								</footer>
							</div>
						</div>
					</Section>
					<Section title="História e Missão" />
					<Section title="Área de Atuação" />
					<Section title="Orientadores" />
					<Section title="Parceiros" />
				</main>
			</div>
		</>
	);
};

export default Home;
