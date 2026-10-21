import app from './app';
import { env } from './config/env';
import { testConnection } from './config/db';

async function start() {
  try {
    await testConnection();
    app.listen(env.port, () => {
      console.log(`Serveur démarré sur http://localhost:${env.port}`);
    });
  } catch (err) {
    console.error('Échec de connexion à MySQL :', err);
    process.exit(1);
  }
}

start();