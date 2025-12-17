import { useState } from 'react';
import axios from "axios";
import Gallery from './Gallery';

function Product() {
  const [selected, setSelected] = useState('autoship');
  const [productData, setProductData] = useState<any>(null);

  const variant_number = 42656404701370

  axios.get('https://www.organifishop.com/products/shilajit-gummies.json')
    .then(response => setProductData(response.data.product))
    .catch(error => {
      console.error('Error fetching data:', error);
    });


  const shopUrl = "https://organifishop.com";

  const options = [
    {
      value: "autoship",
      label: "Autoship & Save 34% + Free Shipping",
      url: `https://www.organifishop.com/tools/recurring/checkout_link?magic=eyJpdGVtcyI6IFt7ImlkIjogNDQ1ODEyODQ4Mzk2MTAsICJxdWFudGl0eSI6IDEsICJzZWxsaW5nX3BsYW4iOiAzNDc3NTY5NzIyLCAic2VsbGluZ19wbGFuX2dyb3VwX2lkIjogMTA4ODMyMzc3MH1dfQ==&store_id=23507`,
      discounted_price: productData ? (productData.variants.find((v: any) => v.id === variant_number)?.price * 0.9).toFixed(2) : 59.95,
    },
    {
      value: "onetime",
      label: "$59.95 One-Time Purchase",
      url: `${shopUrl}/cart/clear?return_to=/cart/${variant_number}:1`,
      discounted_price: productData ? productData.variants.find((v: any) => v.id === variant_number)?.price : 59.95,
    },
  ];

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="section" id="productSection">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-[80px]">
          <div className="grid-col">
            {productData && productData.images && productData.images.length > 0 ?
              <Gallery images={productData.images} />
              : null}
          </div>
          <div className="grid-col">
            <div className="product-info">
              <p className="next-day">
                NEXT DAY DELIVERY AVAILABLE IN YOUR AREA
              </p>
              <p className="in-stock">
                ✓ IN STOCK PREPARED TO SHIP
              </p>
              <h1 className="product-title">
                Buy Now and Get Your Shilajit Gummies In Under 7 Days
              </h1>
              <p className="product-text">
                Get a 30 serving bag of Organifi Shilajit Gummies today for 25% off. Save 40% and get free shipping by stocking up on 4 bags.
              </p>
              <div className="price">
                <div className="compare-at-price">
                  ${productData ? productData.variants.find((v: any) => v.id === variant_number)?.compare_at_price : 79.95}
                </div>
                <div className="discounted-price">
                  ${options.find(option => option.value === selected)?.discounted_price}
                </div>
                {
                  selected === 'autoship' && (
                    <div className="savings">
                      Save 34% Today
                    </div>
                  )
                }
              </div>
              <div className="delivery">
                <p className='text-[18px] font-semibold mb-4'>Delivery Frequency</p>
                <div
                  className={`delivery-frequency ${selected === 'autoship' ? 'selected' : ''}`}
                  onClick={() => handleChange('autoship')}
                >
                  <span className="radio-control"></span>
                  <div className="radio-info">
                    <label htmlFor="">
                      autoship & save 34% + free shipping
                    </label>
                    <ul>
                      <li>
                        ✓ Recurring Savings Each Month
                      </li>
                      <li>
                        ✓ Easily Pause, Skip, or Change Frequency
                      </li>
                      <li>
                        ✓ Swap Products Anytime!
                      </li>
                      <li>
                        ✓ Consistency is key! Convenient auto-delivery
                      </li>
                      <li>
                        ✓ $52.96 first month then $62.96 monthly
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`delivery-frequency ${selected === 'onetime' ? 'selected' : ''}`}
                  onClick={() => handleChange('onetime')}
                >
                  <span className="radio-control"></span>
                  <label htmlFor="">
                    {productData ? productData.variants.find((v: any) => v.id === variant_number)?.price : 59.95} ONE-TIME PURCHASE
                  </label>
                </div>
              </div>
              <button id="addToCart" onClick={() => window.location.href = options.find(option => option.value === selected)?.url || '#'}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;