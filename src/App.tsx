/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Loader } from './components/Loader';

// We map components visually to form the complete requested layout
export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
