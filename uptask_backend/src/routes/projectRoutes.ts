import { Router } from 'express';
import {body,param} from 'express-validator'
import { ProjectController } from '../controllers/ProjectController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post('/', 
    body('projectName')
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El nombre del cliente es obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripcion del proyecto es obligatorio'),
    handleInputErrors,
    ProjectController.createProjects
)
router.get('/', ProjectController.getAllProjects)

router.get('/:id',
    param('id').isMongoId().withMessage('El id del proyecto no es valido'),
    handleInputErrors,
     ProjectController.getProjectById
    )

router.put('/:id',
    param('id').isMongoId().withMessage('El id del proyecto no es valido'),
    body('projectName')
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El nombre del cliente es obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripcion del proyecto es obligatorio'),
    handleInputErrors,
     ProjectController.updateProject
    )   

router.delete('/:id',
    param('id').isMongoId().withMessage('El id del proyecto no es valido'),
    handleInputErrors,
     ProjectController.deleteProject
    )


export default router;