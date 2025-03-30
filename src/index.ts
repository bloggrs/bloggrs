import { BloggrsServer } from '../.bloggrs/core/server';

const startServer = async () => {
    try {
        const server = new BloggrsServer();
        await server.start(3000);
        console.log('Server started successfully');
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();