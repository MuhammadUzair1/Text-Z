import React from "react"; 
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; Textz 2021</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <Link className="btn btn-dark btn-social mx-2" to="/#"><i class="fab fa-twitter"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="/#"><i class="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to="/#"><i class="fab fa-linkedin-in"></i></Link>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <Link className="link-dark text-decoration-none me-3" to="/#">Privacy Policy</Link>
                    <Link className="link-dark text-decoration-none" to="/#">Terms of Use</Link>
                </div>
            </div>
        </div>
    </footer>
    )
}

export  default Footer;