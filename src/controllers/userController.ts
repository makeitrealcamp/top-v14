import { Request, Response } from 'express';
import { User } from 'types/User';
import database from '../db/db'


let db = database;

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ data: db })
}

export const createUser = (req: Request, res: Response) => {
  const user: User = req.body
  user.id = Date.now()
  //localdatabase
  db.push(user)

  res.status(200).json({ data: user })
}

export const editUser = (req: Request, res: Response) => {
  // nueva data 
  const newUser: User = req.body;
  console.log(newUser);
  // id -> params
  const { id } = req.params
  console.log(id);
  // database.push(user)

  //Mock data base
  db = db.map((user) => {
    if (user.id === parseInt(id)) {
      return { ...user, ...newUser }
    } else {
      return user
    }
  })

  res.status(200).json({ data: db })
}


export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  db = db.filter((user) => user.id !== parseInt(id))

  res.status(200).json({ data: db })

}