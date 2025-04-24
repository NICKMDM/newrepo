const mongoose = require('mongoose');

// Replace 'demo' with any database name you like
mongoose.connect('mongodb://localhost:27017/demo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Schema definition
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Model creation
const Item = mongoose.model('Item', itemSchema);

// Export model
module.exports = Item;
