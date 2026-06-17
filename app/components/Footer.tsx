'use client';

export default function Footer() {
  return (
    <>
    <div className="col-lg-8 mx-auto p-4 p-md-2" style={{ marginTop: '0' }}>
      <footer className="pt-5 my-5 text-body-secondary border-top">
        Created by the Bootstrap team · © {new Date().getFullYear()}
      </footer>
    </div>
    </>
  );
}
