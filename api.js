// API IN JAVASCRIPT

const url = 'https://randomuser.me/api/';

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
// };
// // xhttp.open("GET", "filename", true);
// // xhttp.send();


//javascriptot xmlhttprequest ata method hoi

const http = new XMLHttpRequest();

http.open('GET', url); //.open properties nije nije call nohoi iyak call koriboloi send() method use koribo lagibo


http.send(); //api called/ api request send kora loge loge request hodai continously change hoi

//AJAX REQUEST IN JAVASCRIPT

/*
http.onreadystatechange = function () {
    console.log(http.readyState);
    //api requestot most of the time data stringot ahe tak ako object oloi convert kori ami access koribo paru

    if (http.readyState === 4) {
        const text = JSON.parse(this.responseText);
        console.log(text);
        const picture = text.results[0].picture.medium
            ;

        const img = document.querySelector('#image');
        img.src = `${picture}`;
        // document.querySelector('body').appendChild = `${img};`

        // console.log('response', JSON.parse(http.responseText));
    }
};

*/








/*
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Jennie",
                "last": "Nichols"
            },
            "location": {
                "street": {
                    "number": 8929,
                    "name": "Valwood Pkwy",
                },
                "city": "Billings",
                "state": "Michigan",
                "country": "United States",
                "postcode": "63104",
                "coordinates": {
                    "latitude": "-69.8246",
                    "longitude": "134.8719"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "jennie.nichols@example.com",
            "login": {
                "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
                "username": "yellowpeacock117",
                "password": "addison",
                "salt": "sld1yGtd",
                "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
                "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
                "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
                "date": "1992-03-08T15:13:16.688Z",
                "age": 30
            },
            "registered": {
                "date": "2007-07-09T05:51:59.390Z",
                "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
                "name": "SSN",
                "value": "405-88-3636"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
        }
    ],
        "info": {
        "seed": "56d27f4a53bd5441",
            "results": 1,
                "page": 1,
                    "version": "1.4"
    }
}
*/