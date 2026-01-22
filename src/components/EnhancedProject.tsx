import { useState } from 'react'
import ImageSlider from './ImageSlider'

type EnhancedProjectProps = {
	title: string
	description: string
	pictures: {
		url: string
		description: string
		alt: string
	}[]
	logos: {
		name: string
		url: string
	}[]
	link: string
	testPlan: string
	architectureDiagram: string
}

const EnhancedProject: React.FC<EnhancedProjectProps> = ({
	title,
	description,
	pictures,
	logos,
	link,
	testPlan,
	architectureDiagram
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className="p-4 my-8 mx-2 w-full md:w-[440px] flex flex-col items-center border-2 border-black rounded-xl bg-zinc-800 text-white shadow-lg">
			<h2 className="font-title text-2xl font-bold my-3">{title}</h2>
			<ImageSlider pictures={pictures} />
			<p className="m-4 text-white leading-relaxed text-base">{description}</p>

			<div className="flex gap-4 flex-wrap justify-center">
				{link.length > 1 ? (
					<a
						className="button my-4 bg-amber-600 hover:bg-amber-500 text-black hover:scale-105"
						href={link}
						target="_blank"
						rel="noreferrer"
					>
						View Live Project
					</a>
				) : (
					<button className="button my-4 bg-zinc-400 text-black cursor-default">Under Construction</button>
				)}
				{testPlan.length > 1 ? (
					<a
						className="button my-4 bg-cyan-700 hover:bg-teal-500 text-white hover:scale-105"
						href={testPlan}
						rel="noreferrer"
					>
						View Test Strategy
					</a>
				) : (
					<></>
				)}
				{architectureDiagram.length > 1 ? (
					<button
						className="button my-4 bg-blue-600 hover:bg-blue-500 text-white hover:scale-105"
						onClick={() => setIsModalOpen(true)}
					>
						View Architecture
					</button>
				) : (
					<></>
				)}
			</div>

			{/* Architecture Diagram Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
							onClick={() => setIsModalOpen(false)}
						>
							Close
						</button>
						<h3 className="text-2xl font-bold mb-4 text-black">{title} - Architecture Diagram</h3>
						<img
							src={architectureDiagram}
							alt={`${title} architecture diagram`}
							className="max-w-full h-auto"
						/>
					</div>
				</div>
			)}

			<div className="w-full max-w-[400px]">
				<span className="font-title font-bold text-white text-lg">Tech Stack</span>
				<div className="flex flex-wrap mt-2">
					{logos.map((logo) => (
						<div key={logo.name} className="">
							<div className="m-2 max-w-[70px]">
								<img src={logo.url} className="h-[70px]" alt="tech icon"></img>
								<p className="font-serif text-center text-sm">{logo.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default EnhancedProject
