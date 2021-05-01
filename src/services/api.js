const getObjectData = async (object) => {
    const response = await fetch('https://onsite.iteca.kz/exh-details/', {
      method: 'POST',
      body: JSON.stringify({
        apiKey:
          '0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=',
        lang: '',
        exhibkey: 'Kioge 2021',
        companykey: 'MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==',
        companyid: 'QUEwMDAwMDAyNzky',
      }),
    })
  
    return (object = response.json())
  }
  
  export {getObjectData}
  