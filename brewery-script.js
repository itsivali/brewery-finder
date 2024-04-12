// Hardcoded array of breweries
const breweryData = [
    {
               "name": "(405) Brewing Co",
               "brewery_type": "micro",
               "address": "1716 Topeka St",
               "city": "Norman",
               "state": "Oklahoma",
               "postal_code": "73069-8224"
             },
             {
               "name": "16 Lots Brewing",
               "brewery_type": "brewpub",
               "address": "753 Reading Rd",
               "city": "Mason",
               "state": "Ohio",
               "postal_code": "45040-1303"
             },
             {
               "name": "16 Mile Brewing Co",
               "brewery_type": "micro",
               "address": "413 S Bedford St",
               "city": "Georgetown",
               "state": "Delaware",
               "postal_code": "19947-1849"
             },
             {
               "name": "16 Stone Brewpub",
               "brewery_type": "brewpub",
               "address": "9542 Main St",
               "city": "Holland Patent",
               "state": "New York",
               "postal_code": "13354"
             },
             {
               "name": "1623 Brewing CO, llc",
               "brewery_type": "contract",
               "address": "1146 Colonel Joshua Ct",
               "city": "Westminster",
               "state": "Maryland",
               "postal_code": "21157"
             },
             {
               "name": "1717 Brewing Co",
               "brewery_type": "micro",
               "address": "322 E Court Ave",
               "city": "Des Moines",
               "state": "Iowa",
               "postal_code": "50309-2015"
             },
             {
               "name": "1718 Ocracoke Brewing",
               "brewery_type": "brewpub",
               "address": "1129 Irvin Garrish Hwy",
               "city": "Ocracoke",
               "state": "North Carolina",
               "postal_code": "27960"
             },
             {
               "name": "1781 Brewing Company",
               "brewery_type": "micro",
               "address": "11109 Plank Rd",
               "city": "Spotsylvania",
               "state": "Virginia",
               "postal_code": "22553-4258"
             },
             {
               "name": "180 and Tapped",
               "brewery_type": "micro",
               "address": "2010 A State Ave",
               "city": "Coraopolis",
               "state": "Pennsylvania",
               "postal_code": "15108"
             },
             {
               "name": "1817 Brewery",
               "brewery_type": "micro",
               "address": "100 B South Olive St",
               "city": "Okolona",
               "state": "Mississippi",
               "postal_code": "38860"
             },
             {
               "name": "1840 Brewing Company",
               "brewery_type": "micro",
               "address": "342 E Ward St",
               "city": "Milwaukee",
               "state": "Wisconsin",
               "postal_code": "53207-1348"
             },
             {
               "name": "1850 Brewing Company",
               "brewery_type": "micro",
               "city": "Mariposa",
               "state": "California",
               "postal_code": "95338"
             },
             {
               "name": "18th Street Brewery",
               "brewery_type": "micro",
               "address": "5725 Miller Ave",
               "city": "Gary",
               "state": "Indiana",
               "postal_code": "46403-2871"
             },
             {
               "name": "18th Street Brewery",
               "brewery_type": "micro",
               "address": "5417 Oakley Ave",
               "city": "Hammond",
               "state": "Indiana",
               "postal_code": "46320-1817"
             },
             {
               "name": "1905 Brewing Company",
               "brewery_type": "micro",
               "address": "1301 S Chestnut St",
               "city": "Assumption",
               "state": "Illinois",
               "postal_code": "62510-8504"
             },
             {
               "name": "1912 Brewing",
               "brewery_type": "micro",
               "address": "2045 N Forbes Blvd Ste 105",
               "city": "Tucson",
               "state": "Arizona",
               "postal_code": "85745-1444"
             },
             {
               "name": "1912 Brewing",
               "brewery_type": "micro",
               "address": "2045 N Forbes Blvd Ste 105",
               "city": "Tucson",
               "state": "Arizona",
               "postal_code": "85745-1444"
             },
             {
               "name": "1912 Brewing",
               "brewery_type": "micro",
               "address": "2045 N Forbes Blvd Ste 105",
               "city": "Tucson",
               "state": "Arizona",
               "postal_code": "85745-1444"
             },
             {
               "name": "1912 Brewing",
               "brewery_type": "micro",
               "address": "2045 N Forbes Blvd Ste 105",
               "city": "Tucson",
               "state": "Arizona",
               "postal_code": "85745-1444"
             },
             {
               "name": "1912 Brewing",
               "brewery_type": "micro",
               "address": "2045 N Forbes Blvd Ste 105",
               "city": "Tucson",
               "state": "Arizona",
               "postal_code": "85745-1444"
             }
   ];
   
   // Function to fetch a random brewery from the hardcoded array
   function fetchRandomBrewery() {
       try {
           // Get a random index within the breweryData array length
           const randomIndex = Math.floor(Math.random() * breweryData.length);
           // Return the brewery at the random index
           return breweryData[randomIndex];
       } catch (error) {
           console.error('Error fetching random brewery:', error);
           return null; // Return null if there's an error
       }
   }
   
   // Function to handle getting a random brewery
   function handleRandomBrewery() {
       const randomBrewery = fetchRandomBrewery();
       if (randomBrewery) {
           renderRandomBrewery(randomBrewery); // Render the random brewery
       } else {
           console.error('Failed to get random brewery');
       }
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
       address.textContent = `Address: ${brewery.address || 'N/A'}, ${brewery.city || 'N/A'}, ${brewery.state || 'N/A'}, ${brewery.postal_code || 'N/A'}`;
   
       cardBody.appendChild(title);
       cardBody.appendChild(type);
       cardBody.appendChild(address);
   
       breweryCard.appendChild(cardBody);
   
       // Get the div where you want to append the card and append the card
       const breweryList = document.getElementById('brewery-list');
       breweryList.innerHTML = ''; // Clear previous content
       breweryList.appendChild(breweryCard);
   }
   
   // Function to handle search input and filter breweries by name accordingly
   function handleSearch() {
       const searchInput = document.getElementById('search-input').value.trim();
   
       const filteredBreweries = breweryData.filter(brewery => brewery.name.toLowerCase().includes(searchInput.toLowerCase()));
       renderBreweries(filteredBreweries);
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
               <div class="card">
                   <div class="card-body">
                       <h5 class="card-title">${brewery.name}</h5>
                       <p class="card-text">Type: ${brewery.brewery_type}</p>
                       <p class="card-text">Address: ${brewery.address || 'N/A'}, ${brewery.city || 'N/A'}, ${brewery.state || 'N/A'}, ${brewery.postal_code || 'N/A'}</p>
                   </div>
               </div>
           `;
   
           // Add card to the brewery list
           breweryList.appendChild(breweryCard);
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
   
   // Add event listener for the random button
   document.getElementById('random-button').addEventListener('click', handleRandomBrewery);
   
   // Initially render breweries without any filter
   renderBreweries(breweryData);
   