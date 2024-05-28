'use strict'
class Task {
      constructor(task, owner, isDone) {
            this.task = task;
            this.owner = owner;
            this.isDone = isDone;
      }
}

const addBtn = document.getElementById('btn-add');
const inputTask = document.getElementById('input-task');
const todoList = document.getElementById('todo-list');
const closeTask = document.querySelector('.close');

if(currentUser){
      renderTodoList();
      // handle add button
      addBtn.addEventListener('click', handleAddTask);
      function handleAddTask(){
            const userTask = new Task(inputTask.value, currentUser.username, false);
            if(inputTask.value.trim().length >= 1 && userTask.owner === currentUser.username){
                  todoArray.push(userTask);
                  saveToLocalstorage('todoArray', todoArray);
                  renderTodoList();
                  inputTask.value = '';
                  inputTask.focus();
            }
      }
      


function renderTodoList() {
      let html = '';
      todoArray.filter((todo) => todo.owner === currentUser.username)
      .forEach(todoelement => {
            html +=  `<li class=${todoelement.isDone === true? 'checked' : ''}>${todoelement.task}<span class="close">×</span></li>`;
        });
      
      
            todoList.innerHTML = html;
            toggleTask();
            deleteTask();
}

// create toogleTask function to show which task was done
function toggleTask() {
 document.querySelectorAll('#todo-list li')
 .forEach((El_li) => {
      El_li.addEventListener('click', function(e) {
            if(e.target !== El_li.children[0]){
                  // closeTask
                  El_li.classList.toggle('checked');
            }
            // find the element which was completed in the todoarray
          const todo = todoArray.find((todoEl) => 
                  todoEl.owner === currentUser.username 
                  && todoEl.task === El_li.textContent.slice(0, -1)
            )
            if(todo){
                  todo.isDone = El_li.classList.contains('checked') ? true : false;
            }
            else return;

            saveToLocalstorage('todoArray', todoArray);
      })
 });
}

// deleted a task when click delete button
function deleteTask() {
      document.querySelectorAll('.close').forEach((closeEl) => {
            closeEl.addEventListener('click', function(){
                  const isDelete = confirm('Are you sure!');
                  if(isDelete){
                        // find the task which need to be deleted
                        const indexItem = todoArray.findIndex(todo => 
                              todo.owner === currentUser.username &&
                              todo.task === closeEl.parentElement.textContent.slice(0, -1)
                              );
                              todoArray.splice(indexItem, 1);
                              saveToLocalstorage('todoArray', todoArray);
                              renderTodoList();
                  }
            })
      })
}
}