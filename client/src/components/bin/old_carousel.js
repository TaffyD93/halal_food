// import React, { useState } from 'react';

// import image1 from '../images/Bill_or_beak.jpeg';
// import image2 from '../images/fried-chicken_2.0.jpeg';
// import image3 from '../images/chicken-shawarma.jpeg';

// const imagesList = [
//     {
//         id: 1,
//         src: image1,
//         alt: "bill_or_beak",
//     },
//     {
//         id: 2,
//         src: image2,
//         alt: "fried chicken",
//     },
//     {
//         id: 3,
//         src: image3,
//         alt: "chicken shawarma",
//     },
// ];

// export default function ImageComponent() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const changeImage = () => {
//     const randomNumber = Math.floor(Math.random() * imagesList.length);
//     setCurrentImageIndex(randomNumber);
//   };

//   return (
//     <div className='pictureChange'>
//       <img className='homeImage' onClick={changeImage}
//         src={imagesList[currentImageIndex].src}
//         alt={imagesList[currentImageIndex].alt}
//       />
//       <p>Click the picture!</p>
//     </div>
//   );
// }







// //const imagesList = [
// //    {
//   //      id: 1,
//     //    src: image1,
//       //  alt: "bill_or_beak",
//    // },
// //    {
//   //      id: 2,
//     //    src: image2,
//       //  alt: "fried chicken",
//    // },
// //    {
//   //      id: 3,
//     //    src: image3,
//       //  alt: "noodle_soup",
//    // },
// //    {
//   //      id: 4,
//     //    src: image4,
//       //  alt: "shawarma",
//    // }
// //]

// //export default function Image() {
// //    this.changeImage();
// //    }

// //    changeImage = () => {
//   //      const randomNumber = Math.floor(Math.random() * imagesList.length);
//     //    this.setState({
//       //      currentImageIndex: randomNumber
//         //});
// //    }
//   //  <Image
//     //source={imagesList[this.state.currentImageIndex]}
//     //style={styles.imageStyle}
//   ///>





// //    return (
// //        <div>
// //          {imagesList.map((image) => (
// //            <img className='homeImage' key={image.id} src={image.src} alt={image.alt} />
// //          ))}
// //        </div>
// //      );