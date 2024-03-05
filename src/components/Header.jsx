import Navigation from "./Navigation";


function Header({currentPage, handlePageChange}) {
    
    return (
        <header>
            <div>
				<h2 className="name">Erik Aku</h2>
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