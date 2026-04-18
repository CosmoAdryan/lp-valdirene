import React, {Component} from 'react';
import HeaderValdirene from './../Layout/HeaderValdirene';
import FooterValdirene from './../Layout/FooterValdirene';
import CountUp from 'react-countup';
import {Carousel, Accordion} from 'react-bootstrap';

// Images
var img1 = require('./../../images/background/bg5.jpg');
var serblog1 = require('./../../images/our-services/pic1.jpg');
var serblog2 = require('./../../images/our-services/pic2.jpg');
var serblog3 = require('./../../images/our-services/pic3.jpg');
var serblog4 = require('./../../images/our-services/pic4.jpg');
var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/bg4.jpg');
var slider1 = require('./../../images/main-slider/slide1.jpg');
var slider2 = require('./../../images/main-slider/slide2.jpg');

class ValdireneBolos extends Component{
	render(){
		return(
			<>
				<HeaderValdirene />

				<div className="page-content bg-white" style={{paddingTop: '90px'}}>
					<div className="content-block">

						{/* SEÇÃO 1 — Hero Slider */}
						<div id="inicio" className="main-slider">
							<Carousel indicators={false}>
								<Carousel.Item>
									<div className="slide" style={{ backgroundImage: "url(" + slider1 + ")", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<div className="content" style={{maxWidth: '1000px', width: '100%', position: 'relative', left: 'auto', right: 'auto', top: 'auto', transform: 'none', margin: '0 auto', textAlign: 'center'}}>
											<span>Confeitaria Artesanal em Palotina</span>
											<h2 className="title">Bolos que Encantam, Momentos que Ficam para Sempre</h2>
											<h5 className="sub-title" style={{fontSize:"22px"}}>Feitos com carinho, ingredientes de qualidade e mais de 80 sabores para sua celebração</h5>
											<button type="button" className="btn btnhover" style={{margin:"0 8px"}}>Fazer Minha Encomenda</button>
											<button type="button" className="btn white" style={{margin:"0 8px"}}>Ver o Cardápio</button>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div className="slide" style={{ backgroundImage: "url(" + slider2 + ")", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<div className="content" style={{maxWidth: '1000px', width: '100%', position: 'relative', left: 'auto', right: 'auto', top: 'auto', transform: 'none', margin: '0 auto', textAlign: 'center'}}>
											<span>Doces, Salgados e Muito Mais</span>
											<h2 className="title">Sua Festa Começa com o Bolo Certo</h2>
											<h5 className="sub-title" style={{fontSize:"22px"}}>Encomende com antecedência e garanta o sabor que vai surpreender seus convidados</h5>
											<button type="button" className="btn btnhover" style={{margin:"0 8px"}}>Encomendar Agora</button>
											<button type="button" className="btn white" style={{margin:"0 8px"}}>Conheça a Nossa História</button>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
						</div>

						{/* SEÇÃO 3 — Cards de Categoria */}
						<div id="cardapio" className="section-full content-inner-3" style={{backgroundImage:"url(" + img1 + ")", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row service-area1">
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog1 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Bolos Confeitados</h2>
												<p>Para aniversários, casamentos e formaturas</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<button type="button" className="btn btnhover">Saiba mais <i className="fa fa-angle-double-right m-l5"></i></button>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog2 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Doces Finos</h2>
												<p>Mini trufas, bem-casados e muito mais</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<button type="button" className="btn btnhover">Saiba mais <i className="fa fa-angle-double-right m-l5"></i></button>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog3 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Salgados</h2>
												<p>Esfihas, coxinhas e opções variadas para eventos</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<button type="button" className="btn btnhover">Saiba mais <i className="fa fa-angle-double-right m-l5"></i></button>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
										<div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: "url(" + serblog4 + ")"}}>
											<div className="icon-content">
												<h2 className="dlab-tilte text-white">Opções Especiais</h2>
												<p>Diet, zero lactose e zero glúten</p>
												<div className="dlab-separator style1 bg-primary"></div>
												<button type="button" className="btn btnhover">Saiba mais <i className="fa fa-angle-double-right m-l5"></i></button>
											</div>
										</div>
									</div>
								</div>

								{/* SEÇÃO 4 — Bloco de Convite */}
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head mb-0 text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3 className="text-primary">Tem uma celebração chegando?</h3>
											<p className="main-text">A <strong>Valdirene Bolos</strong> está em Palotina há anos encantando famílias com bolos artesanais feitos sob encomenda — com ingredientes selecionados e um cuidado que você vai sentir no primeiro pedaço.</p>
											<p>Encomende com antecedência e garanta o bolo perfeito para o seu momento especial. Fale conosco agora</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SEÇÃO 5 e 6 — O que Oferecemos */}
						<div id="servicos" className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + ")", backgroundSize: "cover"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<h2 className="text-white">Tudo que Você Precisa para uma Festa Inesquecível</h2>
											<p className="text-bold">Mais de 80 sabores de bolos, doces finos e salgados — tudo artesanal, feito com carinho em Palotina-PR</p>
											<div className="dlab-separator style1 bg-primary"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={require('./../../images/about/pic1.jpg')} className="img-cover radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="row p-l30">
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon2.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Bolos Brancos</h5>
														<p>Clássicos e elegantes para qualquer celebração</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon3.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Bolos de Chocolate</h5>
														<p>Irresistíveis, na medida certa do seu evento</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon4.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Cupcakes</h5>
														<p>Individuais e decorados com muito capricho</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Mini Trufas</h5>
														<p>Doces finos para encantar mesa de doces</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon5.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Salgados &amp; Esfihas</h5>
														<p>Opções saborosas para complementar sua festa</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-sm-6 m-b30">
												<div className="icon-bx-wraper text-white service-box2">
													<div className="icon-bx">
														<span className="icon-cell"><img src={require('./../../images/icons/service-icon/icon1.png')} alt="" /></span>
													</div>
													<div className="icon-content">
														<h5 className="dlab-tilte">Bolos Especiais</h5>
														<p>Diet, zero lactose e zero glúten — sem abrir mão do sabor</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SEÇÃO 7 e 8 — Como Encomendar + FAQ */}
						<div id="como-encomendar" className="section-full content-inner bg-gray" style={{backgroundImage:"url(" + img2 + ")", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row faq-area1">
									<div className="col-lg-6 m-b30">
										<div className="m-r20">
											<div className="section-head text-left">
												<h2>Como Fazer sua Encomenda</h2>
												<p className="text-bold">Simples, rápido e sem complicação</p>
												<div className="dlab-separator style1 bg-primary"></div>
											</div>
											<div className="clearfix">
												<p>Na Valdirene Bolos, cada produto é preparado com antecedência e dedicação. Para garantir o seu pedido na data certa, entre em contato com antecedência e nos conte tudo sobre a sua celebração.</p>
												<p className="text">Desde o sabor até a decoração, cuidamos de cada detalhe para que o bolo seja exatamente como você imaginou — ou melhor ainda. Porque aqui cada encomenda é tratada como única.</p>
												<p>E se der aquela vontade de um pedaço agora? Estamos em Palotina esperando por você.</p>
												<button type="button" className="btn btn-md btnhover shadow m-t30"><i className="fa fa-angle-right m-r10"></i>Entrar em Contato</button>
											</div>
										</div>
									</div>
									<div className="col-lg-6 m-b30">
										{/* SEÇÃO 8 — Acordeão FAQ */}
										<div className="dlab-accordion faq-style1">
											<Accordion defaultActiveKey="0">
												<Accordion.Toggle className="panel" as={'div'} eventKey="0">
													<div className="acod-head">
														<h6 className="acod-title">
															<a href="#!" onClick={(e) => e.preventDefault()}><i className="fa fa-question-circle"></i> Como faço minha encomenda?</a>
														</h6>
													</div>
													<Accordion.Collapse eventKey="0">
														<div className="acod-body collapse show">
															<div className="acod-content">
																<p>Entre em contato pelo WhatsApp ou visite nossa loja em Palotina-PR. Nos diga a data, o sabor e a ocasião — cuidamos do resto.</p>
															</div>
														</div>
													</Accordion.Collapse>
												</Accordion.Toggle>
												<Accordion.Toggle as={'div'} className="panel" eventKey="1">
													<div className="acod-head">
														<h6 className="acod-title">
															<a href="#!" onClick={(e) => e.preventDefault()} className="collapsed"><i className="fa fa-clock-o"></i> Com quanto tempo de antecedência devo encomendar?</a>
														</h6>
													</div>
													<Accordion.Collapse eventKey="1">
														<div className="acod-body">
															<div className="acod-content">
																<p>Recomendamos pelo menos 5 a 7 dias de antecedência para bolos confeitados. Para datas comemorativas e eventos maiores, quanto antes melhor para garantir sua data.</p>
															</div>
														</div>
													</Accordion.Collapse>
												</Accordion.Toggle>
												<Accordion.Toggle className="panel" as={'div'} eventKey="2">
													<div className="acod-head">
														<h6 className="acod-title">
															<a href="#!" onClick={(e) => e.preventDefault()} className="collapsed"><i className="fa fa-leaf"></i> Vocês fazem bolos para restrições alimentares?</a>
														</h6>
													</div>
													<Accordion.Collapse eventKey="2">
														<div className="acod-body">
															<div className="acod-content">
																<p>Sim! Temos opções diet, zero lactose e zero glúten. Fale conosco para verificar disponibilidade e sabores especiais.</p>
															</div>
														</div>
													</Accordion.Collapse>
												</Accordion.Toggle>
											</Accordion>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SEÇÃO 9 — Galeria de Produtos */}
						<div id="galeria" className="section-full bg-white">
							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic1.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Bolo de Aniversário</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Bolo de Casamento</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic3.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Mesa de Doces</h2>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="port-box1 text-white m-md-b0 m-sm-b0">
											<div className="dlab-media">
												<img src={require('./../../images/our-work/pic2.jpg')} alt="" />
											</div>
											<div className="dlab-info">
												<h2 className="title">Salgados para Eventos</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* SEÇÃO 10 — Contadores / Prova Social */}
						<div className="section-full bg-white" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%"}}>
							<div className="container content-inner">
								<div className="row">
									<div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>A Confiança de Quem já Celebrou com a Gente</h3>
											<p>Famílias de Palotina e região que escolheram a Valdirene Bolos para os momentos mais especiais</p>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={8} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Anos de história</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={80} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Sabores no cardápio</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={5000} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Famílias atendidas</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={1300} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Festas realizadas</span>
										</div>
									</div>
								</div>
							</div>

							{/* SEÇÃO 11 — CTA em Destaque */}
							<div className="container">
								<div className="row m-lr0 about-area1">
									<div className="col-lg-6 p-lr0">
										<img className="img-cover" src={require('./../../images/about/pic3.jpg')} alt="" />
									</div>
									<div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
										<div className="about-bx">
											<div className="section-head text-center text-white">
												<h4 className="text-white">Sua Celebração Merece o Melhor</h4>
												<p>Encomende seu bolo artesanal agora</p>
												<div className="icon-bx">
													<img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
												</div>
											</div>
											<p>Escolha entre mais de 80 sabores, com opções para dietas especiais. Produção artesanal, ingredientes de qualidade e um carinho que você vai sentir em cada pedaço.</p>
											<button type="button" className="btn-secondry white btnhover btn-md"><i className="fa fa-envelope m-r5"></i>Fazer Minha Encomenda</button>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div style={{paddingTop: '60px'}}></div>
				<FooterValdirene />
			</>
		)
	}
}

export default ValdireneBolos;
