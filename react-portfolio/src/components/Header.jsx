

function Header(props) {

    const { currentPage, handlePageChange } = props;

    return (
        <header>
            <div>
				<h2>Erik Aku's Portfolio</h2>
			</div>
            <div>
				<Navigation
					currentPage={currentPage} 
                    handlePageChange={handlePageChange}
				></Navigation>
			</div>
        </header>

    );

}

export default Header;