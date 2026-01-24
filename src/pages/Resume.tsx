function ResumePage() {
	return (
		<div id="main-container" className="bg-transparent mt-[150px] overflow-x-hidden max-w-full">
			<div
				id="resume-container"
				className="w-full md:w-[85%] lg:w-[65%] h-[1200px] pt-16 mx-auto px-2 md:px-4 max-w-full pb-4"
			>
				<iframe
					title="resume"
					className="w-full h-full max-w-full"
					src="https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Matthew+Ray+QA+Resume.pdf#zoom=FitH"
					aria-label="resume"
					width="100%"
					height="100%"
				></iframe>
			</div>
		</div>
	)
}

export default ResumePage
