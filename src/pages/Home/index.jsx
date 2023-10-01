import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Container, Brand,  Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return (
       <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>



            <Menu>
                <li><ButtonText title="Todos" isActive/></li>                
                <li><ButtonText title="Todos"/></li>                
                <li><ButtonText title="Todos"/></li>                
                              
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>
            <Content>

            </Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>



       </Container> 
    )
}