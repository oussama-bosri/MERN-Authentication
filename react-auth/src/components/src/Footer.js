
import React, {Component} from 'react';

class Footer  extends Component {

  render() {
    return (
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
    );
  }
  
}

export default Footer ;
