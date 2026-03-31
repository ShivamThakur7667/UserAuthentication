import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 */
authRouter.post("/register", authController.register);

/**
 * @route POST /api/auth/login
 */
authRouter.post("/login", authController.login);

/**
 * @route GET /api/auth/get-me
 */
authRouter.get("/get-me", authController.getMe);

/**
 * @route Get /api/auth/refresh-token
 */
authRouter.get("/refresh-token", authController.refreshToken);

/**
 * @route POST /api/auth/logout
 */
authRouter.post("/logout", authController.logout);

/**
 * @route POST /api/auth/logout-all
 */
authRouter.post("/logout-all", authController.logoutAll);

/**
 * @route POST /api/auth/verify-email
 */
authRouter.post("/verify-email", authController.verifyEmail);

export default authRouter;