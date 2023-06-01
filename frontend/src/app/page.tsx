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
			<h2 className="text-4xl font-medium text-primary-900 mb-10">{title}</h2>
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

					<Section title="História e Missão">
						<div className="flex gap-16 items-center justify-center">
							<p className="max-w-lg text-base leading-7 font-normal text-black-900">
								O LAMIA foi fundado no final do ano de 2019 pelo professor Dr.
								Thiago França Naves com um pequeno grupo de alunos do curso de
								Ciência da Computação. Em 2020 o LAMIA iniciou execução de
								projetos utilizando Inteligência Artificial no combate a
								pandemia de COVID-19 e na construção de produtos para empresas
								parceiras, consolidando-se nos próximos anos com o perfil de
								atuação orientada a projetos com o mercado e organizações
								público e privadas.
							</p>
							<Image
								src="/images/icon-logo_full.svg"
								width={400}
								height={264}
								alt="Logo LAMIA completo"
								className="-mt-20"
							/>
						</div>
						<div className="flex gap-16 items-center justify-center my-1">
							<Image
								src="/images/icon-connections.svg"
								width={400}
								height={264}
								alt="Conexões LAMIA"
							/>
							<p className="max-w-lg text-base leading-7 font-normal text-black-900">
								A missão do LAMIA é liderar o desenvolvimento de pesquisadores e
								profissionais em Inteligência Artificial que irão guiar o país
								na direção da inovação através da produção de conhecimento
								científico, soluções customizadas e produtos para a indústria
								brasileira e mundial.
							</p>
						</div>
						<div className="flex gap-16 items-center justify-center">
							<p className="max-w-lg text-base leading-7 font-normal text-black-900">
								O LAMIA possui experiência na execução de projetos de P&D em
								parceria com empresas, para desenvolvimento de produtos de
								inteligência artificial que podem alavancar o modelo de negócio
								através da automação de áreas e tarefas chave internas das
								mesmas. Somos parceiros do Centro de Excêlencia em I.A (CEIA)
								credenciado como unidade EMBRAPII, que permite que projetos de
								P&D com empresas brasileiras possam ser construídos utilizando
								de contrapartida financeira não reembolsáveis da EMBRAPII.
								Estamos sempre disponíveis a receber e negociar propostas de
								projetos com empresas interessadas.
							</p>
							<Image
								src="/images/icon-labs.svg"
								width={352}
								height={352}
								alt="Laboratório LAMIA"
							/>
						</div>
					</Section>

					<Section title="Área de Atuação">
						<div className="flex gap-6 items-center justify-center">
							<div className="w-sm h-96 flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4">
								<Image
									src="/images/icon-data_science.svg"
									width={60}
									height={60}
									alt="Data Science"
								/>
								<h5 className="mt-6 mb-11 text-xl leading-8 font-bold text-primary-900">
									Ciência de Dados
								</h5>
								<p className="text-base leading-7 font-normal text-black-900 text-center">
									A ciência de dados é um campo interdisciplinar que usa
									algoritmos, procedimentos e processos para examinar grandes
									quantidades de dados a fim de descobrir padrões ocultos, gerar
									insights e direcionar a tomada de decisões.
								</p>
							</div>
							<div className="w-sm h-96 flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4">
								<Image
									src="/images/icon-computer_vision.svg"
									width={60}
									height={60}
									alt="Computer Vision"
								/>
								<h5 className="mt-6 mb-11 text-xl leading-8 font-bold text-primary-900">
									Visão Computacional
								</h5>
								<p className="text-base leading-7 font-normal text-black-900 text-center">
									Visão Computacional é um campo que permite que computadores e
									sistemas obtenham informações significativas a partir de
									imagens digitais, vídeos e outras entradas visuais. Como base
									nessas informações, é possível tomar ações ou fazer
									recomendações.
								</p>
							</div>
							<div className="w-sm h-96 flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4">
								<Image
									src="/images/icon-educational_technologies.svg"
									width={60}
									height={60}
									alt="Educational Technologiese"
								/>
								<h5 className="mt-6 mb-11 text-xl leading-8 font-bold text-primary-900">
									Tecnologias Educacionais
								</h5>
								<p className="text-base leading-7 font-normal text-black-900 text-center">
									Tecnologias Educacionais é um campo onde são exploradas
									tecnologias mais modernas de sistemas web e jogos digitais
									para criação de plataformas e ferramentas que auxiliem no
									processo de ensino aprendizagem de forma inovadora.
								</p>
							</div>
						</div>
					</Section>
					<Section title="Orientadores">
						<></>
					</Section>
					<Section title="Parceiros">
						<></>
					</Section>
				</main>
			</div>
		</>
	);
};

export default Home;
