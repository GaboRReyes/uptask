import type { Request, Response } from 'express';
import Project from '../models/project';


export class ProjectController {

    static createProjects = async (req: Request, res: Response) => {
        const project = new Project(req.body);

        try {
        await project.save();
        res.send('Proyecto creado correctamente');
        } catch (error) {
            console.error(error);
    }
}

    static getAllProjects = async (req: Request, res: Response) => {
        res.send('Todos los proyectos');
    }
    
}