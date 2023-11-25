import React from 'react'

interface ProfileProps {
	title: string
	subTitle: string
	img: string
}

const Profile: React.FC<ProfileProps> = ({ title, subTitle, img }) => {
	return (
		<div
			id="profile-container"
			className="relative w-[375px] h-[265px] lg:w-[750px] lg:h-[530px] p-0 ml-0 md:ml-12 md:m-12"
		>
			<div className="polygon lg:polygon-large absolute bg-neutral-600 top-[28px] left-[28px]"></div>
			<div className="polygon lg:polygon-large absolute bg-stone-900 flex flex-col justify-center align-middle">
				<h2 className="text-white py-2 px-6 z-10 text-3xl lg:text-4xl lg:ml-16">{title}</h2>
				<h3 className="text-white py-2 px-6 z-10 text-xl lg:w-[350px] lg:ml-16">{subTitle}</h3>
			</div>

			<div
				id="profile-circle-two"
				className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] bg-slate-100 rounded-full absolute left-[230px] top-[120px] lg:left-[380px] lg:top-[200px]"
			></div>
			<div
				id="profile-circle-one"
				className="w-[125px] h-[125px] lg:w-[180px] lg:h-[180px] bg-transparent rounded-full absolute left-[237px] top-[127px] lg:left-[390px] lg:top-[210px] border-[5px] border-stone-900 overflow-hidden"
			>
				<img src={img} alt="profile"></img>
			</div>
		</div>
	)
}

export default Profile
