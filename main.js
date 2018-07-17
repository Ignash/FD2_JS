(function () {
    const loadDataButtonElement = document.getElementById('loadData'),
          dataContainerElement = document.getElementById('dataContainer');

    loadDataButtonElement.addEventListener('click', () => {

        function creatDataBlockElement(file) {

            for (let user in file) {
                const dataBlockElement = createUserDataBlockElement(file[user]);
                dataContainerElement.appendChild(dataBlockElement);
            }

            // file.forEach(item => {
            //     const dataBlockElement = createUserDataBlockElement(item);
            //     dataContainerElement.appendChild(dataBlockElement);
            // });
        };

        loadData('./users.json', creatDataBlockElement);
    });

    function loadData(url, callback) {
        const request = new XMLHttpRequest();

        request.open('get', url);
        request.addEventListener('load', () => {
            const result = JSON.parse(request.response);

            callback(result);
        });

        request.send();
    }

    function createUserDataBlockElement(user) {
        const result = document.createElement('div'),
              nameElement = document.createElement('span'),
              ageElement = document.createElement('span');

        nameElement.textContent = user.name;
        ageElement.textContent = user.age;

        result.appendChild(nameElement);
        result.appendChild(ageElement);

        return result;
    }

})();
