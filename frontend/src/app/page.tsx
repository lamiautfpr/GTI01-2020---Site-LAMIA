import Image from 'next/image';
import Link from 'next/link';
// import { MdMailOutline, MdOutlinePlace, MdSmartphone } from 'react-icons/md';
import partners from './api/partners.json';

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
	hasDivider?: boolean;
}

const Section: React.FC<ISectionProps> = ({
	title,
	children,
	hasDivider = true,
}) => {
	return (
		<section className="flex flex-col w-full mb-10" id={title}>
			<h2 className="text-4xl font-medium text-primary-900 mb-10 max-md:text-center">
				{title}
			</h2>
			{children}
			{hasDivider && <hr className="border bg-black-200 mt-10" />}
		</section>
	);
};

const Home = () => {
	return (
		<>
			<Cover />
			<div className="w-full flex items-center justify-center">
				<main className="flex flex-col gap-8 min-h-screen w-full  max-w-7xl px-4">
					<Section title="História e Missão">
						<div className="flex flex-col md:flex-row gap-8 items-center justify-between">
							<p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
								<Link
									href="https://docs.google.com/document/d/1JEfJ-gSrrJPPyxORf4BHEs8qLDszS1PTaV14I6ydx7s/edit?usp=sharing"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									Fundado
								</Link>{' '}
								no final de 2019 pelo professor Dr. Thiago França Naves na UTFPR
								do campus Santa Helena, o LAMIA iniciou sua trajetória com a
								execução de{' '}
								<Link
									href="https://github.com/lamiautfpr"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									projetos
								</Link>{' '}
								utilizando Inteligência Artificial para construção de
								tecnologias e produtos para demandas de órgãos públicos e
								empresas. Nos anos seguintes, consolidou o perfil de atuação
								orientada a projetos de PD&I, com objetivo de gerar resultados
								de impacto nas organizações parceiras através de produtos de I.A
								construídos e validados em conjunto.
							</p>
							<Image
								src="/images/icon-logo_full.svg"
								width={400}
								height={264}
								alt="Logo LAMIA completo"
								className="max-md:hidden"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-8 items-center justify-between my-8">
							<Image
								src="/images/icon-labs.svg"
								width={352}
								height={352}
								alt="Laboratório LAMIA"
							/>
							<p className="max-w-lg text-base text-justify leading-7 font-normal text-black-900">
								A missão do LAMIA é{' '}
								<Link
									href="https://www.linkedin.com/in/lamiautfpr/"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									liderar
								</Link>{' '}
								o desenvolvimento de pesquisadores e profissionais em
								Inteligência Artificial que irão guiar o país na direção da
								inovação através da produção de conhecimento científico,
								soluções customizadas e produtos para a indústria brasileira e
								mundial. Estamos sempre a procura de novos talentos para
								ingressar em nosso modelo presencial ou remoto e{' '}
								<Link
									href="https://forms.gle/yCAMx1eB2Q6ULJPK6"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									trabalhar conosco
								</Link>
								, aprendendo na prática as últimas tecnologias de I.A e
								trabalhando em projetos reais aplicados.
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-8 items-center justify-between">
							<p className="max-w-lg text-base leading-7 text-justify font-normal text-black-900 order-2 md:order-1">
								O{' '}
								<Link
									href="https://www.instagram.com/lamiautfpr/"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									LAMIA
								</Link>{' '}
								possui experiência na execução de projetos de P&D em parceria
								com empresas, para desenvolvimento de produtos de inteligência
								artificial que podem alavancar o modelo de negócio através da
								automação de áreas e tarefas chave internas das mesmas. Somos
								parceiros do Centro de Excêlencia em I.A (CEIA) credenciado como
								unidade{' '}
								<Link
									href="https://embrapii.org.br/"
									target="_blank"
									className="text-secondary-900 font-bold hover:font-bold duration-120"
								>
									EMBRAPII
								</Link>{' '}
								, que permite que projetos de P&D com empresas brasileiras
								possam ser construídos utilizando de contrapartida financeira
								não reembolsáveis da EMBRAPII. Estamos sempre disponíveis a
								receber e negociar{' '}
								<Link
									href="https://api.whatsapp.com/send?phone=5545998357976"
									target="_blank"
									className="text-secondary-900 hover:font-bold duration-120"
								>
									propostas
								</Link>{' '}
								de projetos com empresas interessadas.
							</p>
							<Image
								src="/images/awards.svg"
								width={276}
								height={339}
								alt="Premio do LAMIA"
								className="order-1"
							/>
						</div>
					</Section>

					<Section title="Área de Atuação">
						<div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
							<div className="w-sm flex-0 h-[25rem] max-md:h-auto flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-150 hover:scale-110">
								<Image
									src="/images/icon-data_science.svg"
									width={60}
									height={60}
									alt="Data Science"
								/>
								<h5 className="mt-6 mb-8 text-xl leading-8 font-bold text-primary-900">
									Ciência de Dados
								</h5>
								<p className="text-base leading-7 font-normal text-black-900 text-center">
									A ciência de dados é um campo interdisciplinar que usa
									algoritmos, procedimentos e processos para examinar grandes
									quantidades de dados a fim de descobrir padrões ocultos, gerar
									insights e direcionar a tomada de decisões.
								</p>
							</div>
							<div className="w-sm flex-0 h-[30rem] max-md:h-auto flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-150 hover:scale-110">
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
							<div className="w-sm flex-0 h-[25rem] max-md:h-auto hover:h-[25.5rem] flex flex-col items-center justify-center rounded-lg bg-black-100 pt-8 px-4 pb-4 max-w-[640px] duration-150 hover:scale-110">
								<Image
									src="/images/icon-educational_technologies.svg"
									width={60}
									height={60}
									alt="Educational Technologiese"
								/>
								<h5 className="mt-6 mb-8 text-xl leading-8 font-bold text-primary-900">
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
						<div className="flex flex-col md:flex-row justify-center gap-6 ">
							<div className="flex flex-col w-80 drop-shadow-xl max-md:w-full">
								<Image
									src="/images/avatar-thiago.png"
									width={328}
									height={192}
									alt="Avatar Thiago"
									className="mb-2 max-md:w-full"
								/>
								<h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900 ">
									Thiago Naves
								</h5>
								<p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
									Coordenador do LAMIA e docente no curso de Ciência da
									Computação da UTFPR Santa Helena. Conduz pesquisas nas áreas
									de Ciência de Dados e Visão Computacional e trabalha junto a
									incubadoras no desenvolvimento de empresas de base
									tecnológicas e startups.
								</p>
							</div>
							<div className="flex flex-col w-80 drop-shadow-xl  max-md:w-full">
								<Image
									src="/images/avatar-arlete.png"
									width={328}
									height={192}
									alt="Avatar Arlete"
									className="mb-2  max-md:w-full"
								/>
								<h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900">
									Arlete Beuren
								</h5>
								<p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
									Orientadora do LAMIA e docente no Curso de Ciência da
									Computação da UTFPR. Interesse de pesquisas nas áreas de Visão
									Computacional/Processamento de Imagens/Reconhecimento de
									Padrões/Big Data/Computação Gráfica/Realidade
									Virtual/Desenvolvimento Web.
								</p>
							</div>
							<div className="flex flex-col w-80 drop-shadow-xl  max-md:w-full">
								<Image
									src="/images/avatar-brilhador.png"
									width={328}
									height={192}
									alt="Avatar Brilhador"
									className="mb-2  max-md:w-full"
								/>
								<h5 className="mb-4 text-xl max-md:text-center leading-8 font-bold text-primary-900">
									Anderson Brilhador
								</h5>
								<p className="mb-4 text-sm max-md:text-justify leading-5 font-normal text-black-700">
									Orientador do LAMIA e docente no curso de Ciência da
									Computação da UTFPR Santa Helena. Desenvolve pesquisas nas
									seguintes áreas: Computer Vision, Data Science, Data Mining,
									Machine Learning e Deep Learning.
								</p>
							</div>
						</div>
					</Section>

					<Section title="Empresas parceiras" hasDivider={false}>
						<div className="flex gap-4 flex-wrap items-center justify-start  max-sm:justify-center">
							{partners.map((partner) => (
								<Image
									className="max-sm:max-w-[7rem]"
									key={partner.path}
									src={`/images/partners/${partner.path}`}
									width={partner.width}
									height={partner.height}
									alt={partner.alt}
								/>
							))}
						</div>
					</Section>
				</main>
			</div>
			<footer className="mt-10 w-full flex items-center justify-center py-12 bg-black-100">
				<div className="flex gap-10 flex-col w-full max-w-6xl px-1">
					<div className="flex max-md:flex-col max-md:items-center gap-10 justify-between">
						<div className="max-md:px-6">
							<Image
								src="/images/icon-logo_name.svg"
								width={217}
								height={94}
								alt="Logo LAMIA"
							/>
						</div>
						<div className="flex flex-col max-md:px-6 gap-4 md:max-w-[15rem] justify-start items-start">
							<h6 className="text-xl leading-8 font-bold text-black-900">
								Contato
							</h6>
							<div className="flex gap-2">
								<Image
									src="/images/icon-location.svg"
									width={24}
									height={24}
									alt="Location icon"
								/>
								<p className="text-sm leading-6 font-normal text-black-900">
									Prolongamento da Rua Cerejeira, s/n Bairro - São Luiz, Santa
									Helena - PR, 85892-000
								</p>
							</div>
							<div className="flex gap-2">
								<Image
									src="/images/icon-email.svg"
									width={24}
									height={24}
									alt="E-mail icon"
								/>
								<Link
									href="mail:lamia-sh@utfpr.edu.br"
									className="text-sm leading-6 font-normal text-black-900"
								>
									lamia-sh@utfpr.edu.br
								</Link>
							</div>
							<div className="flex gap-2">
								<Image
									src="/images/icon-telephone.svg"
									width={24}
									height={24}
									alt="Telefone icon"
								/>
								<Link
									href="tel:45998357976"
									className="text-sm leading-6 font-normal text-black-900"
								>
									(45) 99835-7976
								</Link>
							</div>
						</div>

						<div className="flex flex-col max-md:px-6 max-md:w-full gap-4 md:max-w-[15rem] justify-start items-start">
							<h6 className="text-xl leading-8 font-bold text-black-900">
								Navegação
							</h6>
							<div className="flex gap-2">
								<Link
									href="#"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Nossos números
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Depoimentos
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#História e Missão"
									className="text-sm leading-6 font-normal text-black-900"
								>
									História e Missão
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#Área de Atuação"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Áreas de Atuação
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#Orientadores"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Orientadores
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Benefícios para as empresas
								</Link>
							</div>
							<div className="flex gap-2">
								<Link
									href="#Empresas parceiras"
									className="text-sm leading-6 font-normal text-black-900"
								>
									Empresas parceiras
								</Link>
							</div>
						</div>

						<div className="flex flex-col max-md:px-6 max-md:w-full gap-4 md:max-w-[15rem]">
							<h6 className="text-xl leading-8 font-bold text-black-900">
								Social
							</h6>
							<div className="flex gap-5">
								<Link
									href="https://www.facebook.com/lamiautfpr2"
									target="_blank"
									className="hover:scale-150 duration-300 scale-125"
								>
									<Image
										src="/images/icon-facebook.svg"
										width={24}
										height={24}
										alt="Facebook icon"
									/>
								</Link>
								<Link
									href="https://www.instagram.com/lamiautfpr/"
									target="_blank"
									className="hover:scale-150 duration-300 scale-125"
								>
									<Image
										src="/images/icon-instagram.svg"
										width={24}
										height={24}
										alt="Instagram icon"
									/>
								</Link>
								<Link
									href="https://github.com/lamiautfpr"
									target="_blank"
									className="hover:scale-150 duration-300 scale-125"
								>
									<Image
										src="/images/icon-github.svg"
										width={24}
										height={24}
										alt="Github icon"
									/>
								</Link>
								<Link
									href="https://www.linkedin.com/in/lamiautfpr/"
									target="_blank"
									className="hover:scale-150 duration-300 scale-125"
								>
									<Image
										src="/images/icon-linkedin.svg"
										width={24}
										height={24}
										alt="Linkedin icon"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="mt-10 border-t py-4">
						<span className="flex items-center justify-center text-base leading-7 font-normal text-black-900">
							© 2024 LAMIA. Todos os direitos reservados
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Home;
