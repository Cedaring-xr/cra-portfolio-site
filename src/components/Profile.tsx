import React from 'react'

export default function Profile({ title, subTitle, img }) {
	return (
		<div id="profile-container" className="relative w-[375px] h-[265px] p-0 m-0 border-2 border-red-500">
			<div className="polygon absolute bg-neutral-500 top-[28px] left-[28px]"></div>
			<div className="polygon absolute  flex flex-col justify-center align-middle">
				<h2 className="text-white py-2 px-8 z-10 text-3xl">{title}</h2>
				<h3 className="text-white py-2 px-8 z-10 text-xl">{subTitle}</h3>
			</div>

			<div
				id="profile-circle-two"
				className="w-[140px] h-[140px] bg-slate-100 rounded-full absolute left-[230px] top-[120px]"
			></div>
			<div
				id="profile-circle-one"
				className="w-[125px] h-[125px] bg-transparent rounded-full absolute left-[237px] top-[127px] border-[5px] border-gray-700 overflow-hidden"
			>
				<img src={img} alt="profile-photo"></img>
			</div>
		</div>
	)
}
