import { recap20260129 } from '@/content/recaps/2026-01-29';
import { recap20260224 } from '@/content/recaps/2026-02-24';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[recap20260129.slug]: recap20260129,
	[recap20260224.slug]: recap20260224,
};
