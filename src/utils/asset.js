// Préfixe un fichier de /public avec l'URL de base du site,
// pour qu'il soit trouvé en local comme sur GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
