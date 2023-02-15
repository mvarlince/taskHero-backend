import getFirestoreInstance from "./utils.js";


export function getAllTasks(req, res){
    console.log("--- hitting function-----")
    const db = getFirestoreInstance()
    console.log("-- connected to firestore ---")
    db.collection('tasks').get()
    .then(collection => {
        console.log("-- getting collection ---")
        const tasks = collection.docs.map(doc => ({taskId: doc.id, ...doc.data()}))
        res.send(tasks)
    })
    .catch(err => res.status(500).json({error: err.message}))
}