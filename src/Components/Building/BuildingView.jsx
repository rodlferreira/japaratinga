import React from 'react';

// Modules
import { Card, Button, Input, Checkbox } from 'antd';

//Style

import lg from '../../assets/imagens/logo.png';
import img from '../../assets/imagens/imagem.png';
import './BuildingStyle.css';

const BuildingView = (props) => {
    let menu = ['Início', 'Administração', 'Notícias', 'Projetos']

    return(

        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'right center'

            }}
        >

            <div
                style={{
                    margin: '20px',
                }}

            >
                <img src={lg} style={{marginRight: '60px'}} />

                {
                    menu.map(item=>{
                        console.log(item);
                        return(
                            <a
                                href='#'
                                style={{

                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    lineHeight: '16px',
                                    marginRight: '20px',

                                    color: '#52B848',

                                }}
                            >
                                {item}
                            </a>
                        )
                    })
                }

            </div>

            <div
                style={{
                    margin: '20px',
                }}

            >
                <div
                    style={{
                        position: 'absolute',
                        width: '414px',
                        height: '84px',
                        left: '50px',
                        top: '257px',

                        fontFamily: 'Suez One',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '64px',
                        lineHeight: '84px',
                        color: '#52B848',

                    }}
                >
                    Bem Vindo (a)
                </div>

                <div
                    style={{
                        position: 'absolute',
                        width: '537px',
                        height: '76px',
                        left: '55px',
                        top: '333px',

                        fontFamily: 'Suez One',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '24px',
                        lineHeight: '31px',
                        color: '#52B848',

                    }}
                >
                    Infelizmente o site está em <br/> desenvolvimento
                </div>

                <div
                    style={{
                        position: 'absolute',
                        width: '315px',
                        height: '24px',
                        left: '49px',
                        top: '409px',

                        fontFamily: 'Suez One',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '18px',
                        lineHeight: '24px',
                        color: '#52B848',

                    }}
                >
                    Mas logo logo estaremos de volta :D

                </div>

            </div>



        </div>

    )

};

export default BuildingView;