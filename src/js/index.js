import { createApi } from 'unsplash-js';
const main = document.getElementById("main");
const unsplash = createApi({
    accessKey: 'amRgnLcjiNmMQqj7mHkhjL5sUtL9DMS_k23Ek-UnCVc',
});
Classic();

document.getElementById('modern').addEventListener("click", () => {
    Modern();
});
document.getElementById('classic').addEventListener("click", () => {
    Classic();
});
document.getElementById('sculpture').addEventListener("click", () => {
    Sculpture();
});
document.getElementById('cubism').addEventListener("click", () => {
    Cubism();
});
document.getElementById('abstract').addEventListener("click", () => {
    Abstract();
});
document.getElementById('fav').addEventListener("click", () => {
    Fav();
});
function Classic() {
    unsplash.search.getPhotos({
        query: "Classic Art",
        page: 1,
        perPage: 20,
        orientation: "portrait",
    }).then(result => {
        if (result.type === "success") {
            const photos = result.response.results;

            const getUrl = photos.map((e) => {
                return `
                
                <div class="${e.id}" id="area">
                    <img src="${e.urls.small}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-danger btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.urls.small}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>
                `;
            })

            main.innerHTML = getUrl.join('');
        }
    })

}

function Fav() {
    var imageFav = JSON.parse(localStorage.getItem("FavImages") || "[]");
    var arr=imageFav.filter((v, i, a) => a.findIndex(v2 => (JSON.stringify(v2) === JSON.stringify(v))) === i)
    
    const getUrl = arr.map((e) => {
        return `
                <div class="${e.id}" id="area">
                    <img src="${e.url}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.url}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>
                `;
    })

    main.innerHTML = getUrl.join('');

}
function Modern() {
    unsplash.search.getPhotos({
        query: "Modern Art",
        page: 1,
        perPage: 20,
        orientation: "portrait",
    }).then(result => {
        if (result.type === "success") {
            const photos = result.response.results;

            const getUrl = photos.map((e) => {
                return `<div class="${e.id}" id="area">
                    <img src="${e.urls.small}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-danger btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.urls.small}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>`;
            })
            main.innerHTML = getUrl.join('');
        }
    })

}
function Sculpture() {
    unsplash.search.getPhotos({
        query: "Sculpture",
        page: 1,
        perPage: 20,
        orientation: "portrait",
    }).then(result => {
        if (result.type === "success") {
            const photos = result.response.results;

            const getUrl = photos.map((e) => {
                return `<div class="${e.id}" id="area">
                    <img src="${e.urls.small}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-danger btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.urls.small}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>`;
            })
            main.innerHTML = getUrl.join('');
        }
    })

}
function Cubism() {
    unsplash.search.getPhotos({
        query: "Cubism Art",
        page: 1,
        perPage: 20,
        orientation: "portrait",
    }).then(result => {
        if (result.type === "success") {
            const photos = result.response.results;

            const getUrl = photos.map((e) => {
                return `<div class="${e.id}" id="area">
                    <img src="${e.urls.small}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-danger btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.urls.small}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>`;
            })
            main.innerHTML = getUrl.join('');
        }
    })

}
function Abstract() {
    unsplash.search.getPhotos({
        query: "Abstract Art",
        page: 1,
        perPage: 20,
        orientation: "portrait",
    }).then(result => {
        if (result.type === "success") {
            const photos = result.response.results;

            const getUrl = photos.map((e) => {
                return `<div class="${e.id}" id="area">
                    <img src="${e.urls.small}" id="${e.id}" />
                    <div id="details" onclick='myFunction(event,"${e.id}")'></div>
                    <button type="button" class="btn btn-danger btn-primary rounded-circle addToFavourite" onclick='storeFavourites(event,"${e.id}","${e.urls.small}")'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    </button>
                </div>`;
            })
            main.innerHTML = getUrl.join('');
        }
    })

}
