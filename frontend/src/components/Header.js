import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseonSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand href="/">ProShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mr-auto" style={{ maxHeight: "100px" }}>
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fa-solid fa-cart-shopping "></i> Cart
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to="/login">
								<Nav.Link>
									<i className="fas fa-user "></i> Login
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
