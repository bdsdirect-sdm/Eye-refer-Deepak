import express, { Router } from "express";
import doctorRoutes from "./doctorRoutes";

// Define the structure for a route configuration
interface RouteConfig {
    path: string;
    routes: Router;
}

const allRoutes: Router = express.Router();

const defaultRoutes: RouteConfig[] = [
    {
        path: "/doctor",
        routes: doctorRoutes
    },
];

defaultRoutes.forEach((route) => {
    allRoutes.use(route.path, route.routes);
});

export default allRoutes;
