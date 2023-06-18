const formattedPrice = (price) => {
  return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

export default formattedPrice;
