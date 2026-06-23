'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterSignupSection: React.FC = () => {
	return (
		<motion.section
			id="newsletter"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20 rounded-lg border border-cursor-border bg-cursor-surface/40 px-6 py-12 md:py-14 noise-bg-philly"
		>
			<div className="max-w-2xl mx-auto text-center">
				<div
					className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-philly-cta/15 border border-philly-cta/30"
					aria-hidden
				>
					<Mail className="w-7 h-7 text-philly-cta" />
				</div>
				<h2 className="text-2xl md:text-3xl font-bold text-cursor-text mb-4">Stay updated</h2>
				<p className="text-base md:text-lg text-cursor-text-muted mb-6 max-w-md mx-auto leading-relaxed">
					Get notified about upcoming events, speaker announcements, and community recaps with key takeaways.
				</p>
				<div className="flex flex-col items-center gap-2">
					<a
						href="https://substack.com/@cursorphilly"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-philly-cta text-white text-sm font-medium hover:bg-philly-cta-hover transition-colors"
					>
						Subscribe on Substack
						<ArrowRight className="w-4 h-4" />
					</a>
					<span className="text-xs text-cursor-text-muted">via Substack</span>
				</div>
			</div>
		</motion.section>
	);
};

export default NewsletterSignupSection;
