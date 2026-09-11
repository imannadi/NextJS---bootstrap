import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {

  return (
    <>
      <Header />

      <div className="col-lg-8 mx-auto p-4 p-md-2" style={{ marginTop: '0' }}>
        <main className="py-5">
          <h1 className="text-body-emphasis">Hello World</h1>
          <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML scaffolding, Bootstrap's default responsive mobile-first grid system, and a simple navbar.</p>

          <a href="https://getbootstrap.com/docs/5.3/examples" className="btn btn-primary btn-lg px-4">Download examples</a>
          
          <hr className="col-3 col-md-2 my-5" />

          <h2 className="text-body-emphasis mb-3">Cards</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src="https://placehold.co/650x400" width="100%" height="225" alt="Placeholder: Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src="https://placehold.co/650x400" width="100%" height="225" alt="Placeholder: Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src="https://placehold.co/650x400" width="100%" height="225" alt="Placeholder: Thumbnail" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="col-3 col-md-2 my-5" />

          <div className="row g-md-5 mb-5">
            <div className="col-md-6">
              <h2 className="text-body-emphasis">Starters</h2>
              <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
              <ul className="list-unstyled ps-0">
                <li>
                  <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/sass-js" rel="noopener" target="_blank">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap npm starter
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/parcel" rel="noopener" target="_blank">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Parcel starter
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/vite" rel="noopener" target="_blank">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Vite starter
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/webpack" rel="noopener" target="_blank">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Webpack starter
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h2 className="text-body-emphasis">Guides</h2>
              <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
              <ul className="list-unstyled ps-0">
                <li>
                  <a className="icon-link mb-1" href="https://getbootstrap.com/docs/5.3/getting-started/introduction">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap quick start guide
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://getbootstrap.com/docs/5.3/getting-started/webpack">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Webpack guide
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://getbootstrap.com/docs/5.3/getting-started/parcel">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Parcel guide
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://getbootstrap.com/docs/5.3/getting-started/vite">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Bootstrap Vite guide
                  </a>
                </li>
                <li>
                  <a className="icon-link mb-1" href="https://getbootstrap.com/docs/5.3/getting-started/contribute">
                    <svg className="bi" width="16" height="16" aria-hidden="true">
                      <use xlinkHref="#arrow-right-circle"></use>
                    </svg>
                    Contributing to Bootstrap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
        <ThemeToggle />
        <Footer />
    </>
  );
}
