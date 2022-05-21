
import dbConnect from '../../config/database';
import Task from '../../models/task';

export default async function handler(req, res) {
  const { method } = req

  const ans = await dbConnect();
  console.log(ans)
  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find({})
        res.status(200).json({ success: true, data: tasks })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    case 'POST':
      console.log(req.body)
      try {
        const task = await Task.create(req.body)
        console.log(task)
        res.status(201).json({ success: true, data: task })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}