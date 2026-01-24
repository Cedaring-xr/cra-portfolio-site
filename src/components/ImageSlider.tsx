import React, { useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'
import { GoDot } from 'react-icons/go'
import { GoDotFill } from 'react-icons/go'

interface PictureProps {
	pictures: {
		url: string
		description: string
		alt: string
	}[]
}

const ImageSlider: React.FC<PictureProps> = ({ pictures }) => {
	const [imageIndex, setImageIndex] = useState(0)

	const prevImage = () => {
		setImageIndex((index) => {
			if (index === 0) {
				return pictures.length - 1
			}
			return index - 1
		})
	}

	const nextImage = () => {
		setImageIndex((index) => {
			if (index === pictures.length - 1) {
				return 0
			}
			return index + 1
		})
	}
	return (
		<div
			id="carousel-container"
			className="w-[350px] h-[300px] overflow-hidden border-[1px] border-stone-900 relative"
		>
			<div className="relative flex h-full">
				{pictures.map((image, index) => (
					<img
						key={image.url}
						src={image.url}
						className="object-cover w-[350px] h-[300px] flex-shrink-0 transition-transform duration-300"
						style={{ transform: `translateX(${-100 * imageIndex}%)` }}
						alt={image.alt}
					/>
				))}
			</div>
			<button
				aria-label="view previous"
				className="hover:bg-slate-700 focus-visible:bg-slate-700 opacity-70 w-[35px] h-[300px] cursor-pointer absolute top-0 left-0 flex justify-start items-center transition-all ease-in-out duration-200 group z-10"
				onClick={() => prevImage()}
			>
				<FaChevronCircleLeft className="text-3xl text-neutral-700 group-hover:text-slate-100 group-focus-visible:text-slate-100 ml-1 transition-all ease-in-out duration-200" />
			</button>
			<button
				aria-label="view-next"
				className="hover:bg-slate-700 focus-visible:bg-slate-700 opacity-70 h-[300px] w-[35px] absolute top-0 right-0 flex justify-end items-center transition-all ease-in-out duration-200 group z-10"
				onClick={() => nextImage()}
			>
				<FaChevronCircleRight className="text-3xl text-neutral-700 group-hover:text-slate-100 group-focus-visible:text-slate-100 mr-1 transition-all ease-in-out duration-200" />
			</button>
			<div
				id="image-button-container"
				className="absolute flex left-1/2 transform -translate-x-1/2 top-[280px] z-20 py-[1px] px-2 bg-slate-900 rounded-t-xl opacity-90"
			>
				{pictures.map((_, index) => (
					<button
						key={index}
						aria-label={`view image ${index}`}
						onClick={() => setImageIndex(index)}
						className="text-white"
					>
						{index === imageIndex ? <GoDotFill /> : <GoDot />}
					</button>
				))}
			</div>
		</div>
	)
}

export default ImageSlider
