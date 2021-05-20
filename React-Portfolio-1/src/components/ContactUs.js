import React, {useState} from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
   const frmContact = { userEmail:'', concernCategory:'' , title:'', emailDetails:'', message:'' };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('default_service','template_jgdcr8p', contact, 'user_gCLm6QEg7fgX6oOYjED7V')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }
  return (
    <div className="container pt-2 text-center">
		
		{ showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email enviado exitosamente!!</div> : '' }
	
		<form onSubmit={handleSubmit}>
			  <div className="pt-3"><h3 className="font-weight-bold"> Contact Us !! </h3></div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Correo Electronico</b> <br/>
						<input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Your email" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Tipo de trabajo de desea</b> <br/>
						<select  required className="form-control" value={contact.concernCategory} onChange={handleChange} name="concernCategory">
						    <option value='' select disabled>Select</option>
							<option value="info" >cover</option>
							<option value="buy">flayer</option>
							<option value="play tennis">cartelera</option>
							<option value="other">Other</option>
						</select>
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Titulo de su trabajo</b> <br/>
						<input value={contact.title} required type="text" name="title" onChange={handleChange}  className="form-control" placeholder="Your email" />
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Describe tu trabajo</b> <br/>
						<textarea required name="emailDetails" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.emailDetails}></textarea>
					</div>
			  </div>
        <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Mensaje adicional</b> <br/>
						<textarea required name="message" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.message}></textarea>
					</div>
			  </div>
			  <div className="pt-3 col-md-5 mx-auto text-left">
					<button className="btn btn-primary">Submit</button>
			  </div>
		</form>	
	</div>
  );
}
export default ContactUs;