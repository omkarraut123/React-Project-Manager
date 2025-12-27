import { useState } from 'react';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectDetailComponent from './components/ProjectDetailComponent';
import ShowMessage from './components/ShowMessage';

function App() {
    const [projectStates, setProjectState] = useState({
        projectId: undefined,
        projects: [],
    });
    const [showMessage, setShowMessage] = useState(false);

    function handleIntialProject(){
        setProjectState((preState) => {
            return {
                ...preState,
                projectId: null
            }
        })
    }
    function handleCancel(){
      setProjectState((preState)=>{
        return {
          ...preState,
          projectId: undefined
        }
      })
    }
    function fnSaveData(newProjectData){
        let projectData = { 
          ...newProjectData,
          id : Math.random(),
         };
        setProjectState((preState) => {
          return {
            ...preState,
            projectId: undefined,
            projects: [...preState.projects, projectData]
          }
        });
      
        
    }
    function handleSelectProject(id){
        setProjectState((preState) => {
          return {
            ...preState,
            projectId: id,
            projects: [...preState.projects]
          }
        });
    }
    function handleDeleteProject(id){
        setProjectState((preState) => {
          return {
            ...preState,
            projectId: undefined,
            projects: [...preState.projects.filter((item) => item.id !== id)]
          }
        });
        setShowMessage(true);
        setTimeout(function(){
          setShowMessage(false);
        },3000)
    }
   
    
    let content = "";
    let selectedProject = projectStates.projects.filter((item) => item.id === projectStates.projectId)
    if(projectStates.projectId === undefined) {
      content = <NoProjectSelected handleIntialProject = {handleIntialProject} />;
    }else if(projectStates.projectId === null){
        content = <NewProject fnSaveData= {fnSaveData} onCancel ={ handleCancel }/>;
    } else {
      content = <ProjectDetailComponent project={selectedProject} handleDeleteProject = {handleDeleteProject}/>
    }
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar handleIntialProject={handleIntialProject} projects = {projectStates.projects} handleSelectProject = {handleSelectProject}/>
      {content}
     {showMessage && <ShowMessage message="Project deleted successfully!" />} 
     </main>
    </>
  );
}

export default App;
