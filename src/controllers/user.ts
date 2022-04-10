import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import catchAsync from '../utils/catchAsync';

//fetch all user
export const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const users = await User.find({});
   res.status(200).json({ status: 'success', message: 'Users fetched successfully.', users });
});

//fetch user by id
export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const user = await User.findById(req.params.id);
   res.json({ status: 'success', message: 'User fetched successfully', user });
});

//create or register user
export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const user = await User.create({ ...req.body });
   res.status(200).json({ status: 'success', message: 'User created successflly', user });
});

//edit or update user
export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//delete user
export const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//login user
export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});

//logout user
export const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {});
