import {useEffect, useRef, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

type ThemeChoice = 'system' | 'light' | 'dark';
const choices: ThemeChoice[] = ['system', 'light', 'dark'];

function ThemeIcon({choice}: {choice: ThemeChoice}) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {choice === 'system' ? <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>
        : choice === 'light' ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></>
        : <path d="M20.6 14.1A9 9 0 0 1 9.9 3.4 9 9 0 1 0 20.6 14.1Z"/>}
    </svg>
  );
}

/** Compact icon trigger; all three explicit preferences remain available. */
export default function ThemeToggle() {
  const {colorModeChoice, setColorMode} = useColorMode();
  const choice = colorModeChoice ?? 'system';
  const [open, setOpen] = useState(false);
  const control = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!control.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  return (
    <div className="cc-theme-control" ref={control} onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        setOpen(false);
        trigger.current?.focus();
      }
    }}>
      <button ref={trigger} type="button" className="cc-theme-trigger"
        aria-label={`Theme preference: ${choice}`} title={`Theme: ${choice}`}
        aria-expanded={open} aria-controls="cc-theme-options"
        onClick={() => setOpen(!open)}>
        <ThemeIcon choice={choice}/>
      </button>
      <div id="cc-theme-options" className="cc-theme-options" role="group"
        aria-label="Theme options" hidden={!open}>
        {choices.map((item) => (
          <button key={item} type="button" aria-pressed={choice === item}
            onClick={() => {
              setColorMode(item === 'system' ? null : item);
              setOpen(false);
              trigger.current?.focus();
            }}>
            <ThemeIcon choice={item}/>
            <span>{item === 'system' ? 'System' : item === 'light' ? 'Light' : 'Dark'}</span>
            <span className="cc-theme-check" aria-hidden="true">{choice === item ? '✓' : ''}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
