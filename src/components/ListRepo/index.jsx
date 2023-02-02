import { useState } from "react"
import { ContainerBody, Form, ContainerRepo, Repo, ContainerImage} from "./stilos";
import { FiTrash } from 'react-icons/fi';
import { api } from '../../service/api'

export function ListRepo(){

    const [input, setInput] = useState()
    const [repositories, setRepositories] = useState([])

    async function handleAddRepository(e){
        e.preventDefault();

        //description
        //full_name
        //owner: avatar_url

        const response = await api.get(`repos/${input}`)
        const data = response.data;
        setRepositories([...repositories, data]);

        
    }

    return(

        <ContainerBody>
            <Form onSubmit={handleAddRepository}>
                <input type="text" placeholder="Exemplo: usuário/repositório" value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </Form>
            <ContainerRepo>
            {repositories.map(repository => (
            <Repo key={repository.full_name}>
                <ContainerImage>
                <img src={repository.owner.avatar_url} alt="" />
                </ContainerImage>
                <span>
                <h1>{repository.full_name}</h1>
                <FiTrash color="#C53E00" fontSize="1.5rem" cursor={"pointer"}/>
                </span>
                <p>{repository.description}</p>
            </Repo>
            ))}      
                
            </ContainerRepo>
        </ContainerBody>
    );
}