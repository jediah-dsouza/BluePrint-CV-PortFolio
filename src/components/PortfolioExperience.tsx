'use client';

import { Component, useEffect, useRef, useState, type ErrorInfo, type ReactNode } from 'react';
import { isSectionId, profile, sections, type SectionId } from '@/content/portfolio';
import SectionContent from '@/components/SectionContent';

type Select = (id: SectionId, source?: HTMLElement) => void;

function Scene({ active, onSelect, zoom, pan }: { active: SectionId | null; onSelect: Select; zoom: number; pan: { x: number; y: number } }) {
  return <div className="blueprint-frame" aria-label="Interactive architectural blueprint">
    <div className={`plan-position ${active ? 'plan-focused' : ''}`} style={{ '--zoom': zoom, '--pan-x': `${pan.x}px`, '--pan-y': `${pan.y}px` } as React.CSSProperties}>
      <div className="plan" data-active={active ?? 'overview'}>
        <div className="plan-inner" aria-hidden="true"><div className="browser-chrome"><span>● ○ ○</span><span className="browser-address">PORTFOLIO / BLUEPRINT</span><span>— &nbsp; — &nbsp; —</span></div></div>
        <div className="dimension dimension-x" aria-hidden="true">PORTFOLIO / 900</div><div className="dimension dimension-y" aria-hidden="true">600 / PLAN</div>
        {sections.map((section) => <button className={`region region-${section.id}`} key={section.id} type="button" aria-label={`Open ${section.label} sheet`} aria-pressed={active === section.id} onClick={(event) => onSelect(section.id, event.currentTarget)}>
          <span className="slab"><span className="region-label">{section.label}</span>
          <span className="wire-art" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <span className="hologram" aria-hidden="true"><b>{section.label}</b><small>OPEN INFORMATION SHEET</small></span></span>
        </button>)}
      </div>
    </div>
  </div>;
}
class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Blueprint scene failed', error, info.componentStack); }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

