const mongoDb = require('mongodb').MongoClient;
const connectionString = "mongodb://127.0.0.1:27017";

const db = mongoDb.connect(connectionString);

db.then(async (myDb) => {
    debugger;

    const myDatabase = myDb.db("bootcamp");
    const studentCollection = await myDatabase.collection("students");

    const classesCollection = await myDatabase.collection("classes");
    // adding a new student
    //const newStuent = { name: 'Ali', age: 20 };
    //await studentCollection.insertOne(newStuent);

    // adding multiple students
    //const setOfStudents = [{ name: 'Raza', age: 20 }, { name: 'Ahmed', age: 20 }]
    //await studentCollection.insertMany(setOfStudents);

    // adding multiple classes
    // const setOfClasses = [{ name: 'One', student_id: '6457fda2cc894fa028d26a4d' }, { name: 'Two', student_id: '6457fda2cc894fa028d26a4d' }]
    //await classesCollection.insertMany(setOfClasses);

    const results = await classesCollection.aggregate(
        [
            {
                $lookup: {
                    from: 'students',
                    localField: 'student_id',
                    foreignField: '_id',
                    as: 'studentDetails'
                }
            }
        ]
    ).toArray();
    debugger


    // query for all ho
    // iterate through all students

    /* const fetchingStudents = await studentCollection.find().toArray();
     fetchingStudents.forEach((student, index) => {
         console.log(student);
     });*/

    // conditional finding based on OR operation
    /*const conditionalQuery = {
        $or: [
            { name: "Amir" },
            { name: "Bilal" }]
    };
    const fetchingStudents = await studentCollection.find(conditionalQuery).toArray();
    fetchingStudents.forEach((student, index) => {
        console.log(student);
    });*/

    // specific query
    /*const query = { name: 'Ali' };
    const fetchingStudents = await studentCollection.find(query).toArray();
    fetchingStudents.forEach((student, index) => {

        console.log(student);
    });*/

    // updating records
    //const updateQuery = { age: 20 };

    //const updatedValues = { $set: { age: 40 } };
    //await studentCollection.updateOne(updateQuery, updatedValues);

    // update many
    //await studentCollection.updateMany(updateQuery, updatedValues);

    /*fetchingStudents.forEach((student, index) => {
        console.log(student);
    });*/

    // delete operations
    //const dropRecord = { age: 30 };
    //await studentCollection.deleteMany(dropRecord);

    // drop the collection
    //const hasDeleted = await studentCollection.drop();
    //console.log(hasDeleted);

    myDb.close();
}).catch((error) => {

    debugger
})
