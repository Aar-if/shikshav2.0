//'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div id="welcome">
      <Link href="/">
        <button>
          <h1>Home</h1>
        </button>
      </Link>
      <h1>React Microfrontend Iframe</h1>
      <iframe
        src="http://localhost:4200"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}