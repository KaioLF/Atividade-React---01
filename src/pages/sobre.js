import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';



function Sobre() {
   
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />
            <div class='container'>
                <div class="row">
                    <div class="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lorem sed magna posuere fringilla. Nunc bibendum diam id lorem elementum, vel sollicitudin risus venenatis. Etiam vel arcu eget justo sagittis blandit. Aliquam at dui enim. Sed eu sem vel velit commodo gravida. Nunc sed mi id nibh varius tincidunt. In auctor libero at enim ullamcorper, nec feugiat dolor tincidunt.</p>
                    </div>
                    <div class="col-md-6">
                    <img src='/assets/images/blockbuster.svg' alt="imagem" className="card-img-top" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sobre;