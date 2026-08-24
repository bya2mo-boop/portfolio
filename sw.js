// Service worker no-op, intentionnellement vide pour l'instant.
// Aucun cache, aucune interception de requête (pas de respondWith) — le hors-ligne
// est un chantier séparé, à venir. Ce fichier existe pour donner au service worker
// une URL FIXE : le navigateur réutilise ainsi une seule registration au lieu d'en
// recréer une à chaque chargement (voir index.html, l'appel à register()).
self.addEventListener('fetch', e => {});
