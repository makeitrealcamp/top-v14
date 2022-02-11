import { Request, Response } from 'express';
import { CreateUser } from 'users/entity/types/User';
import { UserModel } from '../entity/models/userModel';




export const getUsers = async (req: Request, res: Response) => {
  const users = await UserModel.find({})
  console.log(users);
  res.status(200).json({ users })
}

export const createUser = async (req: Request, res: Response) => {
  // const user: UserType = req.body

  if (!req.body) {
    res.send(400).json({})
  }
  // if (!req.body.name || !req.body.name) {

  // }

  try {

    const user = new UserModel({ name: req.body.name, email: req.body.email, age: req.body.age });
    const savedUser = await user.save();
    res.status(200).json({ data: savedUser })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }


}

export const editUser = (req: Request, res: Response) => {
  // nueva data 
  const newUser: CreateUser = req.body;
  console.log(newUser);
  // id -> params
  const { id } = req.params
  console.log(id);
  // database.push(user)


  res.status(200).json()
}


export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json()

}