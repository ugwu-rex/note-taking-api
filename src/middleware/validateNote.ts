import type { Request, Response, NextFunction } from "express";

// Generic validation middleware
const validate = (validator: (body: any) => any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = validator(req.body);
      req.body = validated;
      next();
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
};

module.exports = validate;