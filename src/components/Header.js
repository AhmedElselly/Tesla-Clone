import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = props => {
    const [hidden, setHidden] = useState(true);

    const handleHide = () => {
        setHidden(!hidden);
    }
    return(
        <Container>
            <a>
                <img
                    src='/images/logo.svg'
                    alt='Tesla Icon'
                />
            </a>
            <Menu>
                <p>
                    <a href='#'>Model S</a>
                </p>
                <p>
                    <a href='#'>Model X</a>
                </p>
                <p>
                    <a href='#'>Model Y</a>
                </p>
                <p>
                    <a href='#'>Model 3</a>
                </p>
            </Menu>

            <RightMenu onClick={handleHide}>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <CustomMenu/>
            </RightMenu>

             <BurgerNav show={hidden}> 
                <CloseWrapper>
                    <CustomClose onClick={() => setHidden(true)}/>
                </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Power Wall</a></li>
                <li><a href='#'>Solar Panel</a></li>
                <li><a href='#'>Commercial Energy</a></li>
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-warp: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`;

const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.ul`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
    transition: 0.3s all ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default Header;