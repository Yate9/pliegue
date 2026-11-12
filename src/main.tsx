declare const ReactDOM: typeof import('react-dom/client');

function App() {
  return <main><h1>Pliegue</h1><p>Librería independiente de narrativa, poesía y ensayo.</p></main>;
}

function mount() {
  const container = document.getElementById('root');
  if (container) {
    ReactDOM.createRoot(container).render(<App />);
  }
}

if (document.readyState === 'complete') {
  mount();
} else {
  window.addEventListener('load', mount, { once: true });
}

export {};
