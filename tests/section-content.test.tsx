import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionContent from '../src/components/SectionContent';

describe('shared section content', () => {
  it('renders sourced About copy and profile links', () => {
    render(<SectionContent id="about" />);
    expect(screen.getByText(/I am a Computer Science Graduate, Passionate about Building Modern/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/jediah-dsouza');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/jediah-dsouza');
  });
});

describe('timeline sections', () => {
  it('renders documented experience and its confirmation note', () => {
    render(<SectionContent id="experience" />);
    expect(screen.getByRole('heading', { name: 'Machine Learning Intern' })).toBeInTheDocument();
    expect(screen.getByText(/Neurofive Solutions/)).toBeInTheDocument();
    expect(screen.getByText(/need confirmation before publication/)).toBeInTheDocument();
  });
  it('renders all three education entries', () => {
    render(<SectionContent id="education" headingLevel={4} />);
    expect(screen.getByRole('heading', { name: 'Iqra University', level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: "St. Patrick's College", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: "St. Paul's English High School", level: 4 })).toBeInTheDocument();
  });
});

describe('skills and projects', () => {
  it('groups skills without invented proficiency ratings', () => {
    render(<SectionContent id="skills" />);
    expect(screen.getByRole('heading', { name: 'Frontend development' })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText(/expert|proficiency|\d+%/i)).not.toBeInTheDocument();
  });
  it('preserves project caveats and verified repository destinations', () => {
    render(<SectionContent id="projects" />);
    expect(screen.getByRole('heading', { name: 'SignalCV' })).toBeInTheDocument();
    expect(screen.getByText(/deterministic mock services/)).toBeInTheDocument();
    expect(screen.getByText(/selected workflows use demo fixtures/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Daymark repository/ })).toHaveAttribute('href', 'https://github.com/jediah-dsouza/Daymark');
  });
});

describe('contact', () => {
  it('uses the profile email and social destinations', () => {
    render(<SectionContent id="contact" />);
    expect(screen.getByRole('link', { name: 'jediahdsouza4@gmail.com' })).toHaveAttribute('href', 'mailto:jediahdsouza4@gmail.com');
    expect(screen.getByRole('link', { name: 'github.com/jediah-dsouza' })).toHaveAttribute('href', 'https://github.com/jediah-dsouza');
    expect(screen.getByRole('link', { name: 'linkedin.com/in/jediah-dsouza' })).toHaveAttribute('href', 'https://www.linkedin.com/in/jediah-dsouza');
  });
});
