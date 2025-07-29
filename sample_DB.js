const mongoose = require('mongoose');


//new connection to MongoDB using Mongoose to a DB named taskmanager
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error:', err);
});

// defining a new Schema using Mongoose
// each document will have a title and completed flag
const taskSchema = new mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = new mongoose.model('Task', taskSchema);

// insering a document to a collection: creating a new task
const createTask = async (title, completed) => {
    const task = new Task({ title: title, completed: completed }); // 'tasks' is the collection
    await task.save(); // saving to the collection
    console.log('Task saved', task);
}

createTask('Sample task III');
createTask('Sample task IV', true);
createTask('Sample task V');