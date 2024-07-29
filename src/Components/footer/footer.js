import { useState } from "react";
import { SafetyArray, aboutApp } from "../../utils/footerContentData";
import FooterBlockModal from "../footerBlockModal/footerBlockModal";

const Footer = () => {
    const [footerOpenData, setFooterOpenData] = useState(false);
    const [footerItemName, setFooterItemName] = useState('');

    const footerOpenModal = (name) => {
        console.log('footer name is', name);
        setFooterOpenData(true);
        setFooterItemName(name);
    };

    const footerCloseModalData = () => {
        setFooterOpenData(false);
    };

    console.log('footer open name', footerOpenData);

    return (
        <>
            <div className="w-full bg-[#3c21d1]">
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 ml-4 lg:ml-0 gap-7 lg:gap-48 mt-20">
                        <div>
                            <p className="text-[#ff0] lg:text-lg font-semibold">Help For You</p>
                            <p className="lg:text-md text-white pt-4 cursor-pointer"  onClick={() => footerOpenModal("FAQ's")} >FAQ's</p>
                            <p className="lg:text-md text-white pt-4 cursor-pointer"  onClick={() => footerOpenModal("Contact Support")} >Contact Support</p>
                        </div>
                        <div>
                            <p className="text-[#ff0] lg:text-lg font-semibold">Safety and Privacy</p>
                            {
                                SafetyArray.map(safetyItem => (
                                    <div className="pt-4" key={safetyItem.name}>
                                        <p className="lg:text-md text-white cursor-pointer" onClick={() => footerOpenModal(safetyItem.name)}>{safetyItem.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <p className="text-[#ff0] lg:text-lg font-semibold">About Date App</p>
                            {
                                aboutApp.map(aboutItem => (
                                    <div className="pt-4" key={aboutItem.name}>
                                        <p className="lg:text-md text-white cursor-pointer"  onClick={() => footerOpenModal(aboutItem.name)}>{aboutItem.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-[#3318c8] ml-4 mr-4 gap-7 lg:ml-0 lg:mr-0 flex justify-center mt-8 lg:gap-60">
                    <div>
                        <p className="text-white pt-3 pb-3">Copyright ©2024. All rights reserved.</p>
                    </div>
                    <div>
                        <p className="text-white pt-3 pb-3">Date App is best to start your love journey</p>
                    </div>
                </div>
            </div>
            <FooterBlockModal footerOpenData={footerOpenData} footerSubName={footerItemName} footerCloseModal={footerCloseModalData} />
        </>
    );
};

export default Footer;
