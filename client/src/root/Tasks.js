import React, { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';

import { fetchTasks } from './../store/Tasks/actions';
import { fetchProjects } from './../store/Projects/actions';

import RightButtonsBox from "./RightButtonsBox";
import TasksListContainer from "../store/Tasks/components/TasksListContainer";
import ProjectsList from './../store/Projects/components/ProjectsList';
import UsersList from './../store/Users/components/UsersList';

const Tasks = () => {

  const dispatch = useDispatch();
  const loggedUserName = useSelector(state => state.users.logged_user.name);

  useEffect(() => {
      dispatch(fetchProjects({company:'Blumoseo'}));
      dispatch(fetchTasks({responsiblePerson:loggedUserName,createdBy:loggedUserName}));
  },[dispatch,loggedUserName]);

  return(
    <React.Fragment>
      <ProjectsList />
      <UsersList />
      <TasksListContainer/>
      <RightButtonsBox />
    </React.Fragment>
  )
}

export default Tasks;