// intotdeauna importam React, pentru a putea 
// folosi JSX (JS combinat cu HTML)
import React from 'react';

// pentru o componenta care nu se schimba din momentul afisarii
// este de ajuns sa facem o functie care returneaza un div
const UserItem = function() {
    // ATENTIE! intotdeauna este returnat un singur element HTML!
    // (de obicei un div), care le contine pe celelalte
    return(
        <div>
            <h2>Daniel Hosea</h2>
            <p>daniel.hosea@gmail.com</p>
        </div>
    );
}

// pentru a putea fi utilizata in alte locuri, componenta trebuie exportata
export default UserItem;