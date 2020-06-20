import React, { useEffect, useState, useRef } from "react";
import Navigation from "./components/Navigation";
import PersonImage from "./images/nppl.jpg";
import gsap from "gsap";
import { ReactComponent as Github } from "./images/Github.svg";
import { ReactComponent as Linkedn } from "./images/Linkedn.svg";
import IntroOverlay from "./components/introOverlay";
import { debounce } from "lodash";

let tl = gsap.timeline();

function App() {
	//  states
	const projects = [
		{
			id: 1,
			name: "phmc.com.ph",
			image: "perpetual-help",
			build: "wordpress",
			link: "https://phmc.com.ph/",
		},
		{
			id: 2,
			name: "tomoe.ph",
			image: "tomoe",
			build: "wordpress",
			link: "https://tomoe.ph/",
		},
		{
			id: 3,
			name: "womo.ph",
			image: "womo",
			build: "wordpress",
			link: "https://womo.ph/",
		},
		{
			id: 4,
			name: "juanalert.com",
			image: "juan-alert",
			build: "wordpress",
			link: "https://juanalert.com/",
		},
	];

	let sections = useRef(null);

	const [slide, setSlide] = useState({
		one: "active",
		two: "",
		three: "",
	});

	const [intComplete, setIntcomplete] = useState(false);

	const [menu, setMenu] = useState(true);

	const [styleMenu, setStylemenu] = useState({
		menu_vw: 60,
		footer_vw: 40,
	});

	// Effects
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth * 0.01;

		if (vw < 4.75) {
			setStylemenu({ menu_vw: 70, footer_vw: 30 });
		}
		console.log(vw);
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}, []);

	useEffect(() => {
		IntroAnimation(isComplete);
	}, []);

	// functions

	const scrollFunction = debounce((data) => {
		if (data < 0) {
			console.log("scroll up");
		} else if (data > 0) {
			console.log("scroll down");
		}
	}, 500);
	// // Menu Function
	const MenuFunction = () => {
		if (menu) {
			// ham menu turns "x"
			gsap.to(".line-one", 0.4, {
				rotate: 45,
				marginBottom: "-5px",
				ease: "Power4.inOut",
			});
			gsap.to(".line-two", 0.4, {
				rotate: 135,
				width: 36,
				ease: "Power4.inOut",
			});

			// show menu

			gsap.to(".menu", 0.5, {
				y: 0,
				ease: "expo.inOut",
			});
			gsap.to("main", 0.5, {
				y: `-${styleMenu.footer_vw}vh`,
				opacity: 0,
				ease: "expo.inOut",
			});

			setMenu(false);
		} else {
			// CLOSE FUNCTION
			// ham menu turns "="
			gsap.to(".line-one", 0.4, {
				rotate: 0,
				marginBottom: 5,
				ease: "Power4.inOut",
				clearProps: "all",
			});
			gsap.to(".line-two", 0.4, {
				rotate: 0,
				width: 26,
				ease: "Power4.inOut",
				clearProps: "all",
			});

			//

			gsap.to(".menu", 0.6, {
				y: `-${styleMenu.menu_vw}vh`,
				ease: "expo.inOut",
				clearProps: "all",
			});
			gsap.to("main", 0.5, {
				y: "0",
				opacity: 1,
				ease: "expo.inOut",
				clearProps: "all",
			});

			setMenu(true);
		}
	};

	// // setting "True" once animation complete

	const isComplete = () => {
		setIntcomplete(true);
	};

	// // intro animation
	const IntroAnimation = (isComplete) => {
		tl.from(".intro-line span", 2, {
			y: 100,
			ease: "power4.out",
			delay: 1,
			skewY: 10,
			stagger: {
				amount: 1,
			},
		})
			.to(".intro-line span", 1, {
				y: "-100",
				skewY: -10,
				ease: "power4.inOut",
				stagger: {
					amount: 0.3,
				},
			})
			.to(".intro-overlay", 0.8, {
				delay: -0.4,
				height: 0,
				ease: "power4.inOut",
				onComplete: isComplete,
			});
	};

	return (
		<>
			{intComplete === false ? <IntroOverlay /> : ""}
			<div className="menu">
				<div className="container">
					<div className="row v-center has-follow m-j-center">
						<div className="menu-content">
							<div className="menu-wrapper">
								<div className="menu-items">
									<ul>
										<li>
											<a href="/">Intro</a>
										</li>
										<li>
											<a href="/">About</a>
										</li>
										<li>
											<a href="/">Projects</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="menu-wrapper">
								<div className="menu-social">
									<ul>
										<li>
											<Github />
										</li>
										<li>
											<Linkedn />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<main className="content">
				<div className="section-content">
					<div className="wrapper">
						<div
							className="enable-scroll"
							ref={(el) => (sections = el)}
							onWheel={(e) => e.persist(scrollFunction(e.deltaY))}
						>
							<div className={`p-section intro ${slide.one}`} data-y="0">
								<div className="container">
									<div className="row v-center">
										<div className="p-intro">
											<p className="s-number">/ 01</p>
											<h1>JOHN GUERRERO.</h1>
											<p className="p-position">web developer</p>
											<p className="p-description">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamcov
											</p>
											<a href="/">Email me</a>
										</div>
										<div className="p-image">
											<div className="p-image-wrapper">
												<img src={PersonImage} alt="person-img" />
											</div>
										</div>
									</div>
								</div>
								<div className="boxes">
									<div className="box"> &nbsp; </div>
									<div className="box"> &nbsp; </div>
								</div>
							</div>
							<div className={`p-section about ${slide.two}`} data-y="-100vh">
								<div className="container">
									<div className="row row-fluid v-center">
										<div className="text-frame">
											<div className="row frame heading">
												<div className="a-left">
													<p className="s-number">/ 02</p>
													<h1 className="a-title">About.</h1>
												</div>
												<div className="a-right">
													<p className="a-paragraph">
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit, sed do eiusmod tempor incididunt ut labore et
														dolore magna aliqua.
													</p>
												</div>
											</div>
											<div className="row frame set">
												<div className="a-left">
													<p className="a-meta">Tools</p>
												</div>
												<div className="a-right has-meta">
													<div className="a-meta-data">
														<h3>Design</h3>
														<ul>
															<li>Figma</li>
															<li>Adobe Photoshop</li>
															<li>Adobe XD</li>
														</ul>
													</div>
													<div className="a-meta-data">
														<h3>development</h3>
														<ul>
															<li>HTML</li>
															<li>CSS</li>
															<li>ReactJS</li>
														</ul>
														<ul>
															<li>WordPress</li>
															<li>Laravel</li>
															<li>Ruby on Rails</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className={`p-section projects ${slide.three}`}
								data-y="-200vh"
							>
								<div className="container">
									<div className="project-content">
										<div className="project-header">
											<p className="s-number">/ 03</p>
											<h1>Projects.</h1>
										</div>
										<div className="project-slide">
											<div className="project-cards">
												{projects.map((project) => (
													<div className="p-card" key={project.id}>
														<div className="p-card-wrapper">
															<div className="p-img">
																<img
																	src={require(`./images/${project.image}.jpg`)}
																	alt={project.name}
																/>
															</div>
															<div className="p-card-details">
																<h3 className="p-card-title">{project.name}</h3>
																<p className="p-card-build">{project.build}</p>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="blinds">
					<div className="blind">&nbsp;</div>
					<div className="blind">&nbsp;</div>
					<div className="blind">&nbsp;</div>
				</div>
			</main>
			<div
				className="p-section contact"
				style={{ height: `${styleMenu.footer_vw}vh` }}
			>
				<div className="container">
					<div className="row v-center j-center">
						<div className="c-content">
							<h1>Let's talk.</h1>
							<a href="mailto:guerrero.johndm@gmail.com">
								guerrero.johndm@gmail.com
							</a>
						</div>
						<div className="c-info"></div>
					</div>
				</div>
			</div>
			<Navigation menuClicked={MenuFunction} />
		</>
	);
}

export default App;
