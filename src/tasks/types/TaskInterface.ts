import { Document } from 'mongoose';

export interface ITask extends Document {
  title: string
  description: string
  status: boolean
  create_at: Date
  edited_at: Date
}

