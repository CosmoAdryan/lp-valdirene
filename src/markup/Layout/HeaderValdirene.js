import React, { Component } from 'react';
import logoValdirene from './../../images/logos/logo_valdirene.png';
import './HeaderValdirene.css';

class HeaderValdirene extends Component {
    componentDidMount() {
        var btn = document.querySelector('.navicon');
        var nav = document.querySelector('.myNavbar');

        function toggleFunc() {
            return nav.classList.toggle('show');
        }

        btn.addEventListener('click', toggleFunc);

        var anchorLinks = document.querySelectorAll('.myNavbar a[href^="#"]');
        anchorLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('show');
            });
        });

    }

    scrollTo(id) {
        var el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    render() {
        return (
            <header className="site-header header center mo-left header-style-2">
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            <div className="logo-header mostion">
                                <a
                                    href="#inicio"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.scrollTo('inicio');
                                    }}
                                    className="dez-page">
                                    <img
                                        src={logoValdirene}
                                        alt="Valdirene Bolos"
                                       
                                    />
                                </a>
                            </div>

                            <button
                                className="navbar-toggler collapsed navicon justify-content-end"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div
                                className="header-nav navbar-collapse navbar myNavbar collapse justify-content-between"
                                id="navbarNavDropdown">
                                <div className="logo-header mostion">
                                    <a
                                        href="#inicio"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.scrollTo('inicio');
                                        }}
                                        className="dez-page">
                                        <img
                                            src={logoValdirene}
                                            alt="Valdirene Bolos"
                                        />
                                    </a>
                                </div>

                                {/* Esquerda da logo */}
                                <ul className="nav navbar-nav nav1">
                                    <li className="active">
                                        <a
                                            href="#inicio"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('inicio');
                                            }}>
                                            Início
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#cardapio"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('cardapio');
                                            }}>
                                            Cardápio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#servicos"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('servicos');
                                            }}>
                                            Serviços
                                        </a>
                                    </li>
                                </ul>

                                {/* Direita da logo */}
                                <ul className="nav navbar-nav nav2">
                                    <li>
                                        <a
                                            href="#como-encomendar"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('como-encomendar');
                                            }}>
                                            Encomendas
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#galeria"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('galeria');
                                            }}>
                                            Galeria
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#blog"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.scrollTo('blog');
                                            }}>
                                            Blog
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderValdirene;
