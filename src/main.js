import './style.css';
import { initTabs } from './modules/ui.js';
import { initCamera } from './modules/camera.js';
import { initSensors } from './modules/sensors.js';
import { initGallery } from './modules/gallery.js';
import { showToast } from './modules/ui.js';

function obrirAplicacio() {
  const pantallaInici = document.getElementById('splash');
  const aplicacio = document.getElementById('app');

  setTimeout(() => {
    pantallaInici?.classList.add('fade-out');
    pantallaInici?.addEventListener('transitionend', () => {
      pantallaInici.style.display = 'none';
    }, { once: true });

    aplicacio?.classList.remove('hidden');
    showToast('OnÉsElCotxe?', 'info');
  }, 1800);
}

function iniciarAplicacio() {
  obrirAplicacio();
  initTabs((pestanyaActual) => {
    console.log('Pestanya actual:', pestanyaActual);
  });

  initCamera();
  initSensors();
  initGallery();

  document.addEventListener('sensor:shake', () => {
  });

  window.addEventListener('appinstalled', () => {
    showToast('Aplicació instal·lada correctament', 'success');
  });
}

document.addEventListener('DOMContentLoaded', iniciarAplicacio);