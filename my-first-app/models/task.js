import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],

  },
  status: {
    type: Boolean,
    default: false,
  },

})

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)