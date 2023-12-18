// logger.routes.js
import { Router } from "express";
import loggerMiddleware from "../middlewares Error/loggerMiddleware.js";

const loggerRoutes = Router();


loggerRoutes.get('/logger', loggerMiddleware, function(req, res){
    req.logger.fatal("fatal")
    req.logger.error("error")
    req.logger.warning("warning")
    req.logger.info("info")
    req.logger.http("http")
    req.logger.debug("debug")
});

export default loggerRoutes;
