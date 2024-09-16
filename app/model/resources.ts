import mongoose, { Model } from 'mongoose';

// Define the interface for a Resource document
interface IResource {
  title: string;
  description: string;
  url: string;
  category: string;
}

// Define the schema
const ResourceSchema = new mongoose.Schema<IResource>({
  title: {
    type: String,
    required: [true, 'Please provide a title for the resource'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the resource'],
  },
  url: {
    type: String,
    required: [true, 'Please provide a URL for the resource'],
    validate: {
      validator: function(v: string) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid URL!`
    }
  },
  category: {
    type: String,
    required: [true, 'Please specify a category'],
    enum: ['html', 'css', 'javascript', 'react', 'nodeJS', 'database', 'other'],
  },
}, { timestamps: true });

// Use a more robust way to check if the model exists before creating it
const Resource = (mongoose.models.Resource as Model<IResource>) || mongoose.model<IResource>('Resource', ResourceSchema);

export { Resource };