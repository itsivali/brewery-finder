// Function to return static brewery data
function getStaticBreweryData() {
    // Static brewery data array
    const breweryData = [
        {
            "id": "5128df48-79fc-4f0f-8b52-d06be54d0cec",
            "name": "(405) Brewing Co",
            "brewery_type": "micro",
            "address_1": "1716 Topeka St",
            "address_2": null,
            "address_3": null,
            "city": "Norman",
            "state_province": "Oklahoma",
            "postal_code": "73069-8224",
            "country": "United States",
            "longitude": "-97.46818222",
            "latitude": "35.25738891",
            "phone": "4058160490",
            "website_url": "http://www.405brewing.com",
            "state": "Oklahoma",
            "street": "1716 Topeka St"
        },
        // Add more brewery objects as needed
    ];

    return breweryData;
}

// Function to render brewery data
function renderBreweries(breweries) {
    const breweryList = document.getElementById('brewery-list');

    // Clear previous content
    breweryList.innerHTML = '';

    // Check if breweries array is empty
    if (breweries.length === 0) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "No breweries found.";
        breweryList.appendChild(errorMessage);
        return;
    }

    // Loop through the data and create HTML brewery cards
    breweries.forEach(brewery => {
        const breweryCard = document.createElement('div');
        breweryCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4');

        breweryCard.innerHTML = `
            <div class="card shadow">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${brewery.name}</h5>
                    <p class="card-text">Type: ${brewery.brewery_type}</p>
                    <p class="card-text">Address: ${brewery.address_1}, ${brewery.city}, ${brewery.state_province}, ${brewery.postal_code}</p>
                </div>
            </div>
        `;

        // Add card to the brewery list
        breweryList.appendChild(breweryCard);
    });
}

// Function to fetch brewery data from the API
async function fetchBreweryData() {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array if there's an error
    }
}

// Function to filter breweries based on city, name, state, or type
function filterBreweries(data, filterValue, filterType) {
    try {
        return data.filter(brewery => {
            switch (filterType) {
                case 'city':
                    return brewery.city.toLowerCase().includes(filterValue.toLowerCase());
                case 'name':
                    return brewery.name.toLowerCase().includes(filterValue.toLowerCase());
                case 'state':
                    return brewery.state_province.toLowerCase().includes(filterValue.toLowerCase());
                case 'type':
                    return brewery.brewery_type.toLowerCase() === filterValue.toLowerCase();
                default:
                    return true; // No filter applied
            }
        });
    } catch (error) {
        console.error('Error filtering breweries:', error);
        return []; // Return an empty array if there's an error
    }
}
/// Function to render brewery data
function renderBreweries(breweries) {
    const breweryList = document.getElementById('brewery-list');

    // Clear previous content
    breweryList.innerHTML = '';

    // Check if breweries array is empty
    if (breweries.length === 0) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "No breweries found.";
        breweryList.appendChild(errorMessage);
        return;
    }

    // Loop through the data and create HTML brewery cards
    breweries.forEach(brewery => {
        const breweryCard = document.createElement('div');
        breweryCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4');

        breweryCard.innerHTML = `
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">${brewery.name}</h5>
                    <p class="card-text">Type: ${brewery.brewery_type}</p>
                    <p class="card-text">Address: ${brewery.address_1 }, ${brewery.city}, ${brewery.state_province}, ${brewery.postal_code }</p>
                    
                </div>
            </div>
        `;

        // Add card to the brewery list
        breweryList.appendChild(breweryCard);
    });
}
// Function to fetch a random brewery
async function fetchRandomBrewery() {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries/random');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching random brewery:', error);
        return null; // Return null if there's an error
    }
}

// Function to handle getting a random brewery
function handleRandomBrewery() {
    fetchRandomBrewery()
        .then(data => {
            if (data) {
                renderRandomBrewery(data); // Render the random brewery
            } else {
                console.error('Failed to get random brewery');
            }
        });
}

// Function to render a random brewery
function renderRandomBrewery(brewery) {
    const breweryCard = document.createElement('div');
    breweryCard.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = brewery.name;

    const type = document.createElement('p');
    type.classList.add('card-text');
    type.textContent = `Type: ${brewery.brewery_type}`;

    const address = document.createElement('p');
    address.classList.add('card-text');
    address.textContent = `Address: ${brewery.address_1 || 'N/A'}, ${brewery.city || 'N/A'}, ${brewery.state_province || 'N/A'}, ${brewery.postal_code || 'N/A'}`;

    cardBody.appendChild(title);
    cardBody.appendChild(type);
    cardBody.appendChild(address);

    breweryCard.appendChild(cardBody);

    // Get the div where you want to append the card and append the card
    const breweryList = document.getElementById('brewery-list');
    breweryList.innerHTML = ''; // Clear previous content
    breweryList.appendChild(breweryCard);
}

// Add event listener for the random button
document.getElementById('random-button').addEventListener('click', handleRandomBrewery);



// Function to handle search input and filter breweries by name accordingly
function handleSearch() {
    const searchInput = document.getElementById('search-input').value.trim();

    fetchBreweryData()
        .then(data => {
            const filteredBreweries = filterBreweries(data, searchInput, 'name');
            renderBreweries(filteredBreweries);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Add event listener for the search button
document.getElementById('search-button').addEventListener('click', handleSearch);

// Add event listener for search input to trigger search on Enter key press
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});


// Initially render breweries without any filter
fetchBreweryData()
    .then(data => {
        renderBreweries(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
