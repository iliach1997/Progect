import { useCart } from '../../providers/cartProvider';
import {NavLink, Link} from 'react-router-dom'
export const Header=()=>{

  const {cart,}=useCart();

    return(
     <header className='bo'>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ShoppingCart">CART TOTAL🤑:<span>{cart.total}</span></Link>
        </li>
      
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     </header>
    )
}