import axios from "axios";

export const imageUpload = async image => {
    const imageApiKey = import.meta.env.VITE_IMAGE_API_KEY;
    const formData = new FormData();
    formData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, formData)
    
    return data.data.display_url
}