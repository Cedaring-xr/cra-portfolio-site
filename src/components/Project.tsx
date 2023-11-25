import ImageSlider from './ImageSlider'

type ProjectProps = {
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
}

const Project: React.FC<ProjectProps> = ({ title, description, pictures, logos, link }) => {
	return (
		<div className="p-2 my-8 mx-2 w-[380px] flex flex-col items-center border-2 border-black rounded-xl bg-zinc-800 text-white">
			<h2 className="font-title text-2xl font-bold my-2">{title}</h2>
			<ImageSlider pictures={pictures} />
			<span className="m-2 text-white">{description}</span>

			{link.length > 1 ? (
				<a
					className="button mx-16 my-4 bg-amber-600 hover:bg-amber-500 text-black hover:scale-105"
					href={link}
					target="_blank"
					rel="noreferrer"
				>
					View Live Project
				</a>
			) : (
				<button className="button mx-16 my-4 bg-zinc-400 text-black cursor-default">
					Currently Unavailable
				</button>
			)}
			<div>
				<span className="font-title font-bold text-white">Tech Stack</span>
				<div className="w-[350px] flex flex-wrap">
					{logos.map((logo) => (
						<div key={logo.name} className="">
							<div className="m-1 max-w-[70px]">
								<img src={logo.url} className="h-[70px]" alt="tech icon"></img>
								<p className="font-serif text-center">{logo.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
