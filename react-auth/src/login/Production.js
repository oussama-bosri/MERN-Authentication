import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Ocsp from '../components/Ocsp .js';
import Website from '../components/Website.js';
import Repository from '../components/Repository.js';
import Stgrepository from '../components/StgRepository.js';
import Clock from '../components/Clock.js';
import Footer from '../components/src/Footer.js';
import Navbar from "../components/src/Navbar.js";
import Sidebar from "../components/src/Sidebar.js";
import 'bootstrap/dist/css/bootstrap.css';
const cookies = new Cookies();
// get token generated on login
const token = cookies.get("TOKEN");

export default function Production() {
  // set an initial state for the message we will receive after the API call
  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:3010/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }
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
           <Navbar/>
           <div id="layoutSidenav">
               <Sidebar />
               <main>
            <div className="container-fluid px-4">
              <div className="row">
                <h1 className="my-2"><Clock /></h1>
                <div className="col-sm-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <h5><i className="fas fa-globe me-1"></i>AECE Website Monitor</h5>
                    </div>
                    <Website />
                  </div>

                  <div className="card mb-4">
                    <div className="card-header">
                      <h5><i className="fas fa-globe me-1"></i>AECE Repository Monitor</h5>
                    </div>
                    <Repository />
                    <Stgrepository />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <h5><i className="fas fa-chart-area me-1"></i>AECE OCSP Monitor</h5>
                    </div>
                    <div style={{ overflowY: 'scroll', height: '300px' }}>
                      <Ocsp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>            
                       
                </div>
                <Footer/>
        </body> 
    </html>
  );
}
