import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import TasksList from './TasksList';
import { StyledTaskListContainer } from "../styles/StyledTaskListContainer";

const TasksListContainer = () => {
  
  const tasks = useSelector(state=>state.tasks.tasks);
  const loggedUser = useSelector(state=>state.users.logged_user);
  const [filteredTasks,setFilteredTasks] = useState([]);
  const [isFiltered,setIsFiltered] = useState(false);
  // const isFiltered = false;

  useEffect(() => {
        setFilteredTasks(tasks.filter(task => task.responsiblePerson == loggedUser.name));
        console.log('use effect on tasks');
  },[tasks]);

  console.log('filteredTasks',filteredTasks);

  const switchTasks = () => {
        if (isFiltered) {
            setFilteredTasks(tasks.filter(task => task.responsiblePerson == loggedUser.name));
        } else {
          console.log('logge user',loggedUser);
          const filtrTasks = tasks.filter(task => task.createdBy == loggedUser.name);
          console.log('filtrTasks',filtrTasks);
            setFilteredTasks(filtrTasks);
            console.log('after set');
        }
        setIsFiltered(!isFiltered);
  }

    return(
      <StyledTaskListContainer>
        <form className="task-switcher">
                 <label htmlFor="">Zadania utworzone przeze mnie:</label>
                 <label className="switch">
                   <input
                     className="switch-input"
                     type="checkbox"
                     onClick={switchTasks}
                   />
                   <span
                     className="switch-label"
                     data-on="Ukryj"
                     data-off="Pokaż"
                   ></span>
                   <span className="switch-handle"></span>
                 </label>
          </form>
          <div className="task-items-box">
                <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">
                            Nazwa
                            <i
                              onClick={() => this.sortItems(tasks, "title", "asc")}
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() => this.sortItems(tasks, "title", "desc")}
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Projekt
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "projectName", "asc")
                              }
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "projectName", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Stan
                            <i
                              onClick={() => this.sortItems(tasks, "status", "asc")}
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "status", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Priorytet
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "priority", "asc")
                              }
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "priority", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Zlecający
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "createdBy", "asc")
                              }
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "createdBy", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Wykonawca
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "responsiblePerson", "asc")
                              }
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "responsiblePerson", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Termin
                            <i
                              onClick={() => this.sortItems(tasks, "term", "asc")}
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() => this.sortItems(tasks, "term", "desc")}
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">
                            Utworzono
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "createdAt", "asc")
                              }
                              className="glyphicon glyphicon-sort-by-alphabet"
                            ></i>
                            <i
                              onClick={() =>
                                this.sortItems(tasks, "createdAt", "desc")
                              }
                              className="glyphicon glyphicon glyphicon-sort-by-alphabet-alt"
                            ></i>
                          </th>
                          <th scope="col">Opis</th>
                        </tr>
                      </thead>
                        <TasksList tasks={filteredTasks} />
              </table>
          </div>
      </StyledTaskListContainer>
    )
}

export default TasksListContainer;