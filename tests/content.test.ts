import { describe, expect, it } from 'vitest';
import { isSectionId, sections } from '../src/content/portfolio';
describe('section identifiers', () => {
  it('has six unique section IDs', () => { expect(sections).toHaveLength(6); expect(new Set(sections.map((s) => s.id)).size).toBe(6); });
  it('accepts known IDs and rejects unknown IDs', () => { expect(isSectionId('about')).toBe(true); expect(isSectionId('unknown')).toBe(false); });
});

import { contact, experience, projects, validatePortfolio, isSafeExternalUrl } from '../src/content/portfolio';
describe('source-backed portfolio data', () => {
  it('has valid required records and safe destinations', () => { expect(validatePortfolio()).toEqual([]); expect(isSafeExternalUrl('javascript:alert(1)')).toBe(false); expect(isSafeExternalUrl('https://user:pass@example.com')).toBe(false); });
  it('preserves project limitations and profile-based experience', () => { expect(projects.find(p => p.name === 'SignalCV')?.note).toMatch(/mock/); expect(projects.find(p => p.name === 'ChurnGuard')?.note).toMatch(/fixtures/); expect(experience).toHaveLength(2); expect(contact.find(c => c.label === 'Email')?.href).toMatch(/^mailto:/); });
});
