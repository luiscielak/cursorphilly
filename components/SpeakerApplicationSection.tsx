'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Check, ArrowRight } from 'lucide-react';

const topics = [
	'Cursor workflows and best practices',
	'Integration with other tools (MCPs, APIs, etc.)',
	'Real-world projects built with Cursor',
	'Tips for teams using Cursor',
	'Creative and unexpected use cases',
];

const SpeakerApplicationSection: React.FC = () => {
	return (
		<motion.section
			id="speak"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<div className="max-w-2xl mx-auto">
				<div className="text-center mb-8">
					<div
						className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-philly-cta/15 border border-philly-cta/30"
						aria-hidden
					>
						<Mic className="w-7 h-7 text-philly-cta" />
					</div>
					<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-4">Interested in speaking?</h2>
					<p className="text-base md:text-lg text-cursor-text-muted leading-relaxed">
						We&apos;re always looking for community members to share their Cursor experiences, tips, and
						projects. Whether you&apos;re a beginner or expert, all perspectives are welcome.
					</p>
				</div>

				<div className="border border-cursor-border rounded-lg p-6 md:p-8 bg-cursor-bg-dark">
					<h3 className="text-lg font-semibold text-cursor-text mb-5">What we&apos;re looking for</h3>
					<ul className="space-y-3 mb-6">
						{topics.map((topic) => (
							<li key={topic} className="flex items-start gap-3">
								<div className="p-1 rounded-full bg-philly-cta/20 border border-philly-cta/30 mt-0.5 shrink-0">
									<Check className="w-3.5 h-3.5 text-philly-cta" />
								</div>
								<span className="text-cursor-text-secondary text-sm md:text-base">{topic}</span>
							</li>
						))}
					</ul>
					<div className="text-sm text-cursor-text-muted mb-6 p-4 rounded-lg border border-cursor-border bg-cursor-surface/30 space-y-2">
						<p>Talks are typically 10–15 minutes plus brief Q&A.</p>
						<p className="text-philly-cta font-medium">First-time speakers welcome.</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<a
							href="https://airtable.com/apprurx4zp32qn1nS/pagtDHZ13ksL44O6C/form"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-philly-cta text-white text-sm font-medium hover:bg-philly-cta-hover transition-colors"
						>
							Apply to speak
							<ArrowRight className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default SpeakerApplicationSection;
