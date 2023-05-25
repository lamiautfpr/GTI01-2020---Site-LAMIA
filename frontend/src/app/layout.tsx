import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
