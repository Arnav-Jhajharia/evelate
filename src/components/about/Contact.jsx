import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import styles from "./styles.module.css";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "./hoc";
import { slideIn } from "./motion";
import { staggerContainer } from "./motion";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: '#000',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

const Contact = ({email}) => {
  console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: localStorage.getItem('name'),
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(form.email === "")
    {
      setLoading(false);
          // console.error('idito');

          alert("Enter email!"); 
          return;
    }
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: email,
          from_email: form.email,
          to_email: email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you soon and hopefully address your concerns.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
 <>
      <li onClick={handleOpen}>Send us an email</li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}> 
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} style={{
          position: "relative",
zIndex: "0",
marginLeft: "auto",
marginRight: "auto",
maxWidth: "80rem",

        }}
      >
        <span className='hash-span' id={"Contact"}>
          &nbsp;
        </span>

           <>

 
    <div
      className={`first-one`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{padding: "2rem",
borderRadius: "1rem",width: '100%'}}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{display: "flex",
marginTop: "3rem",
flexDirection: "column",
gap: "2rem",
}}
        >
          <label style={{display: "flex",
flexDirection: "column",
}}>
            <span style={{marginBottom: "1rem",
color: "#ffffff",
fontWeight: "500",
}}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={localStorage.getItem('name')}
              style={{paddingTop: "1rem",
paddingBottom: "1rem",
paddingLeft: "1.5rem",
paddingRight: "1.5rem",
color: "#000",
fontWeight: "500",
borderRadius: "0.5rem",
borderStyle: "none",
outline: "0",
}}
            />
          </label>
          <label style={{display: "flex",
flexDirection: "column",
}}>
            <span style={{marginBottom: "1rem",
color: "#ffffff",
fontWeight: "500",
}}>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={{paddingTop: "1rem",
paddingBottom: "1rem",
paddingLeft: "1.5rem",
paddingRight: "1.5rem",
color: "#000",
fontWeight: "500",
borderRadius: "0.5rem",
borderStyle: "none",
outline: "0",
}}
            />
          </label>
          <label style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{marginBottom: "1rem",
color: "#ffffff",
fontWeight: "500",}}>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              style={{paddingTop: "1rem",
paddingBottom: "1rem",
paddingLeft: "1.5rem",
paddingRight: "1.5rem",
color: "#000",
fontWeight: "500",
borderRadius: "0.5rem",
borderStyle: "none",
outline: "0",
}}
            />
          </label>

          <button
            type='submit'
            style={{paddingTop: "0.75rem",
paddingBottom: "0.75rem",
paddingLeft: "2rem",
paddingRight: "2rem",
color: "#000",
fontWeight: "700",
borderRadius: "0.75rem",
outline: "0",
boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
}}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

    </div>
   
  
    </>
      </motion.section>
       </Box>
        </Modal>
      </>
  );
};
// const StarWrapper = (Component, idName, handleOpen) =>
//   function HOC() {
//     return (
      
//     );
//   };
export default Contact;



// export default function BasicModal() {
 

//   return (
//     <div>
      
     
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
