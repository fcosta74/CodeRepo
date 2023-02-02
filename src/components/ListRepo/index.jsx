import { useState } from "react"
import { ContainerBody, Form, ContainerImage, ContainerRepo, Repo} from "./estilos";
import { api } from '../../service/api'
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

export function ListRepo(){

    const [input, setInput] = useState('');
    const [ repositories, setRepositories ] = useState([])

    async function handleAddRepository(e) {
        e.preventDefault();

        //description
        //full_name
        //owner: avatar_url


        try{
            const response = await api.get(`repos/${input}`);
            const data = response.data;

            const isExists = repositories.find(repository => repository.full_name === data.full_name);

            if(isExists){
                toast.warn('Este repositório já foi adicionado')

                return;
            }
            setRepositories([...repositories, data]);
            toast.success('Repositório adicionado com sucesso')
            
                
        }catch(err){
            toast.error('Repositório não existe')
        
        
        }
        
       
    }
        
    function handleDeleteRepository(id){
        const repositoryDeleted = repositories.filter(repository => {
            return repository.full_name !== id
        })

        setRepositories(repositoryDeleted);
    }

    return(
        <ContainerBody>
            <Form onSubmit={handleAddRepository}>
                <input type='text' placeholder='Exemplo: usuário/repositório' value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit">Adcionar</button>
            </Form>
            <ContainerRepo>
            {repositories.map((repository) => (
                <Repo key={repository.full_name}>
                    <ContainerImage>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}  />
                    </ContainerImage>
                    <span>
                        <h1>{repository.full_name}</h1>
                        <FiTrash color="#C53E00" fontSize="1.5rem" cursor={"pointer"} onClick={()=> handleDeleteRepository(repository.full_name)}/>
                    </span>
                    <p>{repository.description}</p>
                </Repo>
            ))}   
                
            </ContainerRepo>
        </ContainerBody>
    )
}
