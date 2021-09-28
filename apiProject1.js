    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function fetchData() {
    let input = document.getElementById('inputCountry')
    let countryName = input.value
fetch(`https://api.covid19api.com/total/country/${countryName}/status/confirmed?from=2020-03-01T00:00:00Z&to=${date}T00:00:00Z`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        displayResults(data);
    })

    }

    function displayResults(data) {
        const section = document.querySelector("section")
        while (section.firstChild) {
            section.removeChild(section.firstChild)
        }
        let dataLength = data.length-1
        let capCountry = data[dataLength].Country;
        let cases = data[dataLength].Cases;
        let convertedCases = cases.toLocaleString('en-US');
        let dashOutput = ("Total Covid-19 cases since first case for " + capCountry + " as of " + date + ": " + convertedCases);
        section.append(dashOutput)
    }


let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', fetchData)
  