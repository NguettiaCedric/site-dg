
import Link from 'next/link'

export default function Contactpage() {
    return (
        <>

			<section className="contact-details">
				<div className="container ">
					<div className="row">
						<div className="col-xl-7 col-lg-6">
							<div className="sec-title">
								<span className="sub-title">Envoi de mail</span>
								<h2>veuillez remplir ces champs SVP</h2>
							</div>
							<form id="contact_form" name="contact_form" className="" action="" method="get">
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_name" className="form-control" type="text" placeholder="Nom & Prenoms"/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
								</div>
								<div className="mb-3">
									<input name="form_botcheck" className="form-control" type="hidden" value="" />
									<button type="submit" className="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span className="btn-title">Envoi message</span></button>
									{/* <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button> */}
								</div>
							</form>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="contact-details__right">
								{/* <div className="sec-title">
									<span className="sub-title">Need any help?</span>
									<h2>Get in touch with us</h2>
									<div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
								</div> */}
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<ul className="list-unstyled contact-details__info">
									<li>
										<div className="icon">
											<span className="lnr-icon-phone-plus"></span>
										</div>
										<div className="text">
											<h6>Téléphone</h6>
											<a href="tel:+2250706065406"><span></span>+225 07 06 06 54 06 / +225 0594310375</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span className="lnr-icon-envelope1"></span>
										</div>
										<div className="text">
											<h6> Email</h6>
											<a href="mailto:info@koothe.com">info@koothe.com</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span className="fa fa-map-marker"></span>
										</div>
										<div className="text">
											<h6>Localisation</h6>
											<span>Localisation Riviera 3 triangle</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

        </>
    )
}
