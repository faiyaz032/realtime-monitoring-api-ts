import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

//fetch all user
export const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//fetch user by id
export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//create or register user
export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//edit or update user
export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//delete user
export const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//login user
export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//logout user
export const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});
