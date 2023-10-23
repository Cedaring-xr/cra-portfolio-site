import React, { useEffect, useState } from 'react'

import ImageSlider from './ImageSlider'

export default function Project({ title, description, pictures, logos, link }) {
	return (
		<div className="p-2 my-8 mx-2 w-[380px] flex flex-col items-center">
			<h2 className="font-title text-2xl">{title}</h2>
			<ImageSlider pictures={pictures} />
			<span className="m-2">{description}</span>
			<a className="button mx-16 my-6" href={link} target="_blank">
				View Live Project
			</a>
			<div>
				<span className="font-title font-bold">Tech Stack</span>
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
