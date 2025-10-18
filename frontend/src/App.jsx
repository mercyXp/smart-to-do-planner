import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppRoutes from '@/routes/AppRoutes';

function App(){
   return (
    <>
    <Router>
      <Header/>
      <AppRoutes /> 
      <Footer/>
    </Router>
    </>
  );
}
export default App;