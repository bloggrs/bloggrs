import { BloggrsServer } from '../.bloggrs/core/server.ts';  // Note the .js extension
import dotenv from 'dotenv';

dotenv.config();

const server = new BloggrsServer();
server.start(Number(process.env.PORT) || 3000);