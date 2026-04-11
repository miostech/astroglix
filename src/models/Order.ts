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
    },
    partnerFullName: {
      type: String,
      default: null,
      trim: true
    },
    partnerBirthDate: {
      type: String,
      default: null,
      trim: true
    },
    /** Link direto para reabrir o relatório (success + payment_id + email) */
    customerReportUrl: {
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

/** Shape retornado por get-report e get-latest-payment (compatível com o que o front espera) */
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
    partnerFullName?: string
    partnerBirthDate?: string
  }
  timestamp: string
  planType: string
  amount: number
  paymentStatus?: string
  paymentConfirmedAt?: string
  kiwifyOrderId?: string
  customerReportUrl?: string
}

export function orderToSavedData(doc: OrderDocument & { createdAt?: Date; partnerFullName?: string; partnerBirthDate?: string }): SavedDataShape {
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
      currentCity: doc.currentCity,
      ...(doc.partnerFullName != null && doc.partnerFullName !== '' && { partnerFullName: doc.partnerFullName }),
      ...(doc.partnerBirthDate != null && doc.partnerBirthDate !== '' && { partnerBirthDate: doc.partnerBirthDate })
    },
    timestamp: createdAt.toISOString(),
    planType: doc.planType,
    amount: doc.amount,
    ...(doc.paymentStatus && { paymentStatus: doc.paymentStatus }),
    ...(doc.paymentConfirmedAt && { paymentConfirmedAt: (doc.paymentConfirmedAt instanceof Date ? doc.paymentConfirmedAt : new Date(doc.paymentConfirmedAt)).toISOString() }),
    ...(doc.kiwifyOrderId && { kiwifyOrderId: doc.kiwifyOrderId }),
    ...(doc.customerReportUrl && { customerReportUrl: doc.customerReportUrl })
  }
}

export { OrderModel }
