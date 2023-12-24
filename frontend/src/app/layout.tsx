import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata = {
	title: 'PORTAL LAMIA',
	description:
		'Laboratório de Aprendizado de Máquina e Imagens Aplicados à Indústria',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${montserrat.variable} scroll-smooth`} lang="pt-br">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
