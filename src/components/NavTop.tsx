import React, {ChangeEvent} from 'react'
import { Navbar, Form } from 'react-bootstrap'


interface NavBarProps {
    handleSearch: (value: string) => void
    query: string
}

function NavTop({ handleSearch, query }: NavBarProps) {
    return (
        <>
            <Navbar bg="dark" id='navbar'>
                <Navbar.Brand href="#home">
                    <img
                        src="https://download.logo.wine/logo/Beats_Music/Beats_Music-Logo.wine.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value = {query}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Navbar>
        </>
    )
}

export default NavTop
