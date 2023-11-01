import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, fontMono, fontDisplay } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import Head from "next/head";



export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* <head
			/> */}
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
				/>
			</Head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-full pt-16 px-6 flex-grow
						bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
							{children}
						</main>
						{/* <Divider orientation="horizontal" /> */}
						<footer className="w-full flex justify-end py-3 px-3">
							<p className="text-white">@ 2023 NextSketch, Inc.</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
