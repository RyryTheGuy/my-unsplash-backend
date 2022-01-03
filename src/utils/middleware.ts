import { Request, Response, NextFunction } from "express";


const unknownEndpoint = (_request: Request, response : Response) => {
  return response.status(404).send('Unknown Endpoint');
};

const errorHandler = (error: Error, _request: Request, response: Response, next: NextFunction) => {
  console.error(error.message);
  
  if (error.name === 'CastError') return response.status(400).send({ error: 'malformatted id' }); 
  if (error.name === 'ValidationError') return response.status(400).json({ error: error.message });
  
  return next(error);
};

export default { unknownEndpoint, errorHandler };