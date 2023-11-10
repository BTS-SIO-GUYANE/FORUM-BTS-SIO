import React from 'react';

function ImageUpload() {
    const [image, setImage] = useStare('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    import logo from '../image/logo-mg.png';
