import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react'

const UnauthenticatedMenu = () => (
  <React.Fragment>
    <Menu.Item as={Link} to="/register">Sign up</Menu.Item>
    <Menu.Item as={Link} to="/login">Log In</Menu.Item>
  </React.Fragment>
)

const AuthenticatedMenu = (user) => (
  <React.Fragment>
    <Menu.Item as={Link} to="/post">
      <Icon name="edit" />
      New Post
    </Menu.Item>
    <Dropdown item simple text={"user name"}>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/logout">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
)

const Banner = () => (
  <Container text>
    <Header
      as='h1'
      content='real world react / conduit'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='a workshop for real world react app design'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

const Layout = ({ user, children }) => (
  <React.Fragment>
    <Segment
      inverted
      textAlign='center'
      vertical
      style={{
        minHeight: !user && 700,
        padding: '1em 0em' }}
    >
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            real world react / conduit
          </Menu.Item>

          <Menu.Menu position="right">
            {!user && <UnauthenticatedMenu />}
            {user && <AuthenticatedMenu />}
          </Menu.Menu>
        </Container>
      </Menu>

      {!user && <Banner />}
    </Segment>

    <Segment vertical style={{ padding: '5em 3em' }}>
      <Container>
        {children}
      </Container>
    </Segment>
  </React.Fragment>
)

export default Layout
