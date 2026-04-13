import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongodb'

const siteVisitSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      trim: true,
      maxlength: 512
    }
  },
  { timestamps: true }
)

siteVisitSchema.index({ createdAt: -1 })

const SiteVisitModel =
  (mongoose.models?.SiteVisit as mongoose.Model<mongoose.InferSchemaType<typeof siteVisitSchema>>) ??
  mongoose.model('SiteVisit', siteVisitSchema, 'sitevisits')

export async function getSiteVisitModel() {
  await connectDB()
  return SiteVisitModel
}

export type SiteVisitDocument = mongoose.InferSchemaType<typeof siteVisitSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}
