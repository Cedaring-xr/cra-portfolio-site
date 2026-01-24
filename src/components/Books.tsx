import React from 'react'

type Book = {
	title: string
	category: string
	image: string
}

const booksData: Book[] = [
	{
		title: 'Learn React with TypeScript',
		category: 'Frontend',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/ReactTypeScript.jpg'
	},
	{
		title: 'SQL Queries for Mere Mortals',
		category: 'Database',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/SQL.jpg'
	},
	{
		title: 'Web Performance Fundamentals',
		category: 'Performance',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/WebPerformance.jpg'
	},
	{
		title: 'REST API Development with Node.js',
		category: 'Backend',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/NodeAPI.jpg'
	},
	{
		title: 'SCRUM The Art of Doing Twice the Work in Half the Time',
		category: 'Agile',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Scrum.jpg'
	},
	{
		title: 'Lessons Learned in Software Testing',
		category: 'Testing',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/softwareLessons.jpg'
	},
	{
		title: 'Think Like a Programmer',
		category: 'General',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/ProgrammerThink.jpg'
	},
	{
		title: 'JavaScript Patterns',
		category: 'Frontend',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/JavaScriptPatterns.jpg'
	},
	{
		title: 'JavaScript the Good Parts',
		category: 'Frontend',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/JavaScriptGoodParts.jpg'
	},
	{
		title: 'Penetration Testing A Hands-on Introduction to Hacking',
		category: 'Security',
		image: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/PenTesting.jpg'
	}
]

function Books() {
	return (
		<div className="bg-zinc-900 pt-12 pb-12">
			<div className="border-b-2 border-amber-600 relative w-3/4 mx-auto">
				<h3 className="text-amber-600 w-[200px] bg-zinc-900 text-2xl -mb-4 text-center top-20 mx-auto sans-font">
					Books
				</h3>
			</div>
			<div className="max-w-[1200px] mx-auto px-4 pt-12">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{booksData.map((book) => (
						<div key={book.title} className="flex flex-col bg-neutral-800 p-3 rounded-lg shadow-lg">
							<img
								src={book.image}
								alt={book.title}
								className="w-full h-[220px] object-contain rounded-md mb-3 bg-neutral-900"
							/>
							<div className="flex flex-col gap-1">
								<h4 className="text-white font-semibold text-sm leading-tight">{book.title}</h4>
								<span className="text-amber-600 text-xs">{book.category}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Books
