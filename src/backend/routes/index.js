import defaultRoutes from './defaultRoutes.js';

export default function useRoutes(app) {
  app.use('/api', defaultRoutes);
}
