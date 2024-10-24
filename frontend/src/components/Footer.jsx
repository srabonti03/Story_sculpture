import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const whatsappNumber = "01724394274";
  const facebookUsername = "srabonti.talukdar03";
  const instagramUsername = "s_r_a_b_o_n_t_ii";

  // Message to share on WhatsApp
  const message = encodeURIComponent("Hello! We are delighted to introduce you to Story Sculptures, a renowned bookstore known for its exceptional selection of literature across various genres. Our carefully curated collection features both classic and contemporary works that cater to every book lover's taste. If you're interested in exploring our offerings or have any inquiries, please don't hesitate to reach out. We look forward to serving you!");

  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded-lg shadow-md p-10 mt-10">
        {/* Horizontal Rule */}
        <hr className="border-gray-300 mb-4" />

        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover text-lg font-bold hover:text-primary transition duration-200">About Our Bookstore</Link>
          <Link to="/newarrivals" className="link link-hover text-lg font-bold hover:text-primary transition duration-200">New Arrivals</Link>
          <Link to="/bestseller" className="link link-hover text-lg font-bold hover:text-primary transition duration-200">Best Sellers</Link>
          <Link to="/events" className="link link-hover text-lg font-bold hover:text-primary transition duration-200">Events</Link>
        </nav>

        {/* Social Media Icons */}
        <nav>
          <div className="grid grid-flow-col gap-6 mt-4">
            {/* WhatsApp Icon */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              aria-label="WhatsApp"
              className="hover:text-green-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer">
              {/* WhatsApp SVG icon */}
              <svg fill="#000000" height="24px" width="24px" viewBox="0 0 308 308" className="fill-current h-6 w-6">
                <g>
                  <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458C233.168,179.508,230.845,178.393,227.904,176.981z" />
                  <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867C276.546,215.678,222.799,268.994,156.734,268.994z" />
                </g>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href={`https://www.instagram.com/${instagramUsername}/`}
              aria-label="Instagram"
              className="hover:text-pink-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer">
              {/* Instagram SVG icon */}
              <svg fill="#000000" height="24px" width="24px" viewBox="-30 -30 360.00 360.00" className="fill-current h-6 w-6">
                <g>
                  <path d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.784,3.86,25.609c0,52.645-43.134,95.748-95.748,95.748s-95.748-43.134-95.748-95.748c0-8.825,1.357-17.434,3.86-25.609h-26.396c-6.903,0-12.455,5.548-12.455,12.476c0,62.064,50.579,112.641,112.641,112.641c62.079,0,112.65-50.577,112.65-112.641C278.537,132.416,272.984,126.868,266.084,126.868z M123.626,168.681c-17.103,0-31.181-14.082-31.181-31.181s14.078-31.181,31.181-31.181s31.181,14.082,31.181,31.181C154.807,154.599,140.729,168.681,123.626,168.681z M218.546,272.731c0,7.437-6.067,13.514-13.505,13.514h-33.903c-7.438,0-13.505-6.077-13.505-13.514v-32.314c0-7.434,6.067-13.525,13.505-13.525h33.903c7.438,0,13.505,6.091,13.505,13.525V272.731z M242.234,208.087v38.992c0,7.433-6.067,13.514-13.505,13.514h-222.97c-7.437,0-13.505-6.077-13.505-13.514v-38.992c0-7.434,6.067-13.525,13.505-13.525h222.97c7.438,0,13.505,6.091,13.505,13.525z" />
                </g>
              </svg>
            </a>

            {/* Facebook Icon */}
            <a
              href={`https://www.facebook.com/${facebookUsername}/`}
              aria-label="Facebook"
              className="hover:text-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer">
              {/* Facebook SVG icon */}
              <svg fill="#000000" height="24px" width="24px" viewBox="0 0 24 24" className="fill-current h-6 w-6">
                <g>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 5.24 3.86 9.57 8.83 10.12v-7.14H9.65v-2.98h1.18V10.1c0-1.16.33-1.95 1.02-2.56c.59-.53 1.34-.79 2.24-.79c1.31 0 2.02.1 2.37.14v2.74h-1.26c-1.11 0-1.48.55-1.48 1.44v1.89h2.59l-.33 2.98h-2.26V22C18.14 21.57 22 17.24 22 12c0-5.52-4.48-10-10-10z" />
                </g>
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright Information */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">© 2024 Story Sculptures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
