import express from 'express';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export class BloggrsServer {
  private app: express.Application;
  private prisma: PrismaClient;

  constructor() {
    console.log('Initializing BloggrsServer...');
    this.app = express();
    this.prisma = new PrismaClient();
    this.setupMiddleware();
    this.setupRoutes();
    console.log('BloggrsServer initialized');
  }

  private setupMiddleware() {
    console.log('Setting up middleware...');
    // Get the absolute path to the project root
    const projectRoot = path.resolve(__dirname, '../..');
    
    this.app.use(express.json());
    this.app.use(express.static(path.join(projectRoot, 'public')));
    
    // Set absolute paths for views
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(projectRoot, '.bloggrs/views'));
    
    // Debug paths
    console.log('Views directory:', path.join(projectRoot, '.bloggrs/views'));
    console.log('Public directory:', path.join(projectRoot, 'public'));
    console.log('Middleware setup complete');
  }

  private setupRoutes() {
    console.log('Setting up routes...');
    
    // Landing page route
    this.app.get('/', (req, res) => {
      console.log('Received request for /');
      try {
        res.render('landing', {
          title: 'Influencer Agency',
          blogName: 'Your Premier Influencer Agency',
          description: 'Connect with the perfect influencers to amplify your brand\'s message and reach millions of engaged followers.'
        });
      } catch (error) {
        console.error('Error rendering landing page:', error);
        res.status(500).json({ error: 'Failed to render template', details: error.message });
      }
    });

    // Debug route
    this.app.get('/debug', (req, res) => {
      console.log('Received request for /debug');
      res.json({
        viewsPath: this.app.get('views'),
        publicPath: path.join(__dirname, '../../public'),
        currentDir: __dirname
      });
    });

    // Health check route
    this.app.get('/health', (req, res) => {
      console.log('Received request for /health');
      res.json({ status: 'ok' });
    });

    console.log('Routes setup complete');
  }

  public async start(port: number = 3000) {
    try {
      console.log('Attempting to start server...');
      await this.prisma.$connect();
      
      return new Promise((resolve) => {
        this.app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
          resolve(true);
        });
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      throw error;
    }
  }
}