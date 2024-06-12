"use strict";
class API {
    constructor() {
        this.host = "http://localhost:8080";
        this.header = { "Content-Type": "application/json" };
    }
    async postData(url, obj, useCallback) {
        try {
            const fetchData = await fetch(url, {
                method: "POST",
                headers: this.header,
                body: JSON.stringify(obj)
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
    async getData(url, useCallback) {
        try {
            const fetchData = await fetch(url, {
                method: "GET"
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
    async putData(url, obj, useCallback) {
        try {
            const fetchData = await fetch(this.host + url, {
                method: "PUT",
                headers: this.header,
                body: JSON.stringify(obj)
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
    setCookie(cookieName, cookieValue) {
        const expirationDate = new Date();
        expirationDate.setTime(
            expirationDate.getTime() + 2 * 30 * 24 * 60 * 60 * 1000
        ); // 2 months in milliseconds
        document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
    }
    deleteCookie(cookieName) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() - 1);
        document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/`;
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    async getImgString(imgSrc, useCall) {
        try {
            var reader = new FileReader();
            const fetchData = await fetch(imgSrc);
            const data = await fetchData.blob();
            reader.onload = function () {
                const base64String = reader.result.split(",")[1];
                useCall(base64String);
            };
            reader.readAsDataURL(data);
        } catch (e) {
            console.log(e);
        }
    }

    getImgData(imgSrc, useCall) {
        fetch(imgSrc)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64String = reader.result.split(",")[1];
                    useCall(base64String);
                };
            });
    }

    previewImage(input, preview) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function () {
                preview.src = reader.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}
/*

var api = new API();
let url = "http://localhost:8080/products/all-products.php";
let data = {
    product_name: "Fried Chicken And Rice",
    product_img: "update_product_1.jpg",
    product_price: "120TK BDT",
    category: "Fried Rice",
    product_description: "This is fried rice its tasty and so much delicious."
};

api.getData(url, res => {
    console.log(res);
});
*/
var __api__ = new API();

export default __api__;
