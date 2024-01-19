
const fetchUrl= "/api/v1/shorten";



const displayNav = () => {
	const navElement = document.getElementById("nav")
	if (navElement.style.display === "block") {
		navElement.style.display = "none";
	} else {
		navElement.style.display = "block";
	}
};

document.getElementById("ul-menu-btn").addEventListener("click", displayNav);

//WORKING FETCH FUNCTION
{/*function shortenUrl(){

const url = '';
const longUrl = document.getElementById("input").value;

// URL-encode the longUrl
const encodedUrl = encodeURIComponent(longUrl);

// Make a POST request to shorten the URL
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
  body: `url=${encodedUrl}`,
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Shortened URL:', data.result_url);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}*/}



const shortenUrl = async() => {
	event.preventDefault()
	const longUrl = document.getElementById("input").value;
	const encodedUrl = encodeURIComponent(longUrl);
	try {
		const res = await fetch('https://cleanuri.com/api/v1/shorten', {
			method: "POST",
			headers: {
				"Content-Type": 'application/x-www-form-urlencoded',
				'Accept': 'application/json',
			},
			body: `url=${encodedUrl}`
		})
		const data = await res.json()
		//result_url
		console.log(Object.values(data).map(item => `<a class="short-url">${item}</a>`))
	} catch (error) {
		console.error('Error:', error);
	}
}

document.getElementById("submitBtn").addEventListener("click", shortenUrl);