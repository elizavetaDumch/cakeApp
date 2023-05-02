import React, { Component } from 'react';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import hand_made from '../assets/hand_made.png'
import badge from '../assets/badge.png'
import mother from '../assets/mother.png'
import layers from '../assets/layers.png'
import history from '../assets/history.png' 
import natural from '../assets/natural.png' 
import { MAIN_SHOP_ROUTE } from '../utils/consts';


class About extends Component {
    render() {
        return (
            <div style={{ marginTop: "170px", marginBottom: "45px" }}>                
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 col-6">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                <img src={about1} class="img-fluid" alt="Image" />
                                                
                                            </div>
                                        </div>

                                       {/* <Button variant="warning" type="submit" className="mt-4 pt-2 text-right" width="20px">
                                            Выбрать
                                        </Button>  */}

                                        <div class="col-12" >
                                            <div class="mt-4 pt-2 text-right" >
                                                <a href="MAIN_SHOP_ROUTE" class="btn btn-warning" >Выбрать</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="col-lg-6 col-md-6 col-6" >
                                    <div class="row" >
                                        <div class="col-lg-12 col-md-12" >
                                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden" >
                                                <img src={about2} class="img-fluid" alt="Image"  />                                                
                                            </div>
                                        </div>


                                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                <img src={about3} class="img-fluid" alt="Image" />                                                
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                            <div class="section-title ml-lg-5">
                                <h2 class="text-custom mb-3 "> <b>О нас</b></h2>
                                <h4 class="title mb-4">
                                    Добро пожаловать на сайт <b style={{color: "orange"}}>CakeApp</b> нашей кондитерской мастерской! <br /> <br />
                                    Мы занимаемся производством высококачественных кондитерских изделий ручной работы, которые создаются с любовью и заботой о каждой детали.
                                </h4>
                                <p class="text mb-0">На нашем сайте вы можете создать свой <b>уникальный</b> десерт, используя наш  <b style={{color: "brown"}}>конструктор</b>. Добавьте в корзину понравившийся дизайн, а затем выберите начинку и корж, и мы сделаем все возможное, чтобы создать именно то, что вы хотели. </p>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5" >
                        <div class="col-md-6">
                            <div class="about-sub mb-2">
                                <h6> <img src={hand_made} class="img-fluid" alt="Image" width={60} /> <b>Собственное производство</b></h6>
                                <h6> <img src={badge} class="img-fluid" alt="Image" width={60} />  <b>Гарантия качества</b></h6>
                                <h6> <img src={mother} class="img-fluid" alt="Image" width={60} />  <b>Десерты как у мамы</b></h6>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-sub">
                                <h6> <img src={layers} class="img-fluid" alt="Image" width={60} />  <b>Конструктор состава изделия</b></h6>
                                <h6> <img src={history} class="img-fluid" alt="Image" width={60} />  <b>История заказов</b></h6>
                                <h6> <img src={natural} class="img-fluid" alt="Image" width={60} />  <b>Натуральные ингредиенты</b></h6>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default About;