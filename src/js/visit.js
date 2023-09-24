import { createApi } from 'unsplash-js';
const main = document.getElementById("detailMain");
const unsplash = createApi({
    accessKey: 'amRgnLcjiNmMQqj7mHkhjL5sUtL9DMS_k23Ek-UnCVc',
});
const id = sessionStorage.getItem("details");
unsplash.photos.get({ photoId: id }).then(res => {
    if (res.type === "success") {
        const e = res.response.urls;
        main.innerHTML += `<img class="imgDet" src="${e.small}"/>`

    }
})




