import express from "express";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';
const router=express.Router()
//Routes
//create category route
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)
//update category route
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)
//get all category
router.get('/get-category',categoryController)
//get single category route
router.get('/single-category/:slug',singleCategoryController)
//delete category 
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
export default router;