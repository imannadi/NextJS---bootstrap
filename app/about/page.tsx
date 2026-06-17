import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';

export default function AboutPage() {

  return (
    <>
        <Header />
        <div className="col-lg-8 mx-auto p-4 p-md-2" style={{ marginTop: '0' }}>
            <main className="py-5">
                <h1 className="text-body-emphasis">About Us</h1>
                <p className="fs-5 col-md-8">Learn more about our company and what we do.</p>
            </main>
        </div>
        <ThemeToggle />
        <Footer />
    </>
  );
}
