import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
      },
      message: (props: { value: any; }) => `${props.value} is not a valid URL!`
    }
  },
  category: {
    type: String,
    required: true,
    enum: ['CSS', 'HTML', 'JavaScript', 'React', 'Node.js', 'Database' , 'Other'] 
  },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
