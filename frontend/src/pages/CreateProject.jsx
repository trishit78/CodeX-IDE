import { useNavigate } from 'react-router-dom';
import { useCreateProject } from '../hooks/apis/mutations/useCreateProject'
import { Button, Col, Flex, Row } from "antd";

const CreateProject = () => {
  
  const {createProjectMutation} = useCreateProject();
  const navigate = useNavigate()
  
  
  async function handleCreateProject() {




        console.log("Going to trigger the api");
        try {
            const response = await createProjectMutation();
            console.log('now we should redirect to the editor')
            navigate(`/project/${response.data}`)
        } catch (error) {
            console.log("Error creating project",error);
        }
  }
    return (
    <div>
        <h1>Project Page</h1>
        {/* <button
            onClick={handleCreateProject}
        >
            Create Project
        </button> */}


        <Row>
         
            <Col span={24} >
                <Flex justify="center" align="center">
                    <Button
                            type="primary"
                            onClick={handleCreateProject}
                    >
                        Create Playground
                    </Button>
                </Flex>
            </Col>
            
        </Row>
    
    </div>
  )
}

export default CreateProject