import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import CartProvider from './context/CartProvider';
import { ToasterProvider } from './components/Toaster';  // Import ToasterProvider

function App() {
    return (
        <Router>
            <CartProvider>
                <ToasterProvider> 
                    <div className="App">
                        <Header />
                        <Routes>
                            <Route path="/" element={<><Hero /><Products /></>} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                        <Footer />
                    </div>
                </ToasterProvider>
            </CartProvider>
        </Router>
    );
}

export default App;
