const Item = require('./db');

// Create a new item
const newItem = new Item({
  title: 'Sample Item',
  description: 'This is a description of the sample item.',
});

// Save item to MongoDB
newItem.save()
  .then(() => {
    console.log('Item saved successfully!');
  })
  .catch((err) => {
    console.error('Error saving item:', err);
  });

// Fetch and display all items
Item.find()
  .then((items) => {
    console.log('Items in the database:');
    console.log(items);
  })
  .catch((err) => {
    console.error('Error fetching items:', err);
  });
