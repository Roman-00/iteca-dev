export const getDataInfo = async () => {
  const response = await fetch("https://onsite.iteca.kz/exh-details/", {
    method: "POST",
    body: JSON.stringify({
      apiKey:
        "0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=",
      lang: "",
      exhibkey: "Kioge 2021",
      companykey: "MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==",
      companyid: "QUEwMDAwMDAyNzky",
    }),
  });

  const object = await response.json();

  return {
    object,
    response,
  };

};

export const getCategoryList = async () => {
  const response = await fetch("https://onsite.iteca.kz/exh-prod-category/", {
    method: "POST",
    body: JSON.stringify({
      apiKey:
        "0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=",
      lang: "",
      exhibkey: "Kioge 2021",
      companykey: "MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==",
      companyid: "QUEwMDAwMDAyNzky",
    }),
  });

  const category = await response.json();

  return {
    category,
    response,
  }
};

export const getProdList = async () => {

  const response = await fetch("https://onsite.iteca.kz/exh-prod-list/", {
    method: "POST",
    body: JSON.stringify({
      apiKey:
        "0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=",
      lang: "",
      exhibkey: "Kioge 2021",
      companykey: "MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==",
      companyid: "QUEwMDAwMDAyNzky",
    }),
  });

  const prod = await response.json();

  return {
    prod,
    response,
  }

};