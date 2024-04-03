
import React, {Component} from 'react';
import Cookies from "universal-cookie";
import logo from '../../logo-arpce-vector.svg';
import { Button } from "react-bootstrap";
const cookies = new Cookies();
// get token generated on login
const token = cookies.get("TOKEN");
class Navbar  extends Component {
    logout() {
           // destroy the cookie
           cookies.remove("TOKEN", { path: "/" });
           // redirect user to the landing page
           window.location.href = "/";
      }
  render() {
    return (
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

            <a class="navbar-brand ps-3" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
            </svg>
                AECE Monitor
                
                </a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="/ "><i class="fas fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
              
            <div >
                <img src={logo} alt="Logo" className="logo" />
            </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" tabIndex="/ " role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/">Settings</a></li>
                        <li><a class="dropdown-item" href="/">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
              <li>
                <Button type="submit" variant="danger" onClick={this.logout}>
                  Logout
                </Button>
              </li>
            </ul>
                </li>
            </ul>
        </nav>
    );
  }
  
}

export default Navbar ;
