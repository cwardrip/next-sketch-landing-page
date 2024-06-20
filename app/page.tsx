
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="customFont flex flex-col items-center justify-center gap-4 py-4 md:py-5">
			<div className="w-full h-screen flex justify-center items-center">
				<div className="text-center px-4 md:px-10">
					<div className="flex flex-col items-center">
						<p className="text-4xl md:text-5xl lg:text-7xl">Next-Level Prototyping</p>
						<p className="text-4xl md:text-5xl lg:text-7xl">Next-Level Results</p>
					</div>
					<div className="mt-10">
						<a href="https://github.com/oslabs-beta/next-sketch" target="_blank">
							<Button size="lg" radius="full" color="primary">
								Launch Now
							</Button>
						</a>
					</div>
				</div>
			</div>

			{/* ----------- Row 2 */}
			<div className="w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-10 gap-10">
				<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4 order-2 md:order-1">
					<p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
						NextSketch is a desktop application designed to assist developers in visualizing and creating the file structure for their websites, all within a single integrated environment.
					</p>
				</div>
				<Card shadow="lg" className="flex-1 order-1 md:order-2">
					<CardBody>
						<Image
							src="/Demo1.gif"
							width={500}
							height={500}
							alt="Demo 1"
							className="rounded-lg"
							style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
							layout="responsive"
						/>
					</CardBody>
				</Card>
			</div>

			{/* ----------- Row 3 */}
			<div className="w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-10 gap-10">
				<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4 order-2 md:order-1">
					<p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
						This tool will not only provide the ability to create the necessary files and directories but also include boilerplate code for each file, streamlining the development process.
					</p>
				</div>
				<Card shadow="lg" className="flex-1 order-1 md:order-2">
					<CardBody>
						<Image
							src="/Demo2.gif"
							width={500}
							height={500}
							alt="Demo 2"
							className="rounded-lg"
							style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
							layout="responsive"
						/>
					</CardBody>
				</Card>
			</div>
		</section>
	);
}