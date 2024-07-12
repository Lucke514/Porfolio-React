class ApiLinkedIn {
    public async getProfile() {
        const url = 'https://linkedin-data-api.p.rapidapi.com/get-profile-data-by-url?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Flucas-gonzalez-espinosa-073bba248%2F';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0bc09a0d40msh444e1a1df6b07dfp15a830jsn164bbf080b01',
                'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

const apiLinkedIn = new ApiLinkedIn();
export default apiLinkedIn;