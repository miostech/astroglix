import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongodb'

const orderSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    fullName: {
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
    birthDate: {
      type: String,
      required: true,
      trim: true
    },
    birthTime: {
      type: String,
      default: '',
      trim: true
    },
    birthPlace: {
      type: String,
      required: true,
      trim: true
    },
    currentCity: {
      type: String,
      required: true,
      trim: true
    },
    planType: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'BRL',
      trim: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'approved'],
      default: 'pending'
    },
    paymentConfirmedAt: {
      type: Date,
      default: null
    },
    kiwifyOrderId: {
      type: String,
      default: null,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

orderSchema.index({ email: 1, createdAt: -1 })

// Next.js may re-use modules; ensure we use the same model instance
const OrderModel =
  (mongoose.models?.Order as mongoose.Model<mongoose.InferSchemaType<typeof orderSchema>>) ??
  mongoose.model('Order', orderSchema)

export async function getOrderModel() {
  await connectDB()
  return OrderModel
}

export type OrderDocument = mongoose.InferSchemaType<typeof orderSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

/** Shape expected by get-report and get-latest-payment (legacy tmp file format) */
export type SavedDataShape = {
  paymentId: string
  customerData: { name: string; email: string }
  personalData: {
    fullName: string
    email: string
    birthDate: string
    birthTime: string
    birthPlace: string
    currentCity: string
  }
  timestamp: string
  planType: string
  amount: number
  paymentStatus?: string
  paymentConfirmedAt?: string
  kiwifyOrderId?: string
}

export function orderToSavedData(doc: OrderDocument & { createdAt?: Date }): SavedDataShape {
  const createdAt = doc.createdAt instanceof Date ? doc.createdAt : new Date((doc as { createdAt: string }).createdAt)
  return {
    paymentId: doc.paymentId,
    customerData: { name: doc.fullName, email: doc.email },
    personalData: {
      fullName: doc.fullName,
      email: doc.email,
      birthDate: doc.birthDate,
      birthTime: doc.birthTime ?? '',
      birthPlace: doc.birthPlace,
      currentCity: doc.currentCity
    },
    timestamp: createdAt.toISOString(),
    planType: doc.planType,
    amount: doc.amount,
    ...(doc.paymentStatus && { paymentStatus: doc.paymentStatus }),
    ...(doc.paymentConfirmedAt && { paymentConfirmedAt: (doc.paymentConfirmedAt instanceof Date ? doc.paymentConfirmedAt : new Date(doc.paymentConfirmedAt)).toISOString() }),
    ...(doc.kiwifyOrderId && { kiwifyOrderId: doc.kiwifyOrderId })
  }
}

export { OrderModel }
