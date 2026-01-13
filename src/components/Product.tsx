import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";

type ShopifyProduct = {
  images: string[];
  variants: Array<{
    id: number;
    price: string; // Shopify JSON often returns prices as strings
    compare_at_price: string | null;
  }>;
};

function Product() {
  const [selected, setSelected] = useState<"autoship" | "onetime">("autoship");
  const [productData, setProductData] = useState<ShopifyProduct | null>(null);

  const variant_number = 42656404701370;
  const selling_plan = 2890793146
  const shopUrl = "https://www.organifishop.com";

  const checkoutUrl = () => {
    const addParams = new URLSearchParams();

    addParams.append('items[][id]', String(variant_number));
    addParams.append('items[][quantity]', "1");

    if (selected === 'autoship') {
      addParams.append('items[][selling_plan]', String(selling_plan));
    }

    addParams.append('return_to', '/checkout');

    const clearParams = new URLSearchParams();
    clearParams.set('return_to', '/cart/add?' + addParams.toString());

    clearParams.set('utm_source', 'shilajit_landing');
    clearParams.set('utm_medium', 'custom_page');
    clearParams.set('utm_campaign', 'shilajit');

    window.location.href = shopUrl + '/cart/clear?' + clearParams.toString();
  }

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await axios.get<{ product: ShopifyProduct }>(
          `${shopUrl}/products/shilajit-gummies.json`,
          { signal: controller.signal }
        );
        setProductData(res.data.product);
      } catch (err: any) {
        // Abort is expected on unmount; don't log it as an error
        const isAbort =
          err?.name === "CanceledError" ||
          err?.code === "ERR_CANCELED" ||
          err?.message?.toLowerCase?.().includes("canceled");
        if (!isAbort) console.error("Error fetching data:", err);
      }
    })();

    return () => controller.abort();
  }, []);

  const selectedVariant = useMemo(() => {
    if (!productData) return null;
    return productData.variants.find((v) => v.id === variant_number) ?? null;
  }, [productData]);

  const price = useMemo(() => {
    const raw = selectedVariant?.price;
    const n = typeof raw === "string" ? Number(raw) : raw;
    return Number.isFinite(n as number) ? (n as number) : 59.95;
  }, [selectedVariant]);

  const compareAt = useMemo(() => {
    const raw = selectedVariant?.compare_at_price;
    const n = typeof raw === "string" ? Number(raw) : raw;
    return Number.isFinite(n as number) ? (n as number) : 79.95;
  }, [selectedVariant]);

  const options = useMemo(() => {
    return [
      {
        value: "autoship" as const,
        label: "Autoship & Save 22% + Free Shipping",
        discounted_price: Number((price * 0.9).toFixed(2)),
        percent: 22,
      },
      {
        value: "onetime" as const,
        label: "$59.95 One-Time Purchase",
        discounted_price: price,
        percent: 13,
      },
    ];
  }, [price, shopUrl]);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === selected) ?? options[0],
    [options, selected]
  );

  return (
    <div className="section" id="productSection">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-[80px]">
          <div className="grid-col">
            {productData?.images?.length ? <Gallery images={productData.images} /> : null}
          </div>
          <div className="grid-col">
            <div className="product-info">
              <p className="next-day">NEXT DAY DELIVERY AVAILABLE IN YOUR AREA</p>
              <p className="in-stock">✓ IN STOCK PREPARED TO SHIP</p>

              <h1 className="product-title">
                Buy Now and Get Your Shilajit Gummies In Under 7 Days
              </h1>

              <p className="product-text">
                Get a 30 serving bag of Organifi Shilajit Gummies today for 25% off.
                Save 40% and get free shipping by stocking up on 4 bags.
              </p>

              <div className="price">
                <div className="compare-at-price">${compareAt}</div>
                <div className="discounted-price">${selectedOption.discounted_price}</div>
                <div className="savings">Save {selectedOption.percent}% Today</div>
              </div>

              <div className="delivery">
                <p className="text-[18px] font-semibold mb-4">Delivery Frequency</p>

                <div
                  className={`delivery-frequency ${selected === "autoship" ? "selected" : ""}`}
                  onClick={() => setSelected("autoship")}
                >
                  <span className="radio-control"></span>
                  <div className="radio-info">
                    <label>autoship &amp; save 22% + free shipping</label>
                    <ul>
                      <li>✓ Recurring Savings Each Month</li>
                      <li>✓ Easily Pause, Skip, or Change Frequency</li>
                      <li>✓ Swap Products Anytime!</li>
                      <li>✓ Consistency is key! Convenient auto-delivery</li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`delivery-frequency ${selected === "onetime" ? "selected" : ""}`}
                  onClick={() => setSelected("onetime")}
                >
                  <span className="radio-control"></span>
                  <label>{price} ONE-TIME PURCHASE</label>
                </div>
              </div>

              <button
                id="addToCart"
                onClick={checkoutUrl}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
