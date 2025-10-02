import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blockchain from './pages/Blockchain';
import Login from './pages/Login';
import FormDemo from './pages/FormDemo';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/form-demo" element={<FormDemo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </AuthProvider>
  );
}
