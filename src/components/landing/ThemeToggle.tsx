import {useColorMode} from '@docusaurus/theme-common';

/** No explicit choice follows the OS; manual choices persist across visits. */
export default function ThemeToggle() {
  const {colorModeChoice, setColorMode} = useColorMode();

  return (
    <label className="cc-theme-control">
      <span className="cc-sr-only">Theme preference</span>
      <select
        className="cc-theme-select"
        value={colorModeChoice ?? 'system'}
        onChange={(event) => {
          const choice = event.target.value;
          setColorMode(choice === 'system' ? null : choice === 'dark' ? 'dark' : 'light');
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
