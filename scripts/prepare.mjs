import { cp, mkdir } from 'node:fs/promises';

const project = new URL('../', import.meta.url);
const copy = (from, to) => cp(new URL(from, project), new URL(to, project), { recursive: true });

await mkdir(new URL('dist/vendor/', project), { recursive: true });
await Promise.all([
  copy('public/', 'dist/'),
  copy('node_modules/react/umd/react.production.min.js', 'dist/vendor/react.js'),
  copy('node_modules/react-dom/umd/react-dom.production.min.js', 'dist/vendor/react-dom.js'),
  copy('node_modules/react/LICENSE', 'dist/vendor/LICENSE-react'),
  copy('node_modules/react-dom/LICENSE', 'dist/vendor/LICENSE-react-dom'),
]);
