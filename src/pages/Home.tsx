import React from 'react'
import Profile from '../components/Profile'
import Certifications from '../components/Certifications'

export default function Home() {
	return (
		<div className="bg-neutral-200 p-0 flex flex-col">
			<div className="flex flex-col items-center">
				<a
					href="/projects"
					className="bg-emerald-600 text-white font-title text-xl py-1 px-6 rounded-full border-2 border-slate-900 my-4 w-[300px] flex justify-center"
				>
					View Recent Projects
				</a>
				<a
					href="https://github.com/Cedaring-xr"
					target="_blank"
					className="bg-purple-600 text-white font-title text-xl py-1 px-6 rounded-full border-2 border-slate-900 my-4 w-[200px] flex justify-center"
				>
					View GitHub
				</a>
				<a
					href="https://github.com/Cedaring-xr"
					target="_blank"
					className="bg-amber-600 text-white font-title text-xl py-1 px-6 rounded-full border-2 border-slate-900 my-4 w-[200px] flex justify-center"
				>
					View Resume
				</a>
			</div>

			<Profile title="MATT RAY" subTitle="Web Developer & QA Automation Engineer" img="self.png" />
			<Certifications />
			<div className="p-3 border-[1px] border-green-600">
				<h2 className="font-title font-bold text-xl">A little bit about myself</h2>
				<div>
					<h3 className="font-title font-bold text-xl">Programming background</h3>
					<p className="font-serif">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis quam fugiat porro
						expedita reprehenderit animi mollitia adipisci, voluptatum recusandae necessitatibus maiores
						ducimus culpa harum cumque velit veritatis exercitationem sunt iure qui labore deserunt? Enim
						cum tempora impedit! Tenetur alias ea est labore porro itaque. Dolores a eos dolor odio magni
						quasi id. Velit commodi maxime deserunt pariatur soluta enim reprehenderit iure in officia eius.
					</p>
					<div>
						<h3 className="font-title font-bold text-xl">Hobbies and personal life</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius in magni quod iste maxime
							repudiandae ducimus voluptates voluptatem harum voluptatum placeat cupiditate vitae, magnam
							nam consectetur iure quae repellendus delectus soluta velit assumenda cumque nostrum
							possimus. Libero blanditiis aliquam ipsam quos facilis quaerat quasi. Quod suscipit velit
							ducimus quasi deleniti minus vero molestiae consequatur nulla quas non quis laudantium earum
							aperiam officia adipisci odit perspiciatis recusandae eligendi quibusdam labore, et aliquid
							rem sit. .
						</p>
					</div>
					<div>
						<h3 className="font-title font-bold text-xl">Future Plans and projects</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem, consequuntur
							inventore ex aut possimus? Molestias in delectus eaque sequi, nihil nemo aut. Voluptatem
							ipsa repudiandae maiores cum quas nemo ea ipsam quae tenetur magnam iusto delectus quaerat
							nobis, neque pariatur nulla velit vero culpa aperiam asperiores odit.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
