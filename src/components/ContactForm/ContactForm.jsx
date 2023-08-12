import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'
const ContactForm = () => {

  const [name, setName] = useState("BIvekk");
  const [email, setEmail] = useState("bivek@gmail.com");
  const [text, setText] = useState("Hello world");


  const onViaCallSubmit = ()=> {
    console.log("I am from call");
  }

  const onSubmit = (event)=> {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name: ",event.target[0].value);
    console.log("email: ",event.target[1].value);
    console.log("text: ",event.target[2].value);

  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn} >
            <Button
              text = "VIA SUPPORT CHAT"
              icon = {<MdMessage fontSize="24px" />}
            />
            <Button
              onClick = {onViaCallSubmit}
              text = "VIA CALL"
              icon = {<FaPhoneAlt fontSize="24px" />}
            />
            
            </div>
            <Button
              isOutline = {true}
              text = "VIA EMAIL"
              icon = {<HiMail fontSize="24px" />}
            />
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type='text'name='name'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type='email'name='email'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea type='text'name='text' rows="8"/>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "flex-end"
                }}>
                <Button 
                isOutline = {false}
                text = "SUBMIT BUTTON"
                />
              </div>
              <div>
                {name + " " + email + " " + text}
              </div>
            </form>
        </div>
        <div className={styles.contact_image}>
          <img src='/images/Service 24_7-pana 1.svg' alt='image' />
        </div>
      </section>
    </>
  )
}

export default ContactForm
