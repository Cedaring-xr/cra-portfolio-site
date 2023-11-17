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
			<a className="button mx-16 my-4" href={link} target="_blank">
				View Live Project
			</a>
			<div>
				<span className="font-title font-bold text-white">Tech Stack</span>
				<div className="w-[350px] flex flex-wrap">
					{logos.map((logo) => (
						<div key={logo.name} className="">
							<div className="m-1 max-w-[70px]">
								<img src={logo.url} className="h-[70px]"></img>
								<span className="font-serif">{logo.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
