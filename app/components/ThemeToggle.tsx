'use client';

import { useEffect, useState } from 'react';

function applyTheme(theme: string) {
  const htmlElement = document.documentElement;

  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    htmlElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    return;
  }

  htmlElement.setAttribute('data-bs-theme', theme);
}

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  return localStorage.getItem('theme') || 'auto';
}

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState(getStoredTheme);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = getStoredTheme();
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (getStoredTheme() === 'auto') {
        applyTheme('auto');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    setDropdownOpen(false);
  };

  const getThemeIcon = () => {
    switch (currentTheme) {
      case 'dark':
        return '#moon-stars-fill';
      case 'auto':
        return '#circle-half';
      default:
        return '#sun-fill';
    }
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707L4.464 5.172a.5.5 0 0 1 0-.707z"></path>
        </symbol>
      </svg>

      <div className="dropup position-fixed bottom-0 end-0 mb-3 me-3">
        <button 
          className="btn btn-outline-primary py-2 dropdown-toggle d-flex align-items-center" 
          id="bd-theme" 
          type="button" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <svg 
            className="bi my-1 theme-icon-active" 
            width="16" 
            height="16" 
            aria-hidden="true"
            style={{ fill: currentTheme === 'dark' ? 'white' : 'currentColor' }}
          >
            <use href={getThemeIcon()}></use>
          </svg>
          <span className="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className={`dropdown-menu dropdown-menu-start shadow ${dropdownOpen ? 'show' : ''}`} style={{ top: 'auto', bottom: '100%', marginBottom: '0.5rem', left: 'auto', right: '0' }} aria-labelledby="bd-theme-text">
          <li>
            <button 
              type="button" 
              className={`dropdown-item d-flex align-items-center ${currentTheme === 'light' ? 'active' : ''}`}
              onClick={() => handleThemeChange('light')}
            >
              <svg className="bi me-2 opacity-50" width="16" height="16" aria-hidden="true">
                <use href="#sun-fill"></use>
              </svg>
              Light
              {currentTheme === 'light' && (
                <svg className="bi ms-auto" width="16" height="16" aria-hidden="true">
                  <use href="#check2"></use>
                </svg>
              )}
            </button>
          </li>
          <li>
            <button 
              type="button" 
              className={`dropdown-item d-flex align-items-center ${currentTheme === 'dark' ? 'active' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              <svg className="bi me-2 opacity-50" width="16" height="16" aria-hidden="true">
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              {currentTheme === 'dark' && (
                <svg className="bi ms-auto" width="16" height="16" aria-hidden="true">
                  <use href="#check2"></use>
                </svg>
              )}
            </button>
          </li>
          <li>
            <button 
              type="button" 
              className={`dropdown-item d-flex align-items-center ${currentTheme === 'auto' ? 'active' : ''}`}
              onClick={() => handleThemeChange('auto')}
            >
              <svg className="bi me-2 opacity-50" width="16" height="16" aria-hidden="true">
                <use href="#circle-half"></use>
              </svg>
              Auto
              {currentTheme === 'auto' && (
                <svg className="bi ms-auto" width="16" height="16" aria-hidden="true">
                  <use href="#check2"></use>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
