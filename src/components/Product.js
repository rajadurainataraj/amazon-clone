
const Product = ({  description, image, title,price }) => {

  return (

    <div className="m-6">
      <img alt="poduct images" src={image} className="w-24  h-28 mb-2" />
      <div className="mt-1 font-semibold">{title.substring(0, 20)} ... </div>
      <div className="mt-2 text-sm">{description.substring(0, 50)} ...  </div>
      <div className="font-semibold my-2">₹ {(price * 70).toFixed(2)}</div>
    </div>


  );
};
export default Product;
