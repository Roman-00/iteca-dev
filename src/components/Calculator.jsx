import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Calculator = ({object}) => {

    const { b_ostrov, b_poluostrov, b_ugol, d_plstenda } = object;

    const [value, setValue] = useState("");
    const [valueLength, setValueLenght] = useState(0);
    const [valueMoreThanTen, setValueMoreThanTen] = useState(0);
    const price = 3;

    useEffect(() => {
        if(valueLength > 15) {
            setValueMoreThanTen(valueLength - 15);
        } else if (valueLength < 16) {
            setValueMoreThanTen(0);
        }
    }, [valueLength]);

    const handleChange = (e) => {
        setValue(e.target.value);
        const newValue = e.target.value.replace(/\s+/g, "");
        // тут проверь, убери коммент с консоли и проверь.
        // console.log('newValue', newValue);
        // console.log('newValue.length', newValue.length)
        setValueLenght(newValue.length);
    };

    const [checked, setChecked] = useState(false); // Угол

    const [checkedp, setCheckedP] = useState('false'); // Полуостров

    const [checkedo, setCheckedO] = useState('false'); // Остров
    
    useEffect(() => {
      if (b_ugol) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }, [b_ugol]);

    useEffect(() => {
        if (b_poluostrov) {
            setCheckedP('true')
        } else {
            setCheckedP('false')
        }
    }, [b_poluostrov])

    useEffect(() => {
        if (b_ostrov) {
            setCheckedO('true')
        } else {
            setCheckedO('false')
        }
    }, [b_ostrov])

    /* --- Пишем данные в бд --- */
    const senRequest = () => {
        const requestObject = { value, valueMoreThanTen, price: valueMoreThanTen * price };
        fetch("https://onsite.iteca.kz/exh-save-list/", {
          method: "POST",
          body: JSON.stringify({
            apiKey: "0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=",
            lang: "",
            exhibkey: "Kioge 2021",
            companykey: "MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==",
            companyid: "QUEwMDAwMDAyNzky",
            requestObject: requestObject
          })
        });
    };
    /* --- Пишем данные в бд --- */


    return (
        <div className="calculator__content">
            <h2 className="content__title">
                Надпись для фризовой панели
            </h2>
            <p className="home__content--except calc__content--except">
                В стоимость оборудования стенда уже включена надпись до 15 символов на каждую открытую сторону.
                Каждая дополнительная буква будет стоить 3 у.е . Пожалуйста, впишите Вашу надпись в строку, 
                расположенную ниже. Итоговая стоимость ссумируется автоматически.
            </p>
            <div className="calculator__content--interface">
                <div className="calculator__interface--input">
                    <input type="text" value={value} placeholder="Впишите надпись здесь" className="calculator__input" onChange={handleChange}/>
                </div>
                <div className="calculator__interface--parametrs">
                    <div className="calculator__paramentrs calculator__paramentrs--angle">
                        <input type="checkbox" className="custom-checkbox" checked={checked} onChange={() => {}}/>
                        <label>Угол</label>
                    </div>
                    <div className="calculator__paramentrs calculator__paramentrs--penensula">
                        <input type="checkbox" className="custom-checkbox" checkedp={checkedp} onChange={() => {}}/>
                        <label>Полуостров</label>
                    </div>
                    <div className="calculator__paramentrs calculator__paramentrs--island">
                        <input type="checkbox" className="custom-checkbox" checkedo={checkedo} onChange={() => {}}/>
                        <label>Остров</label>
                    </div>
                    <div className="calculator__paramentrs calculator__paramentrs--letters">
                        <span>Всего дополнительных букв</span>
                        <div className="paramentrs__text">
                            {valueMoreThanTen}
                        </div>
                    </div>
                    <div className="calculator__paramentrs calculator__paramentrs--result">
                        <span>Стоимость в у.е.</span>
                        <div className="paramentrs__text">
                            {valueMoreThanTen > 0 && `${valueMoreThanTen * price}`}
                        </div>
                    </div>
                </div>
            </div>

            <div className="calculator__content--info">
                <span className="content__info--text">
                    Для заказа дополнительного оборудования, мебели, графических 
                    услуг или персонала, пожалуйста, нажмите кнопку справа ►►►
                </span>
                <span onClick={() => senRequest()}>Отправить</span>
                <Link to="/category" className="content__info--btn btn--primary">
                    Продолжить 
                </Link>
            </div>
        </div>
    )

}

export { Calculator };