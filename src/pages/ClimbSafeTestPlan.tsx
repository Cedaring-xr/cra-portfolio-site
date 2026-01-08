import React from 'react'

function ClimbSafeTestPlan() {
	const sections = [{ id: 'overview', label: '1. Overview' }]

	const Row = ({ label, children }: any) => (
		<div className="grid gap-2 border-b border-dashed border-slate-700/60 py-3 md:grid-cols-[170px_1fr]">
			<div className="text-xs text-slate-100">{label}</div>
			<div className="text-sm text-slate-100">{children}</div>
		</div>
	)

	const Card = ({ id, title, hint, right, children }: any) => (
		<section id={id} className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-sm">
			<div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
				<h2 className="text-base font-semibold text-slate-50">{title}</h2>
				{right}
			</div>
			{hint ? <p className="mb-3 text-xs text-slate-50">{hint}</p> : null}
			{children}
		</section>
	)

	const Th = ({ children }: any) => (
		<th className="bg-slate-950/40 px-3 py-2 text-left text-xs font-semibold text-slate-100">{children}</th>
	)

	const Td = ({ children }: any) => (
		<td className="border-t border-slate-800 px-3 py-2 align-top text-sm text-slate-100">{children}</td>
	)

	const Table = ({ children }: any) => (
		<div className="mt-2 overflow-x-auto rounded-xl border border-slate-800">
			<table className="w-full border-collapse">{children}</table>
		</div>
	)

	return (
		<div className="min-h-screen text-slate-150 mt-[200px]">
			<h1 className="text-xl md:text-4xl text-slate-900 flex justify-center underline">Test Plan Document</h1>
			<div className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 pt-6 grid-cols-1 lg:grid-cols-[250px_1fr]">
				{/* TOC */}
				<aside className="lg:sticky lg:top-[76px] lg:self-start">
					<nav className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
						<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-50">
							Contents
						</div>
						<div className="space-y-1">
							{sections.map((s) => (
								<a
									key={s.id}
									href={`#${s.id}`}
									className="block rounded-xl border border-transparent px-3 py-2 text-sm text-slate-100 hover:border-sky-400/25 hover:bg-sky-400/10"
								>
									{s.label}
								</a>
							))}
						</div>
					</nav>
				</aside>

				{/* Main */}
				<main className="space-y-4">
					<Card id="overview" title="1. Overview">
						<div className="divide-y divide-dashed divide-slate-900/60">
							<Row label="Status">
								Will define testing strategy once application is developed further.
							</Row>
						</div>
					</Card>
				</main>
			</div>
		</div>
	)
}

export default ClimbSafeTestPlan
