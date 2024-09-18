import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import '../../../src/styles.css';

const FooterBlockModal = ({ footerOpenData, footerSubName, footerCloseModal }) => {
    // console.log('footer sub name', footerSubName);
    // console.log('footer block open', footerOpenData);
    const matchFooterArray=[
    'Terms of Use','Privacy Policy','Cookie Policy','safety Tips','Safe and Secure','Code of conduct',
    'About Us ','Careers','Media','Success Stories ','ApnaPan Reviews ','Blog ','Contact Support',"FAQ's"
    ]

    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        animation: 'dropDown 1s ease-out',
        '@media (min-width: 300px) and (max-width: 350px)': {
            width: 300,
        },
        '@media (min-width: 350px) and (max-width: 400px)': {
            width: 350,
        },
        '@media (min-width: 400px) and (max-width: 500px)': {
            width: 400,
        },
        '@media (min-width: 500px) and (max-width: 600px)': {
            width: 450,
        },
        '@media (min-width: 600px) and (max-width: 700px)': {
            width: 500,
        },
    };

    return (
      <>
          <Modal
            open={footerOpenData}
            onClose={footerCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

               {matchFooterArray.includes(footerSubName)?<p><span className="text-black font-semibold">{footerSubName}</span> work is going on   </p>: <p><span className="text-black font-semibold">Add Chat</span> only works when you have paired with <span className="text-black font-semibold">{footerSubName}</span>  </p>}
            </Box>
        </Modal>
        <style jsx="true">{`
                @keyframes dropDown {
                    0% {
                        transform: translateY(-100vh) translate(-50%, -50%);
                    }
                    100% {
                        transform: translateY(0) translate(-50%, -50%);
                    }
                }
            `}</style>
      </>
    
        
    );
};

export default FooterBlockModal;
