import { useState } from 'react';
import { personalImage } from "../../../../utils/peronalInfo";
import bulb from '../../../../assets/formIcons/bulb.png';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAsync } from '../../../../Redux/Slice/registerSlice/registerSlice';
import { useNavigate } from 'react-router-dom';
import cross from '../../../../assets/personalProfileIcons/crossTik.svg';

const AdditionalInfoWithPhoto = ({ photoData }) => {
    console.log('photo', photoData);
    const [selectedImages, setSelectedImages] = useState([]);
    const [photoError, setPhotoError] = useState('');
    const [file, setFile] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerResponse = useSelector((state) => state.registerData.registerData);
    console.log('register response', registerResponse);

    const handleImageChange = (event, id) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImage = {
                    id: id,
                    src: reader.result,
                };
                setSelectedImages(prevState => [...prevState, newImage]);
                console.log("Selected Images:", selectedImages);
            };
            reader.readAsDataURL(file);
        }
        setFile(prevFiles => [...prevFiles, file]);
        setPhotoError('');
    };

    const imageSubmitHandler = (e) => {
        e.preventDefault();
        if (file.length === 0) {
            setPhotoError('Please upload pictures');
            return;
        }
        const formData = new FormData();
        formData.append('firstName', photoData.firstName);
        formData.append('phone', photoData.phone);
        formData.append('email', photoData.email);
        formData.append('password', photoData.password);
        formData.append('gender', photoData.gender);
        formData.append('city', photoData.city);
        formData.append('DOB', photoData.date);
        formData.append('profession', photoData.profession);
        formData.append('education', photoData.education);
        formData.append('drinking', photoData.drinking);
        formData.append('smoking', photoData.smoking);
        formData.append('eating', photoData.eating);
        formData.append('interest', photoData.interest);
        formData.append('aboutUser', photoData.aboutUser);
        formData.append('looking', photoData.looking);
        formData.append('relationship', photoData.relationship);
        formData.append('zodiac', photoData.zodiac);
        formData.append('videoUrl', photoData.videoUrl);
        formData.append('language', photoData.language);

        file.forEach((file) => {
            formData.append('images', file);
        });

        console.log('personal information', formData);
        dispatch(userRegisterAsync(formData));
        setSelectedImages([]);
    };

    const crossDataHandler = (id) => {
        console.log('id is', id);
        setSelectedImages(prevImages => prevImages.filter(item => item.id !== id));
        setFile(prevFiles => prevFiles.filter((_, index) => index !== id - 1));
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="rounded overflow-hidden shadow-lg mt-6">
                    <form onSubmit={imageSubmitHandler} encType="multipart/form-data">
                        <div className="px-6 py-4 grid grid-cols-3 gap-8 ml-10 mr-10">
                            {personalImage.map((image, index) => (
                                <div key={image.id}>
                                    {selectedImages.find(selImage => selImage.id === image.id) ? (
                                        <div className="relative">
                                            <img
                                                src={selectedImages.find(selImage => selImage.id === image.id).src}
                                                className="w-28 cursor-pointer rounded-full"
                                                alt={`Selected Image ${index + 1}`}
                                            />
                                            <img
                                                src={cross}
                                                className="w-4 cursor-pointer absolute top-0 right-0 mt-1 mr-1"
                                                onClick={() => crossDataHandler(image.id)}
                                                alt="Remove"
                                            />
                                        </div>
                                    ) : (
                                        <label htmlFor={`image-upload-${image.id}`}>
                                            <input
                                                id={`image-upload-${image.id}`}
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => handleImageChange(e, image.id)}
                                                multiple
                                            />
                                            <img
                                                src={image.img}
                                                className="w-28 cursor-pointer"
                                                alt={`Image ${index + 1}`}
                                            />
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                        {photoError && (
                            <div className="flex justify-center mt-2 text-red-500">
                                {photoError}
                            </div>
                        )}
                        <div className="flex justify-center">
                            <div className="flex justify-center gap-3 bg-amber-500 h-10 rounded w-96 mt-4">
                                <img src={bulb} className="w-7 h-5 mt-2" />
                                <p className="pt-1">Upload photos to show up in matches</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 mb-10">
                            <button type="submit" className="bg-blue-500 w-96 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdditionalInfoWithPhoto;
