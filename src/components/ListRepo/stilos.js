import styled from 'styled-components';

export const ContainerBody = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    margin-top: 100px;
    aligin-itens: center;
    gap: 2rem;

    input{
        width: 80%;
        height: 50px;
        font-size: 1.2rem;
        padding: 0 20px;
        border:0 ;
        border-radius:6px;
    }
    button{
        height: 50px;
        width: 20%;
        font-size: 1.2rem;
        padding: 0 20px;
        border:0 ;
        border-radius: 6px;
        background: #c53e00;
        color: #fff;
        cursor: pointer;
        transition: 0.2s;

        &:houver{
            filter: brigghtness(0.9);
        }
    }
    &
`;

export const ContainerRepo = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
`;
    
export const Repo = styled.div`
    width: 48.5%;
    background: #FFF;
    color: #333;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    heigt: 350px;
    gap: 1.5rem;

    span{
        display:flex;
        align-items: center;
        gap: 1rem;
    
        h1{
            color: #C53E00;
        }
    }
    p{
        color: #555;
        font-size: 1.1rem;
    }
`;

export const ContainerImage = styled.div`
    width: 100px;

    img{
        width: 100%;
        border-radius: 50%;
    }


`;



