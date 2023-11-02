
import { Card, CardBody } from "@nextui-org/card"
import Image from "next/image"
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className={"customFont flex flex-col items-end justify-center gap-4 py-4 md:py-5"}>
			{/* <section className="flex flex-col items-end justify-center gap-4 py-4 md:py-5"> */}
			<div className="w-full h-screen flex justify-center items-center">
				<div className="pr-4 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center">
						{/* <p className={`customFont text-7xl text-center`}>Next-Level Prototyping</p> */}
						<p className="text-7xl text-center">Next-Level Prototyping</p>
						<p className="text-7xl text-center">Next-Level Results</p>
					</div>
					<div className="p-10">
						<Button size="lg" radius="full" color="primary">
							Launch Now
						</Button>
					</div>
				</div>
			</div>

			{/* ----------- Row 2*/}
			<div className="w-full flex justify-between items-center p-10" id="test">
				<div className="md:w-1/2 pr-4 p-10">
					<div className="flex flex-col items-center"> {/* Center text both horizontally and vertically */}
						<p className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-center">NextSketch is a desktop application designed to assist developers in visualizing and creating the file structure for their websites, all within a single integrated environment.</p>
					</div>
				</div>

				<Card shadow="lg" className="hidden md:flex mr-20">
					<CardBody>
						<div className="flex flex-col w-full">
							<div className="flex justify-center">
								<Image
									// src="/nature-reflection-liquid-wave-smooth-shiny-generated-by-ai.jpg"
									src="/test.gif"
									width={500}
									height={500}
									alt="liquid-wave picture"
									className="w-auto justify-center rounded-lg border-large"
									style={{ objectFit: 'cover', width: '600px', height: '600px' }}
									layout="intrinsic" // Set the layout to "intrinsic" to maintain aspect ratio


								/>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
			{/* //-----Row 3 */}

			<div className="w-full flex justify-between items-center pl-10 py-10">
				<Card shadow="lg" className="hidden md:flex ml-20">
					<CardBody>
						<div className="flex flex-col w-full">
							<div className="flex justify-center">
								<Image
									src="/test.gif"
									width={500}
									height={500}
									alt="liquid-wave picture"
									className="w-auto justify-center rounded-lg border-large"
									style={{ objectFit: 'cover', width: '600px', height: '600px' }}
									layout="intrinsic" // Set the layout to "intrinsic" to maintain aspect ratio


								/>
							</div>
						</div>
					</CardBody>
				</Card>
				<div className="md:w-1/2 p-10">
					<div className="flex flex-col items-center pr-10">
						<p className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-center">This tool will not only provide the ability to create the necessary files and directories but also include boilerplate code for each file, streamlining the development process.</p>
					</div>
				</div>
			</div>
		</section >

	);
}