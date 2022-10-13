import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseonSelect>
				<Container>
					<Navbar.Brand href="/">ProShop</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mr-auto" style={{ maxHeight: "100px" }}>
							<Nav.Link href="/cart">
								<i className="fa-solid fa-cart-shopping "></i> Cart
							</Nav.Link>
							<Nav.Link href="/login">
								<i className="fas fa-user "></i> Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
