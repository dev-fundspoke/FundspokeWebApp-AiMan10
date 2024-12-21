import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { NewCompany } from './pages/NewCompany';
import { ThemeProvider } from './context/ThemeContext';
import { ConfigProvider } from 'antd';
import { useThemeContext } from './context/ThemeContext';
import { getAntdTheme } from './config/theme.config';
import { ErrorBoundary } from './hooks/useErrorBoundary';
import { ErrorFallback } from './components/common/ErrorFallback';
import ThemedMessage from './components/common/ThemedMessage';
import './index.css';

const AppContent: React.FC = () => {
  const { theme } = useThemeContext();
  
  return (
    <ConfigProvider theme={getAntdTheme(theme === 'dark')}>
      <ThemedMessage>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new-company" element={<NewCompany />} />
              <Route path="/new-company/confirmation" element={<div>Confirmation Page</div>} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemedMessage>
    </ConfigProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;