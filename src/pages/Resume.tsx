function ResumePage() {
	return (
		<div id="main-container" className="bg-transparent mt-[150px] overflow-hidden">
			<div id="resume-container" className="md:w-[85%] lg:w-[65%] h-[1200px] pt-16 mx-auto">
				<iframe
					title="resume"
					className="scale-[65%] md:scale-[80%] lg:scale-100 w-[140%] md:w-[130%] lg:w-full relative -left-32 md:mx-auto lg:left-0"
					src="https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Matthew+Ray+QA+Resume.pdf"
					aria-label="resume"
					width="100%"
					height="100%"
				></iframe>
			</div>
		</div>
	)
}

export default ResumePage
