import './App.css';
import Router from './pages/Router';
import CartState from "./Context/CartContext";
import 'notyf/notyf.min.css';

function App() {
  return (
    <>
      <CartState>
        <Router />
      </CartState>
    </>
  );
}

export default App;
