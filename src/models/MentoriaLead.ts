import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongodb'

const mentoriaLeadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    source: {
      type: String,
      default: 'site_home_mentoria_waitlist',
      trim: true
    }
  },
  { timestamps: true }
)

mentoriaLeadSchema.index({ email: 1, createdAt: -1 })

const MentoriaLeadModel =
  (mongoose.models?.MentoriaLead as mongoose.Model<mongoose.InferSchemaType<typeof mentoriaLeadSchema>>) ??
  mongoose.model('MentoriaLead', mentoriaLeadSchema, 'mentorialeads')

export async function getMentoriaLeadModel() {
  await connectDB()
  return MentoriaLeadModel
}

export type MentoriaLeadDocument = mongoose.InferSchemaType<typeof mentoriaLeadSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}
