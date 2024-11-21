import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

/**
 * Function to colorize text using chalk.
 * @param text - The text to be colorized.
 * @param color - The color to apply from chalk.
 * @returns The colorized text or the original text if the color is not supported.
 */
export const colorizeText = (text: string, color: string): string => {
  if ((chalk as any)[color]) {
    return (chalk as any)[color](text);
  } else {
    console.warn(`Color '${color}' is not supported by chalk.`);
    return text;
  }
};

/**
 * Middleware to intercept and log the response data based on status code.
 * @param req - The incoming request object.
 * @param res - The outgoing response object.
 * @param next - The next middleware function in the stack.
 */
export const globalResponse = (req: Request, res: Response, next: NextFunction): void => {
  const originalJson = res.json;

  res.json = function (data: any): Response {
    if (res.statusCode < 300) {
      console.log(
        `${colorizeText("Response Message:", "yellow")} ${colorizeText(data?.message || '', "green")}`
      );
    } else {
      console.log(
        `${colorizeText("Error Message:", "yellow")} ${colorizeText(data?.message || '', "red")}`
      );
    }
    return originalJson.call(this, data);
  };
  next();
};
