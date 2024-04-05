import defaultRoutes from './defaultRoutes.js';
import articlesRoutes from './articlesRoutes.js';
import categoriesRoutes from './categoriesRoutes.js';

export default function useRoutes(app) {
  app.use('/api', defaultRoutes);
  app.use('/api/articles', articlesRoutes);
  app.use('/api/categories', categoriesRoutes);
}

