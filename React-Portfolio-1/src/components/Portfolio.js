import React, {useState} from 'react';
import Modal from 'react-modal'
export default function porta(props){
  const [modalIsOpen, setModalIsOpen] = useState(false)
    let resumeData = props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
         
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={item.imgurl} className="item-img"/>
                      <div className="overlay"  onClick={() => setModalIsOpen(true)}>
                       
     
      <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={false} style={{content:{
        background: 'white'
      }, overlay:{
        background: 'transparent'
      } }}>
        <h1>{item.description}</h1>
        <div  onClick={() => setModalIsOpen(false)}>
        <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
                        <div className="portfolio-item-meta">
                       
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div>
      </div>
  </section>
        );
  }
