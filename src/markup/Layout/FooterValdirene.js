import React, { Component } from 'react';

var bgfooter = require('./../../images/background/bg2.jpg');

class FooterValdirene extends Component {
	render() {
		return (
			<footer className="site-footer" style={{backgroundImage: "url(" + bgfooter + ")", backgroundSize: 'cover'}}>

				<div className="footer-top bg-line-top">
					<div className="container">
						<div className="row">

							{/* Coluna 1 — Contato */}
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Fale Conosco</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i>
											<p>R. Érico Veríssimo - Parque das Glicinias, Palotina - PR, 85950-000</p>
										</li>
										<li>
											<i className="fa fa-whatsapp"></i>
											<p>(44) 99930-4790</p>
										</li>
										<li>
											<i className="fa fa-facebook"></i>
											<p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>facebook.com/valdirene</a></p>
										</li>
									</ul>
								</div>
							</div>

							{/* Coluna 2 — Sobre */}
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
									<h4 className="footer-title">Valdirene Bolos</h4>
									<p>Confeitaria artesanal em Palotina - PR. Bolos confeitados, doces finos e salgados feitos com carinho para tornar sua celebração ainda mais especial.</p>
								</div>
							</div>

							{/* Coluna 3 — Links Rápidos */}
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
									<h4 className="footer-title">Links Rápidos</h4>
									<ul className="list-2">
										<li><a href="#inicio">Início</a></li>
										<li><a href="#cardapio">Cardápio</a></li>
										<li><a href="#servicos">Serviços</a></li>
										<li><a href="#como-encomendar">Como Encomendar</a></li>
										<li><a href="#galeria">Galeria</a></li>
									</ul>
								</div>
							</div>

							{/* Coluna 4 — Horários */}
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
									<h4 className="footer-title">Horário de Atendimento</h4>
									<p className="m-b20">Faça sua encomenda com antecedência e garanta sua data.</p>
									<ul className="work-hour-list">
										<li>
											<span className="day"><span>Segunda a Sexta</span></span>
											<span className="timing">a preencher</span>
										</li>
										<li>
											<span className="day"><span>Sábado</span></span>
											<span className="timing">a preencher</span>
										</li>
										<li>
											<span className="day"><span>Domingo</span></span>
											<span className="timing">a preencher</span>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left">
								<span>© 2025 Valdirene Bolos. Todos os direitos reservados.</span>
							</div>
							<div className="col-lg-6 col-md-6 text-right">
								<div className="widget-link">
									<ul>
										<li><a href="#inicio">Início</a></li>
										<li><a href="#como-encomendar">Encomendas</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</footer>
		);
	}
}

export default FooterValdirene;
