const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const Task = require("../model/task.model");
const Categories = require("../model/categories.model")
const User = require("../model/user.model")


class TaskController {

    async GetAll(req, res) {
        try {
            const users = await Task.find()
            return res.status(200).json(users);
        }
        catch (err) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }

    async GetById(req, res) {
        try {
            const id = req.params.id;
            const found = await Task.findById(id);
            if (found) {
                return res.status(200).json(found);
            }
            return res.status(404).json({
                message: "Id is not found"
            });
        } catch (e) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }

    async Create(req, res) {
        try {
            const {
                Title, Description, UserId, CategoryId, Progress, Status
            } = req.body;

            if (!Title || !Description || !Progress || !Status || !UserId || !CategoryId) {
                return res.status(400).json({
                    message: "Bad Request! Please fill all field."
                })
            }

            const existingTask = await Task.findOne({ Title });

            if (existingTask) {
                return res.status(400).json({
                    message: "Bad Request! Task is already existed"
                })
            }

            const newTask = new Task({
                Title,
                Description,
                UserId,
                CategoryId,
                Progress,
                Status
            })
            await newTask.save();

            return res.status(201).json({
                message: "Task Successfully Added!"
            })


        } catch (e) {
            console.log(e)
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async Add(req, res) {
        try {
            console.log(req?.body);
            let userId = req.currentUser._id;

            // throw new Error("custom");

            const { title, description, progress, dueDate } = req?.body;

            console.log(dueDate)

            if (!title || !userId) {
                return res.status(400).json({
                    message: "Title and User Id is required"
                })
            }


            const newTask = new TaskModel({
                title,
                description,
                isActive: true,
                userId,
                progress,
                dueDate
            })

            await newTask.save();

            return res.status(201).json({
                message: "Task created successfully"
            })


        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Internal server error"
            });
        }
    }

    async Update(req, res) {
        try {
            const taskId = req.body.id;

            const updated = await Task.findByIdAndUpdate({ _id: taskId });

            if (!updated) {
                return res.status(400).json({
                    message: `Task against given id #${id} is not found`
                });
            }

            return res.status(200).json(updated);

        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: "Internal Server Error."
            });
        }
    }


    async Delete(req, res) {
        try {
            const taskId = req.params.id;

            const deleted = await Task.findOneAndDelete({ _id: taskId });

            if (deleted) {
                return res.status(200).json(deleted);
            } else {
                return res.status(400).json({
                    message: "deleted not found to be deleted",
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "internal servere error",
            });
        }
    }
}

const taskController = new TaskController();
module.exports = taskController;
