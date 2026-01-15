import React from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/EditorComponent';
import EditorButton from '../components/atoms/EditorButton';

const ProjectPlayground = () => {
    const {projectId} = useParams();
    console.log('projectId',projectId)
    return (
    <div>
        ProjectPlayground
        <EditorComponent />
        < EditorButton isActive={true}/>
        < EditorButton isActive={false}/>
        
    </div>
  )
}

export default ProjectPlayground