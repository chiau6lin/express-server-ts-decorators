import express from "express";

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }

  // static get instance(): express.Router {
  //   if (!AppRouter.instance) {
  //     AppRouter.instance = express.Router();
  //   }
  //
  //   return AppRouter.instance;
  // }
}
