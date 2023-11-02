const url = 'js/products.json';

    async function f() {
        try {
            let response = await fetch(url);
            let data = await response.json();
            showCards(data);
        } catch (err) {
            console.log(err);
        }
    }
    f();

    function showCards(data) {
        const cards = document.getElementById('cards');
        let htmlContentToAppend = "";
        let id = 1
        for (let product of data) {
            htmlContentToAppend +=
                `
            <div class="col">
                <div class="card h-100">
                    <div id="card${id}" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#card${id}" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#card${id}" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#card${id}" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${product.imagen[0]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${product.imagen[1]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${product.imagen[2]}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <div class="carousel-arrow">
                            <button class="carousel-control-prev" type="button" data-bs-target="#card${id}"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#card${id}"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="btn-title">
                        <h4 class="card-title">${product.name}</h4>
                        <a href="#" class="btn btn-dark">Me interesa</a>
                    </div>
                    <div class="card-body"> 
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            </div>
            `
            id++;
        }
        cards.innerHTML = htmlContentToAppend;
    }
