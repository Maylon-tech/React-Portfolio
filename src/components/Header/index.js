import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eee;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  left: 0;
`

export const Logo = styled.div`
  color: #222;
  font-size: 3rem;
  font-weight: bold;

  > span {
    color: crimson;
  }
`

export const Navbar = styled.ul`
  display: flex;
  gap: 1rem;
`

export const NavItem = styled.li`
  
    font-size: 1.2rem;
  padding: 1rem;

  > a {
    color: #222;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  border: 2px solid orange;
  padding: .8rem;
`

export const IconContent = styled.div`
  color: #eee;
  margin: 0 1rem;
  cursor: pointer;

  > svg {
    font-size: 2rem;
    color: #222;
  }
`