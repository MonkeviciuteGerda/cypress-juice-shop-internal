export default class ApiRequests {
    createAddress(details) {
        const token = window.localStorage.getItem('token');
        const body = {
            country: details.country,
            fullName: details.addressName,
            mobileNum: details.mobileNumber,
            zipCode: details.zipCode,
            streetAddress: details.address,
            city: details.city,
            state: details.state
          }

        cy.request({
            method: 'POST',
            url: '/api/Addresss/',
            body,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}