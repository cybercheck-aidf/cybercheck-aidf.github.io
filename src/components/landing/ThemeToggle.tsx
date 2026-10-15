import {useColorMode} from '@docusaurus/theme-common';

type ThemeChoice = 'system' | 'light' | 'dark';
const choices: readonly ThemeChoice[] = ['system', 'light', 'dark'];
const labels: Record<ThemeChoice, string> = {system: 'System', light: 'Light', dark: 'Dark'};

function ThemeIcon({choice}: {choice: ThemeChoice}) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {choice === 'system' ? <>
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none"/>
      </> : choice === 'light' ? <>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>
      </> : <path d="M20.6 14.1A9 9 0 0 1 9.9 3.4 9 9 0 1 0 20.6 14.1Z"/>}
    </svg>
  );
}

/** One press advances System → Light → Dark → System. */
export default function ThemeToggle() {
  const {colorModeChoice, setColorMode} = useColorMode();
  const choice = colorModeChoice ?? 'system';
  const next = choices[(choices.indexOf(choice) + 1) % choices.length];
  const description = `Theme: ${labels[choice]}. Switch to ${labels[next]} theme`;

  return (
    <div className="cc-theme-control">
      <button type="button" className="cc-theme-trigger"
        aria-label={description} title={description}
        onClick={() => setColorMode(next === 'system' ? null : next)}>
        <ThemeIcon choice={choice}/>
      </button>
      <span className="cc-sr-only" role="status">
        {choice === 'system' ? 'Theme follows your device setting.' : `${labels[choice]} theme selected.`}
      </span>
    </div>
  );
}
