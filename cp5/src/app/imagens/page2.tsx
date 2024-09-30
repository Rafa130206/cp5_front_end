// pages/page1.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page2 = () => {
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('/api/images');
            setImages(response.data);
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h1>Página 1 sobre Immanuel Velikovsky</h1>
            <div>
                {images.map((image) => (
                    <div key={image.id}>
                        <h3>{image.title}</h3>
                        <img src={image.src} alt={image.title} width={300} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page2;
