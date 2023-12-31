import styled from 'styled-components';
import { motion } from "framer-motion"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #bebba9;
  max-width: 100vw;
  min-height: 90vh;
  border-radius: 15px;
  border: 2px solid black; 

  nav{
    display: flex;
    align-items: center;
  }

`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 60vw;
  margin: 2% 0 0 3%;
  
  span{
    color: #000;
    font-weight: bold;
    font-size: 1.2rem;
    color: #120e09;
    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.5)
    }
  }
`;

export const Cabecalho = styled.div`
  display:flex;
  flex-direction: column;

  & span{
    cursor: pointer;
    margin-right: 12px;
  }

  div{
    display: flex;
    align-items:center;
    justify-items: center;

    background: linear-gradient(90deg, #313e4b 0%, #90827a 100%);
    padding-top: 8%;
    width: 100%;
    margin-top: 3%;
    border-radius: 8%;
  }
`;

export const OpcoesMenu = styled.div`
  justify-content: space-between;

  & span{
    cursor: pointer;
    margin-right: 12px;
  }

`;

export const Dados = styled.div`
  display:flex;
  flex-grow: 1;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  h1{
    margin-top: 2%;
    text-align: center;
    background:#747a76 ;
    color: #000000;
    width: 100%;
  }
`;

export const InfoDados = styled(motion.div)`
    width: 95%;
    max-height: 45vh;
    overflow-y: auto;
  span{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #000;
  }
`;

export const Skills = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-grow: 1;
  background: #747a76 ;
  padding: 10px;
  border-radius: 0 0 15px 14px;
  max-height: 48.5vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

`;

export const ItemSkill = styled(motion.div)`
  display: flex;
  align-items: center;
  flex: 1 1 40%;
  border-radius: 5px;
  background: #8b7e5b;
  margin:0 2% 2% 0;
  height: 15vh;

  div{
    width: 100%;
    h3{
      margin-bottom: 2%;
      color: #000000;
      font-size: 1em;
    }

    & span{
      font-size: 0.8em;
      line-height: 0;
    }
  }

  svg{
    margin: 5%;
  }

  @media(max-width: 714px){
    flex: 1 1 50%;
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow:1;
  background-color: #bebba9;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 15px;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex: 1 1 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #000000;
  border-radius: 15px 15px 15px 15px;
  margin: 15px 32px;
  width: 25%;
  height: 15%;
  box-shadow: 10px 5px 5px rgba(0,0,0,0.4);
  transition: all 0.5s;

  &:hover{
    transform: scale(1.1);
  }

  img{
    height: 100%;
    width: 100%;
    margin-bottom: 5%;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    background-color: #8b7e5b; // aqui cor de fundo da barra dos projetos
    font-size: 1.4em;
    color: #000000;
    border-radius: 0 0 15px 15px;
  

    svg{
      margin-right: 5%;
    }
  }

  h3{
    border-radius: 15px 15px 0 0;
    width: 100%;
    text-align: center;
    background-color:  #8b7e5b; // cor de fundo app receitas
    color: #000000;
  }
`;

export const ProgressBar = styled.div`
  width: 90% !important;
  background-color: #e0e0de;
  border-radius: 15px;
  margin: 15px;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.percentual ? `${props.percentual}` : '0%'} !important;
  background-color:#000000;
  border-radius: 15px;
  text-align: right;

  span{
    padding: 5%;
    color: white;
    font-weight: bold;
  }
`;

