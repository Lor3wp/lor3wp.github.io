import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/Footer.module.css';
import Logo from '../assets/hsy_logo.png';

/*Footer component */
const Footer = () => {
  return (
    <footer className={`text-center text-lg-start text-muted`}>
      <section
        className={`d-flex justify-content-center justify-content-lg-between ${styles.customFooter}`}
      >
        <div className={styles.socialLinks}>
          <p>Seuraa HSY:tä sosiaalisessa mediassa</p>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/helsinginseudunymparistopalvelut"
              className={`me-4 text-reset ${styles.customSvg}`}
            >
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="facebook-f"
                className="svg-inline--fa fa-facebook-f fa-w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#008782"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </a>
            <a
              href="https://fi.linkedin.com/company/helsinki-region-environmental-services-authority"
              className={`me-4 text-reset ${styles.customSvg}`}
            >
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in fa-w-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#008782"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/HSYviestinta"
              className={`me-4 text-reset ${styles.customSvg}`}
            >
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="youtube"
                className="svg-inline--fa fa-youtube fa-w-18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#008782"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/hsy_fi"
              className={`me-4 text-reset ${styles.customSvg}`}
            >
              <svg
                data-icon="x"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#008782"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hsymeillatoissa/?hl=fi"
              className={`me-4 text-reset ${styles.customSvg}`}
            >
              <svg
                aria-hidden="true"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram fa-w-14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#008782"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.footerContainer}>
        <div className="container2 text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={Logo} className={styles.footerLogo} />
                Helsingin seudun ympäristöpalvelut HSY
              </h6>
            </div>
            <div
              className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ${styles.textMargin}`}
            >
              <h6 className="text-uppercase fw-bold mb-4">Asiakaspalvelu</h6>
              <p>
                <a className={`text-reset ${styles.customLink}`}>
                  Asiakaspalvelun palveluajat puhelimitse
                </a>
              </p>
              <p>
                <a className={`text-reset ${styles.customInfoText}`}>
                  Ma, ke ja pe klo 8.30–15.30, <br></br>ti klo 8.30–11.00,
                  <br></br>to klo 13.00–15.30
                </a>
              </p>
            </div>
            <div
              className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ${styles.textMargin}`}
            >
              <h6 className="text-uppercase fw-bold mb-4">Yhteystiedot</h6>
              <p>
                <a className={`text-reset ${styles.customInfoText}`}>
                  Puh. 09 1561 2110<br></br>Ilmalantori 1, 00240 Helsinki PL
                  100,<br></br> 00066 HSY
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={`text-center ${styles.customFooterText}`}>
        © 2023 Copyright
      </div>
    </footer>
  );
};

export default Footer;
