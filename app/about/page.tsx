import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import Image from "next/image"
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import {
	TwitterIcon,
	LinkedInIcon,
	GithubIcon
} from "@/components/icons";



export default function AboutPage() {
	return (
		<div>
			<div className="flex justify-center">
				<h1 className={title()}>Meet the Team</h1>
			</div>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
				<div className="flex flex-row flex-wrap justify-center">

					<Card shadow="lg" className="m-4">
						<CardBody>
							<div className="flex flex-col w-full">
								<div className="flex justify-center">
									<Image
										src="/Jordan_Lim.jpeg"
										width={200}
										height={200}
										alt="Jordan Lim Profile Picture"
										className="justify-center rounded-lg border-large"
									/>
								</div>
								<div className="flex justify-center pt-2">
									<h2 className="text-3xl font-bold">Jordan Lim</h2>
								</div>

								<div className="flex flex-col justify-center gap-4 pt-4">
									<div className="flex flex-row justify-center">
										<a href="https://www.linkedin.com/in/jordanlim1/" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<LinkedInIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">LinkedIn</h3>
												</CardBody>
											</Card>
										</a>
									</div>

									<div className="flex flex-row justify-center">
										<a href="https://github.com/jordanlim1" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex-row p-3">
													<GithubIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">GitHub</h3>
												</CardBody>
											</Card>
										</a>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card shadow="lg" className="m-4">
						<CardBody>
							<div className="flex flex-col w-full">
								<div className="flex justify-center">
									<Image
										src="/Chris_W.jpeg"
										width={200}
										height={200}
										alt="Chris Wardrip Profile Picture"
										className="justify-center rounded-lg border-large"
									/>
								</div>
								<div className="flex justify-center pt-2">
									<h2 className="text-3xl font-bold">Chris Wardrip</h2>
								</div>

								<div className="flex flex-col justify-center gap-4 pt-4">
									<div className="flex flex-row justify-center">
										<a href="https://www.linkedin.com/in/christopherwardrip/" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<LinkedInIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">LinkedIn</h3>
												</CardBody>
											</Card>
										</a>
									</div>
									<div className="flex flex-row justify-center">

										<a href="https://github.com/cwardrip" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<GithubIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">GitHub</h3>
												</CardBody>
											</Card>
										</a>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card shadow="lg" className="m-4">
						<CardBody>
							<div className="flex flex-col w-full">
								<div className="flex justify-center">
									<Image
										src="/Laura_Ramirez.jpeg"
										width={200}
										height={200}
										alt="Laura Ramirez Profile Picture"
										className="justify-center rounded-lg border-large"
									/>
								</div>
								<div className="flex justify-center pt-2">
									<h2 className="text-3xl font-bold">Laura Ramirez</h2>
								</div>

								<div className="flex flex-col justify-center gap-4 pt-4">
									<div className="flex flex-row justify-center">
										<a href="https://www.linkedin.com/in/laura-ramirez-0bb66885/" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<LinkedInIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">LinkedIn</h3>
												</CardBody>
											</Card>
										</a>
									</div>

									<div className="flex flex-row justify-center">
										<a href="https://github.com/lauraramirez05" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<GithubIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">GitHub</h3>
												</CardBody>
											</Card>
										</a>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card shadow="lg" className="m-4">
						<CardBody>
							<div className="flex flex-col w-full">
								<div className="flex justify-center">
									<Image
										src="/James_Huang.jpeg"
										width={200}
										height={200}
										alt="Cooper Codes Profile Picture"
										className="justify-center rounded-lg border-large"
									/>
								</div>
								<div className="flex justify-center pt-2">
									<h2 className="text-3xl font-bold">James Huang</h2>
								</div>

								<div className="flex flex-col justify-center gap-4 pt-4">
									<div className="flex flex-row justify-center">
										<a href="https://www.linkedin.com/in/james-huang-220392243/" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<LinkedInIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">LinkedIn</h3>
												</CardBody>
											</Card>
										</a>
									</div>

									<div className="flex flex-row justify-center">
										<a href="https://github.com/jameshuangcoding" target="_blank">
											<Card className="w-full" isHoverable>
												<CardBody className="flex flex-row p-3">
													<GithubIcon className="text-default-500 mr-2" />
													<h3 className="self-center text-lg">GitHub</h3>
												</CardBody>
											</Card>
										</a>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</section>
		</div>
	);
}
