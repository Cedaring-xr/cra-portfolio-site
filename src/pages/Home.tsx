import React from 'react'
import Profile from '../components/Profile'
import Certifications from '../components/Certifications'
import self from '../assets/self.png'

export default function Home() {
	return (
		<div>
			<div className="background pt-[400px] flex flex-col">
				<Profile title="MATT RAY" subTitle="Web Developer & QA Automation Engineer" img={self} />
				<Certifications />
			</div>
			<div className="bg-zinc-900 pt-12 lg:pb-24">
				<div className="border-b-2 border-amber-600 relative w-3/4 mx-auto">
					<h3 className="text-amber-600 w-[200px] bg-zinc-900 text-2xl -mb-4 text-center top-20 mx-auto sans-font">
						About Myself
					</h3>
				</div>
				<div className="flex flex-col lg:flex-row lg:gap-6 text-white lg:px-2 lg:max-w-[1600px] mx-auto lg:pt-12 px-4 pt-12">
					<div className="p-3 rounded-lg mt-8">
						<h3 className="font-title font-bold text-xl text-amber-600">Programming background</h3>
						<hr className="line-break" />
						<p className="mt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis quam fugiat porro
							expedita reprehenderit animi mollitia adipisci, voluptatum recusandae necessitatibus maiores
							ducimus culpa harum cumque velit veritatis exercitationem sunt iure qui labore deserunt?
							Enim cum tempora impedit! Tenetur alias ea est labore porro itaque. Dolores a eos dolor odio
							magni quasi id. Velit commodi maxime deserunt pariatur soluta enim reprehenderit iure in
							officia eius.
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8">
						<h3 className="font-title font-bold text-xl text-amber-600">Hobbies and personal life</h3>
						<hr className="line-break" />
						<p className="mt-4">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius in magni quod iste maxime
							repudiandae ducimus voluptates voluptatem harum voluptatum placeat cupiditate vitae, magnam
							nam consectetur iure quae repellendus delectus soluta velit assumenda cumque nostrum
							possimus. Libero blanditiis aliquam ipsam quos facilis quaerat quasi. Quod suscipit velit
							ducimus quasi deleniti minus vero molestiae consequatur nulla quas non quis laudantium earum
							aperiam officia adipisci odit perspiciatis recusandae eligendi quibusdam labore, et aliquid
							rem sit. .
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8">
						<h3 className="font-title font-bold text-xl text-amber-600">Future Plans and projects</h3>
						<hr className="line-break" />
						<p className="mt-4">
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
