import React from 'react';
import {Row, Col} from 'reactstrap';
const WeatherForm = props => (
    
    <div className="card card-body" >
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            
        <h2>Clima del Ecuador </h2>
        <form onSubmit={props.getWeather}>
            <div className="form-group">
            <select type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus>
                <option value="Latacunga">Latacunga</option>
                <option value="Ambato">Ambato</option>
                <option value="Quito">Quito</option>
                <option value="Guayaquil">Guayaquil</option>
                <option value="Pelileo">Pelileo</option>
            </select>

            </div>
            <div className="form-group">
            <select type="text" name="country" placeholder="Your Country Name" className="form-control">
                <option value="Ecuador">Ecuador</option>
            </select>
               
            </div>
            <button color="success" className="btn btn-success btn-block">Ver clima </button>
        </form>
          </Col>
        </Row>




        
    </div>
);

export default WeatherForm;