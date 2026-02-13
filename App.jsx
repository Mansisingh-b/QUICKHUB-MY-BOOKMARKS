import { useState } from 'react';
import { Layout } from './layouts/Layout';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('academic');

  return (
    <ThemeProvider>
      <Layout activeCategory={activeCategory} onSelectCategory={setActiveCategory}>
        <Dashboard activeCategory={activeCategory} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
