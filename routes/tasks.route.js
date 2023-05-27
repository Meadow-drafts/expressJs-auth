const express = require('express');
var cors = require('cors')
const router = express.Router();
// router.use(cors())

const taskCtrl= require('../controllers/task.controller')

router.get('/',  taskCtrl.apiGetAllTasks);
router.post('/', taskCtrl.apiCreateTask);
router.get('/:id', taskCtrl.apiGetTask);
router.patch('/:id', taskCtrl.apiUpdateTask);
router.delete('/:id', taskCtrl.apiDeleteTask);


// router.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80')
//   })

// alternate way of using routes
// router.route('/').get(taskCtrl.getAllTasks).post(taskCtrl.createTask)
// router.route('/:id').get(taskCtrl.getTask).patch(taskCtrl.updateTask).delete(taskCtrl.deleteTask)
module.exports = router