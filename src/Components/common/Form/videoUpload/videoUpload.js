import React, { useState, useRef, useEffect } from 'react';
import uploadImg from '../../../../assets/formIcons/uploadImg.png';
import videoPlayer from '../../../../assets/formIcons/videoPlayer.png';
import { useNavigate } from 'react-router-dom';
import cross from '../../../../assets/personalProfileIcons/crossTik.svg';

const VideoUpload = ({ VideoUploadDatas }) => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const fileInputRef = useRef(null);

    const videoChangeHandler = (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSelectedFile(fileURL);
            sessionStorage.setItem('videoUpload', fileURL);
            setErrorMessage(''); // Clear the error message if a file is selected
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const crossDataHandler = () => {
        setSelectedFile("");
        setVideoFile(null);
        sessionStorage.removeItem('videoUpload');
    };

    const VideoSubmitFileUploadHandler = (e) => {
        e.preventDefault();

        if (!videoFile) {
            setErrorMessage('Please upload a video');
            return;
        }

        const videoUploadData = {
            firstName: VideoUploadDatas.firstName,
            phone: VideoUploadDatas.phone,
            email: VideoUploadDatas.email,
            password: VideoUploadDatas.password,
            gender: VideoUploadDatas.gender,
            city: VideoUploadDatas.city,
            date: VideoUploadDatas.date,
            profession: VideoUploadDatas.profession,
            education: VideoUploadDatas.education,
            drinking: VideoUploadDatas.drinking,
            smoking: VideoUploadDatas.smoking,
            eating: VideoUploadDatas.eating,
            interest: VideoUploadDatas.interest,
            relationship: VideoUploadDatas.relationship,
            looking: VideoUploadDatas.looking,
            zodiac: VideoUploadDatas.zodiac,
            language: VideoUploadDatas.language,
            aboutUser: VideoUploadDatas.aboutUser,
            videoUrl: videoFile
        };
        navigate('/step5', { state: videoUploadData });
    };

    useEffect(() => {
        const videoUploadForms = sessionStorage.getItem('videoUpload');
        if (videoUploadForms) {
            setSelectedFile(videoUploadForms);
        }
    }, []);

    return (
        <div className='flex justify-center'>
            <div className='rounded overflow-hidden w-96 shadow-lg mt-6'>
                <form onSubmit={VideoSubmitFileUploadHandler}>
                    <div className='flex justify-center mt-3 mb-4 relative group'>
                        {selectedFile ? (
                            <>
                                <video className="w-44 cursor-pointer" onClick={handleImageClick} controls>
                                    <source src={selectedFile} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img 
                                    src={cross} 
                                    className='w-4 cursor-pointer absolute -top-3   ml-48 hidden group-hover:block' 
                                    onClick={crossDataHandler}
                                    alt="Remove"
                                />
                            </>
                        ) : (
                            <img
                                src={uploadImg}
                                className="w-44 cursor-pointer"
                                onClick={handleImageClick}
                                alt="Upload"
                            />
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="video/*"
                            onChange={videoChangeHandler}
                        />
                    </div>
                    {errorMessage && (
                        <div className="flex justify-center mt-2 text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    <div className="flex justify-center">
                        <div className="flex justify-center gap-3 bg-blue-500 h-10 rounded w-96 mt-4 ml-4 mr-4 mb-3">
                            <img src={videoPlayer} className="w-7 h-5 mt-2" alt="Video Player" />
                            <p className="pt-1 text-white">Upload video to show up in matches</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 mb-10 ml-4 mr-4">
                        <button type='submit' className="bg-amber-500 w-96 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                            UPLOAD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VideoUpload;
