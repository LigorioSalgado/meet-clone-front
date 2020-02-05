import React, { Component } from "react";

class Navbar extends Component {
  
    constructor(props){ //Inicializa el estado
        super(props)
        this.state = {
            num:1,
            data:[],
        }
    }

    render() {// Pintar UI
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                Meetup Clone 
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }

    componentDidMount(){ //Se ejecuta despues de pintar la UI
        // Call API
        /* fetch('https://swapi.com/').then((response) => {
            this.state.data = response.json();
            this.setState({data:response.json()})
        }) */
    }

    componentDidUpdate(prevProps,prevState){
        //Cuando recibe props nuevos del Componente Padre
        //Cuando se modifica el estado
    }
    
    componentWillUnmount(){
        //Cuando ya no se quita el componente del DOM
    }
   
}

export default Navbar;