export default function PortfolioExperience({ children }: { children?: ReactNode }) {
  const [active, setActive] = useState<SectionId | null>(null);
  const activeRef = useRef<SectionId | null>(null);
  activeRef.current = active;
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [simple, setSimple] = useState(false);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('js');
    if (!window.CSS?.supports?.('transform-style', 'preserve-3d')) setFailed(true);
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduced(!!mq?.matches);
    syncMotion(); mq?.addEventListener?.('change', syncMotion);
    const syncHash = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setClosing(false); const id = window.location.hash.slice(1); const next = isSectionId(id) ? id : null; if (activeRef.current && !next) requestAnimationFrame(restoreFocus); setActive(next); };
    syncHash(); window.addEventListener('popstate', syncHash); window.addEventListener('hashchange', syncHash);
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); mq?.removeEventListener?.('change', syncMotion); window.removeEventListener('popstate', syncHash); window.removeEventListener('hashchange', syncHash); };
  }, []);
  useEffect(() => {
    if (!active) return;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
      closeRef.current?.focus();
    }
  }, [active]);
  useEffect(() => {
    if (!active) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trap = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        if ((event.target as HTMLElement).matches('input, textarea, select')) return;
        event.preventDefault(); navigate(event.key === 'ArrowRight' ? 1 : -1); return;
      }
      if (event.key !== 'Tab') return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]')).filter(el => el.getClientRects().length > 0);
      if (!items.length) { event.preventDefault(); return; }
      const index = items.indexOf(document.activeElement as HTMLElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); items[items.length - 1].focus(); }
      else if (!event.shiftKey && (index < 0 || index === items.length - 1)) { event.preventDefault(); items[0].focus(); }
    };
    dialog.addEventListener('keydown', trap); return () => dialog.removeEventListener('keydown', trap);
  });
  function select(id: SectionId, source?: HTMLElement) {
    if (!active && source) triggerRef.current = source;
    if (closeTimer.current) clearTimeout(closeTimer.current); setClosing(false);
    setActive(id);
    if (window.location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  }
  function navigate(delta: number) {
    const index = sections.findIndex(section => section.id === active);
    select(sections[(index + delta + sections.length) % sections.length].id);
    dialogRef.current?.querySelector('.sheet-content')?.scrollTo(0, 0);
  }
  function restoreFocus() { const trigger = triggerRef.current; if (trigger?.isConnected && trigger.getClientRects().length) trigger.focus(); else document.querySelector<HTMLElement>('.text-link')?.focus(); }
  function close() {
    if (closing) return;
    setClosing(true);
    const finish = () => { setActive(null); setClosing(false); history.pushState(null, '', `${location.pathname}${location.search}`); requestAnimationFrame(restoreFocus); };
    if (reduced) finish(); else closeTimer.current = setTimeout(finish, 220);
  }
  const selected = sections.find(section => section.id === active);
  const controls = (className: string) => <nav className={className} aria-label="Choose a section">{sections.map(section => <button key={section.id} type="button" aria-pressed={active === section.id} onClick={e => select(section.id, e.currentTarget)}><span>{section.index}</span><span>{section.label}</span></button>)}</nav>;
  const fallback = <div className="fallback"><p>The spatial plan is unavailable or simplified. Choose a section:</p>{controls('fallback-controls')}</div>;
  return <>
    <a className="skip-link" href="#document-title">Skip to text profile</a>
    <main id="main">
      <div className="stage">
        <div className="loading-state" role="status"><span aria-hidden="true" />Preparing blueprint…</div><noscript><style>{`.loading-state{display:none!important}`}</style></noscript>
        <header className="hero"><h1>{profile.name}</h1><p className="role">&gt; {profile.role}<span className="cursor" aria-hidden="true">_</span></p><noscript><nav className="no-js-nav" aria-label="Profile sections">{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</nav></noscript></header>
        <p className="legend"><span aria-hidden="true">●</span> HOVER A ZONE — IT RISES<br />&nbsp;&nbsp; CLICK TO OPEN THAT SHEET</p>
        <div className="scene-area" onPointerDown={e => { if (reduced || e.pointerType === 'mouse' || (e.target as Element).closest('button')) return; drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y }; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if (!drag.current || reduced) return; setPan({ x: Math.max(-150, Math.min(150, drag.current.px + e.clientX - drag.current.x)), y: Math.max(-150, Math.min(150, drag.current.py + e.clientY - drag.current.y)) }); }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>
          {simple || failed ? fallback : <SceneBoundary fallback={fallback}><Scene active={active} onSelect={select} zoom={reduced ? 1 : zoom} pan={reduced ? { x: 0, y: 0 } : pan} /></SceneBoundary>}
        </div>
        <div className="utility"><a className="text-link" href="#document-title">Text profile ↓</a><button type="button" onClick={() => setSimple(!simple)} aria-pressed={simple}>{simple ? 'Show spatial plan' : 'Simplified plan'}</button></div>
        <div className="touch-tools" aria-label="Plan controls"><div className="zoom-tools"><label htmlFor="zoom">Zoom {zoom.toFixed(1)}×</label><input id="zoom" type="range" min="1" max="2" step="0.1" value={zoom} disabled={reduced} onChange={e => setZoom(Number(e.target.value))} /><button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} disabled={reduced}>Reset</button></div><div className="pan-tools" role="group" aria-label="Pan plan"><button aria-label="Pan up" disabled={reduced} onClick={() => setPan(p => ({ ...p, y: Math.max(-150, p.y - 30) }))}>↑</button><div><button aria-label="Pan left" disabled={reduced} onClick={() => setPan(p => ({ ...p, x: Math.max(-150, p.x - 30) }))}>←</button><button aria-label="Pan right" disabled={reduced} onClick={() => setPan(p => ({ ...p, x: Math.min(150, p.x + 30) }))}>→</button></div><button aria-label="Pan down" disabled={reduced} onClick={() => setPan(p => ({ ...p, y: Math.min(150, p.y + 30) }))}>↓</button></div></div>
        {controls('mobile-controls')}
      </div>
      {children}
    </main>
    {selected && <dialog className={`sheet ${closing ? 'is-closing' : ''}`} ref={dialogRef} aria-labelledby="sheet-title" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="sheet-heading"><h2 id="sheet-title"><span aria-hidden="true">●</span> {selected.label}</h2><button ref={closeRef} onClick={close}>← Back to plan</button></div>
      <div className="sheet-content" key={selected.id} tabIndex={0} role="region" aria-label={`${selected.label} content`}><SectionContent id={selected.id} /></div>
      <div className="sheet-footer"><button onClick={() => navigate(-1)}>← Previous</button><span>SHEET {selected.index} OF 06</span><button onClick={() => navigate(1)}>Next →</button></div>
    </dialog>}
  </>;
}
