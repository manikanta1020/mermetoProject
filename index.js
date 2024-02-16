fetch('https://products-api-2ttf.onrender.com/api/products')
            .then(response => response.json())
            .then(data => {
               
                const image1 = data[0].image; 
                const image2 = data[1].image; 
                const image3 = data[2].image; 

                // Update the source of each image element
                document.getElementById('image1').src = image1;
                document.getElementById('image2').src = image2;
                document.getElementById('image3').src = image3;
            })
            .catch(error => console.error('Error fetching data from the API:', error));