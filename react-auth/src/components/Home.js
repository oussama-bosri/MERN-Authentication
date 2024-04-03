import React, { Component } from 'react';
import Cookies from "universal-cookie";
import Ocsp from './Ocsp ';
import Website from './Website';
import Repository from './Repository';
import Stgrepository from './StgRepository';
import Clock from './Clock';
import logo from '../logo-arpce-vector.svg';
import { Button } from 'react-bootstrap';
const cookies = new Cookies();
class Home extends Component {
    logout() {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        // redirect user to the landing page
        window.location.href = "/";
   }
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>AECE Monitor</title>
                    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
                    <link href="css/styles.css" rel="stylesheet" />
                    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
                </head>
                <body class="sb-nav-fixed">
                    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-activity" viewBox="0 0 16 16">
                         <path fill-rule="evenodd"  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                       </svg>
                        <a class="navbar-brand ps-3" href="/">
                            AECE Monitor
                        </a>
                        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
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
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                                <div class="sb-sidenav-menu">
                                    <div class="nav">
                                        <div class="sb-sidenav-menu-heading">Core</div>
                                        <a class="nav-link" href="index.html">
                                            <div class="sb-nav-link-icon"><Clock/></div>
                                        </a>
                                        
                                        <a class="nav-link collapsed" tabIndex="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                            Authentication
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                                <a class="nav-link collapsed" tabIndex="/" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                    Authentication
                                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                </a>
                                                <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                    <nav class="sb-sidenav-menu-nested nav">
                                                        <a class="nav-link" href="/login">Login</a>
                                                        <a class="nav-link" href="register.html">Register</a>
                                                    </nav>
                                                </div>
                                            </nav>
                                        </div>
                                        <a class="nav-link" href="/stg">
                                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                            STAGING
                                        </a>
                                        <a class="nav-link" href="/statistics">
                                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                            OCSP 
                                        </a>
                                    </div>
                                </div>
                                <div class="sb-sidenav-footer">
                                    <div class="small">Logged in as:</div>
                                    AECE Monitor
                                </div>
                            </nav>
                        </div>
                        <div id="layoutSidenav_content">
                            <main>
                                
                                <div class="container-fluid px-4">
                                    <div class="container-fluid">
                                      <div class="row">
                                      <h1 class="my-2"><Clock/></h1>
                                        <div class="col-sm-6">
                                                 {/* AECE Website Monitor */}
                                                <div class="card mb-4">
                                                    <div class="card-header">
                                                       <h5><i class="fa-solid fa-globe"></i> AECE Website Monitor</h5> 
                                                    </div>  <i class="bi bi-globe"></i>
                                                    <Website/>
                                            </div>
                                            {/*  */}
                                            {/* AECE CRL Checker */}
                                     
                                                <div class="card mb-4">
                                                    <div class="card-header">
                                                        <h5><i class="fa-solid fa-globe"></i> AECE Repository Monitor</h5>
                                                    </div>
                                                    <Repository/>
                                                    
                                                </div>
                                          
                                            {/*  */}
                                        </div>
                                        <div class="col-sm-6">
                                        <div class="card-header">
                                          <h5><i class="fas fa-chart-area me-1"></i>AECE OCSP Monitor</h5>

                                          </div>
                                          <div style={{ overflowY: 'scroll', height: '300px' }}>
                                            <Ocsp/>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                            </div>
                            </main>
                            <footer class="py-4 bg-dark mt-auto footer">
                                <div class="container-fluid px-4">
                                    <div class="d-flex align-items-center justify-content-between small">
                                        <div class="text-white">Copyright &copy; AECE 2023</div>
                                        <div>
                                            <a tabIndex="#" class="text-white">Privacy Policy</a>
                                            &middot;
                                            <a tabIndex="#" class="text-white">Terms &amp; Conditions</a>
                                        </div>
                                    </div>
                                </div>
                            </footer>


                        </div>
                    </div>
                </body>
               
            </html>
)
    }
}
export default Home;