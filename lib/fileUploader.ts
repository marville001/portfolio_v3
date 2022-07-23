
const fileUploader = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "test-portfolio-upload");
    formData.append("cloud_name", "marville001");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/marville001/image/upload",
        {
            method: "POST",
            body: formData
        }
    );


    const data = await response.json()


    const url = data.url.toString().replace("http:", "https:");
    return url
};

export default fileUploader;
